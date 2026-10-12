import { describe, expect, it } from "vitest";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import { Tenses } from "../../domain/models/Tenses.ts";
import { VerbGroups } from "../../domain/models/VerbGroups.ts";
import {
  Aller,
  Avoir,
  Etre,
  FIRST_GROUP_VERBS,
  SECOND_GROUP_VERBS,
  THIRD_GROUP_VERBS,
} from "../../domain/models/verbs/index.ts";
import {
  ALL_GROUPS,
  ALL_TENSES,
  DEFAULT_TENSES,
  conjugate,
  countRowsPerGroup,
  distributeEvenly,
  generateExercise,
  pickVerbs,
} from "./ExerciseGenerator.ts";

const countBy = <T>(values: T[]) => {
  const counts = new Map<T, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
};

// Random draws: run each check several times to catch unlucky cases.
const RUNS = 50;

describe("conjugate", () => {
  it.each([
    [Tenses.Present, "vont"],
    [Tenses.Imparfait, "allaient"],
    [Tenses.Futur, "iront"],
    [Tenses.PasseSimple, "allèrent"],
  ])("uses the %s conjugator", (tense, expected) => {
    expect(conjugate(Aller, Pronouns.ils, tense)).toBe(expected);
  });

  it("conjugates every verb with every pronoun in every tense", () => {
    const verbs = [
      Etre,
      Avoir,
      Aller,
      ...FIRST_GROUP_VERBS,
      ...SECOND_GROUP_VERBS,
      ...THIRD_GROUP_VERBS,
    ];
    for (const verb of verbs) {
      for (const tense of ALL_TENSES) {
        for (const pronoun of Object.values(Pronouns)) {
          expect(conjugate(verb, pronoun, tense)).toMatch(/^\p{L}+$/u);
        }
      }
    }
  });
});

describe("countRowsPerGroup", () => {
  const { auxiliaries, first, second, third } = VerbGroups;

  it.each([
    // auxiliaries alone fill every row
    [[auxiliaries], { [auxiliaries]: 20 }],
    // otherwise être and avoir appear once each
    [ALL_GROUPS, { [auxiliaries]: 2, [first]: 6, [second]: 6, [third]: 6 }],
    [[auxiliaries, first], { [auxiliaries]: 2, [first]: 18 }],
    [[auxiliaries, first, third], { [auxiliaries]: 2, [first]: 9, [third]: 9 }],
    // extra rows go to the 3rd group, then the 2nd
    [[first, second, third], { [first]: 6, [second]: 7, [third]: 7 }],
    [[first, third], { [first]: 10, [third]: 10 }],
    [[first], { [first]: 20 }],
  ])("splits rows for %j", (groups, expected) => {
    expect(Object.fromEntries(countRowsPerGroup(groups))).toEqual(expected);
  });

  it("gives the extra row to the 3rd group first", () => {
    expect(Object.fromEntries(countRowsPerGroup([first, third], 21))).toEqual({
      [first]: 10,
      [third]: 11,
    });
  });

  it("gives the extra row to the 2nd group when the 3rd isn't selected", () => {
    expect(Object.fromEntries(countRowsPerGroup([first, second], 21))).toEqual({
      [first]: 10,
      [second]: 11,
    });
  });
});

describe("pickVerbs", () => {
  const groupsOf = (verbs: { group: VerbGroups }[]) =>
    Object.fromEntries(countBy(verbs.map((verb) => verb.group)));

  it("picks être and avoir once, aller, and 6 verbs of each other group by default", () => {
    for (let run = 0; run < RUNS; run++) {
      const verbs = pickVerbs();

      expect(verbs).toHaveLength(20);
      expect(verbs).toEqual(expect.arrayContaining([Etre, Avoir, Aller]));
      expect(groupsOf(verbs)).toEqual({
        [VerbGroups.auxiliaries]: 2,
        [VerbGroups.first]: 6,
        [VerbGroups.second]: 6,
        [VerbGroups.third]: 6,
      });
    }
  });

  it("never picks the same verb twice when other groups are selected", () => {
    for (const groups of [
      ALL_GROUPS,
      [VerbGroups.second],
      [VerbGroups.third],
    ]) {
      for (let run = 0; run < RUNS; run++) {
        expect(new Set(pickVerbs(groups)).size).toBe(20);
      }
    }
  });

  it("only picks verbs of the selected groups", () => {
    const verbs = pickVerbs([VerbGroups.first, VerbGroups.second]);

    expect(groupsOf(verbs)).toEqual({
      [VerbGroups.first]: 10,
      [VerbGroups.second]: 10,
    });
  });

  it("always includes aller with the 3rd group", () => {
    for (let run = 0; run < RUNS; run++) {
      expect(pickVerbs([VerbGroups.first, VerbGroups.third])).toContain(Aller);
    }
  });

  it("picks être and avoir 10 times each when only auxiliaries are selected", () => {
    const verbs = pickVerbs([VerbGroups.auxiliaries]);

    expect(countBy(verbs)).toEqual(
      new Map([
        [Etre, 10],
        [Avoir, 10],
      ]),
    );
  });
});

describe("distributeEvenly", () => {
  it("gives each value the same count when possible", () => {
    const counts = countBy(distributeEvenly(["a", "b", "c", "d"], 20));

    expect([...counts.values()]).toEqual([5, 5, 5, 5]);
  });

  it("gives the leftovers to different values, one extra each", () => {
    for (let run = 0; run < RUNS; run++) {
      const counts = countBy(distributeEvenly(["a", "b", "c"], 20));

      expect([...counts.values()].sort()).toEqual([6, 7, 7]);
    }
  });

  it("varies which values get the leftovers", () => {
    const valuesWithFour = new Set<string>();
    for (let run = 0; run < RUNS; run++) {
      const counts = countBy(distributeEvenly(["a", "b", "c", "d", "e"], 21));
      for (const [value, count] of counts) {
        if (count === 5) valuesWithFour.add(value);
      }
    }

    expect(valuesWithFour.size).toBeGreaterThan(1);
  });
});

describe("generateExercise", () => {
  it("uses the default tenses, without passé simple", () => {
    for (let run = 0; run < RUNS; run++) {
      const tenses = new Set(generateExercise().map((row) => row.tense));

      expect([...tenses].sort()).toEqual([...DEFAULT_TENSES].sort());
    }
  });

  it("only uses the selected tenses, evenly", () => {
    const selected = [Tenses.Imparfait, Tenses.PasseSimple];
    const counts = countBy(generateExercise(selected).map((row) => row.tense));

    expect(Object.fromEntries(counts)).toEqual({
      [Tenses.Imparfait]: 10,
      [Tenses.PasseSimple]: 10,
    });
  });

  it("spreads pronouns evenly: two get 4 rows, the others 3", () => {
    for (let run = 0; run < RUNS; run++) {
      const counts = countBy(generateExercise().map((row) => row.pronoun));

      expect(counts.size).toBe(6);
      expect([...counts.values()].sort()).toEqual([3, 3, 3, 3, 4, 4]);
    }
  });

  it("only uses verbs of the selected groups", () => {
    const rows = generateExercise(DEFAULT_TENSES, [VerbGroups.second]);

    expect(rows.every((row) => row.verb.group === VerbGroups.second)).toBe(
      true,
    );
  });

  it("avoids repeated rows when only auxiliaries are selected", () => {
    for (let run = 0; run < RUNS; run++) {
      const rows = generateExercise(DEFAULT_TENSES, [VerbGroups.auxiliaries]);

      expect(new Set(rows.map((row) => row.form)).size).toBe(20);
    }
  });

  it("fills each row with the conjugated form", () => {
    for (const row of generateExercise(ALL_TENSES)) {
      expect(row.form).toBe(conjugate(row.verb, row.pronoun, row.tense));
    }
  });
});
