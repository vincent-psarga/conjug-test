import type { IConjugator } from "../../domain/services/IConjugator.ts";
import type { Verb } from "../../domain/models/Verb.ts";
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
import { PresentConjugator } from "./PresentConjugator.ts";
import { ImparfaitConjugator } from "./ImparfaitConjugator.ts";
import { FuturConjugator } from "./FuturConjugator.ts";
import { PasseSimpleConjugator } from "./PasseSimpleConjugator.ts";

export type ExerciseRow = {
  verb: Verb;
  pronoun: Pronouns;
  tense: Tenses;
  form: string;
};

const CONJUGATORS: { [Tense in Tenses]: IConjugator<Tense> } = {
  [Tenses.Present]: new PresentConjugator(),
  [Tenses.Imparfait]: new ImparfaitConjugator(),
  [Tenses.Futur]: new FuturConjugator(),
  [Tenses.PasseSimple]: new PasseSimpleConjugator(),
};

const PRONOUNS = Object.values(Pronouns);
export const ALL_TENSES = Object.values(Tenses);
export const DEFAULT_TENSES = [Tenses.Present, Tenses.Imparfait, Tenses.Futur];
export const ALL_GROUPS = Object.values(VerbGroups);

export const ROWS_PER_EXERCISE = 20;

// When the rows can't be split evenly between groups, extra rows go to these first.
const EXTRA_ROWS_PRIORITY = [
  VerbGroups.third,
  VerbGroups.second,
  VerbGroups.first,
];

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function conjugate(
  verb: Verb,
  pronoun: Pronouns,
  tense: Tenses,
): string {
  return CONJUGATORS[tense].conjugate(verb, pronoun);
}

// How many rows each selected group gets:
// - auxiliaries alone fill every row (half être, half avoir),
// - otherwise être and avoir appear once each, and the other groups share the
//   remaining rows evenly, extra rows going to the 3rd group, then the 2nd.
export function countRowsPerGroup(
  groups: readonly VerbGroups[],
  total: number = ROWS_PER_EXERCISE,
): Map<VerbGroups, number> {
  const others = ALL_GROUPS.filter(
    (group) => group !== VerbGroups.auxiliaries && groups.includes(group),
  );
  const counts = new Map<VerbGroups, number>();
  if (others.length === 0) {
    counts.set(VerbGroups.auxiliaries, total);
    return counts;
  }

  let remaining = total;
  if (groups.includes(VerbGroups.auxiliaries)) {
    counts.set(VerbGroups.auxiliaries, 2);
    remaining -= 2;
  }
  const perGroup = Math.floor(remaining / others.length);
  const extras = EXTRA_ROWS_PRIORITY.filter((group) =>
    others.includes(group),
  ).slice(0, remaining % others.length);
  for (const group of others) {
    counts.set(group, perGroup + (extras.includes(group) ? 1 : 0));
  }
  return counts;
}

function pickGroupVerbs(
  group: VerbGroups,
  count: number,
  onlyGroup: boolean,
): Verb[] {
  switch (group) {
    case VerbGroups.auxiliaries:
      return onlyGroup ? distributeEvenly([Etre, Avoir], count) : [Etre, Avoir];
    case VerbGroups.first:
      return shuffle(FIRST_GROUP_VERBS).slice(0, count);
    case VerbGroups.second:
      return shuffle(SECOND_GROUP_VERBS).slice(0, count);
    case VerbGroups.third:
      // Aller is always part of the 3rd group's rows.
      return [Aller, ...shuffle(THIRD_GROUP_VERBS).slice(0, count - 1)];
  }
}

export function pickVerbs(groups: readonly VerbGroups[] = ALL_GROUPS): Verb[] {
  const counts = countRowsPerGroup(groups);
  return [...counts].flatMap(([group, count]) =>
    pickGroupVerbs(group, count, counts.size === 1),
  );
}

// Spreads `count` rows evenly between the values. When they can't be split equally,
// the leftover rows go to randomly chosen values, one extra row each.
export function distributeEvenly<T>(values: readonly T[], count: number): T[] {
  const perValue = Math.floor(count / values.length);
  const extras = shuffle(values).slice(0, count % values.length);
  return shuffle([
    ...values.flatMap((value) => Array<T>(perValue).fill(value)),
    ...extras,
  ]);
}

const countValues = <T>(values: readonly T[]) => {
  const counts = new Map<T, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
};

// Bounds the search below: some selections can't avoid repeated forms at all
// (only auxiliaries in the présent gives 12 forms for 20 rows).
const MAX_SEARCH_STEPS = 10_000;

// Gives each verb a pronoun and a tense, using each of them as many times as
// `pronouns` and `tenses` do, without ever showing the same conjugated form
// twice (which also means the same verb, pronoun and tense never repeat).
// Returns undefined when no such assignment was found.
function assignWithoutRepeats(
  verbs: readonly Verb[],
  pronouns: readonly Pronouns[],
  tenses: readonly Tenses[],
): ExerciseRow[] | undefined {
  const pronounsLeft = countValues(pronouns);
  const tensesLeft = countValues(tenses);
  const usedForms = new Set<string>();
  const rows: ExerciseRow[] = [];
  let steps = 0;

  const place = (i: number): boolean => {
    if (i === verbs.length) return true;
    if (++steps > MAX_SEARCH_STEPS) return false;

    const candidates = shuffle(
      [...pronounsLeft].flatMap(([pronoun, pronounCount]) =>
        pronounCount === 0
          ? []
          : [...tensesLeft]
              .filter(([, tenseCount]) => tenseCount > 0)
              .map(([tense]) => ({ pronoun, tense })),
      ),
    );
    for (const { pronoun, tense } of candidates) {
      const form = conjugate(verbs[i], pronoun, tense);
      if (usedForms.has(form)) continue;

      usedForms.add(form);
      pronounsLeft.set(pronoun, pronounsLeft.get(pronoun)! - 1);
      tensesLeft.set(tense, tensesLeft.get(tense)! - 1);
      rows[i] = { verb: verbs[i], pronoun, tense, form };
      if (place(i + 1)) return true;
      usedForms.delete(form);
      pronounsLeft.set(pronoun, pronounsLeft.get(pronoun)! + 1);
      tensesLeft.set(tense, tensesLeft.get(tense)! + 1);
    }
    return false;
  };

  return place(0) ? rows : undefined;
}

// False when some verb appears more often than it has distinct forms in these
// tenses: repeated forms are then unavoidable, no need to search.
function canAvoidRepeats(verbs: readonly Verb[], tenses: readonly Tenses[]) {
  return [...countValues(verbs)].every(
    ([verb, count]) =>
      new Set(
        tenses.flatMap((tense) =>
          PRONOUNS.map((pronoun) => conjugate(verb, pronoun, tense)),
        ),
      ).size >= count,
  );
}

// Each attempt draws which pronouns and tenses get an extra row: an unlucky
// draw can make repeats unavoidable even when another draw wouldn't.
const MAX_ATTEMPTS = 5;

export function generateExercise(
  tenses: readonly Tenses[] = DEFAULT_TENSES,
  groups: readonly VerbGroups[] = ALL_GROUPS,
): ExerciseRow[] {
  const verbs = shuffle(pickVerbs(groups));
  const drawPronouns = () => distributeEvenly(PRONOUNS, verbs.length);
  const drawTenses = () => distributeEvenly(tenses, verbs.length);

  if (canAvoidRepeats(verbs, tenses)) {
    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      const rows = assignWithoutRepeats(verbs, drawPronouns(), drawTenses());
      if (rows) return rows;
    }
  }

  // Repeats can't be avoided: fall back to a plain random assignment.
  const pronouns = drawPronouns();
  const rowTenses = drawTenses();
  return verbs.map((verb, i) => {
    const pronoun = pronouns[i];
    const tense = rowTenses[i];
    return { verb, pronoun, tense, form: conjugate(verb, pronoun, tense) };
  });
}
