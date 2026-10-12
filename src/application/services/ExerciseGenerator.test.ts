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
  ALL_TENSES,
  DEFAULT_TENSES,
  conjugate,
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

describe("pickVerbs", () => {
  it("always picks être, avoir and aller, then 5 + 5 + 7 verbs of each group", () => {
    for (let run = 0; run < RUNS; run++) {
      const verbs = pickVerbs();

      expect(verbs).toHaveLength(20);
      expect(verbs).toEqual(expect.arrayContaining([Etre, Avoir, Aller]));
      const groups = countBy(verbs.map((verb) => verb.group));
      expect(groups.get(VerbGroups.auxilliaries)).toBe(2);
      expect(groups.get(VerbGroups.first)).toBe(5);
      expect(groups.get(VerbGroups.second)).toBe(5);
      // aller + 7 others
      expect(groups.get(VerbGroups.third)).toBe(8);
    }
  });

  it("never picks the same verb twice", () => {
    for (let run = 0; run < RUNS; run++) {
      expect(new Set(pickVerbs()).size).toBe(20);
    }
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

  it("fills each row with the conjugated form", () => {
    for (const row of generateExercise(ALL_TENSES)) {
      expect(row.form).toBe(conjugate(row.verb, row.pronoun, row.tense));
    }
  });
});
