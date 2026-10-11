import type {IConjugator} from "../../domain/services/IConjugator.ts";
import type {Verb} from "../../domain/models/Verb.ts";
import {Pronouns} from "../../domain/models/Pronouns.ts";
import {Tenses} from "../../domain/models/Tenses.ts";
import {
    Aller,
    Avoir,
    Etre,
    FIRST_GROUP_VERBS,
    SECOND_GROUP_VERBS,
    THIRD_GROUP_VERBS,
} from "../../domain/models/verbs/index.ts";
import {PresentConjugator} from "./PresentConjugator.ts";
import {ImparfaitConjugator} from "./ImparfaitConjugator.ts";
import {FuturConjugator} from "./FuturConjugator.ts";
import {PasseSimpleConjugator} from "./PasseSimpleConjugator.ts";

export type ExerciseRow = {
    verb: Verb,
    pronoun: Pronouns,
    tense: Tenses,
    form: string,
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

function pick<T>(items: readonly T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}

function shuffle<T>(items: readonly T[]): T[] {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

export function conjugate(verb: Verb, pronoun: Pronouns, tense: Tenses): string {
    return CONJUGATORS[tense].conjugate(verb, pronoun);
}

// 20 verbs: être, avoir, aller + 5 of group 1 + 5 of group 2 + 7 of group 3.
export function pickVerbs(): Verb[] {
    return [
        Etre,
        Avoir,
        Aller,
        ...shuffle(FIRST_GROUP_VERBS).slice(0, 5),
        ...shuffle(SECOND_GROUP_VERBS).slice(0, 5),
        ...shuffle(THIRD_GROUP_VERBS).slice(0, 7),
    ];
}

// Spreads the rows evenly between the tenses. When they can't be split equally,
// the leftover rows go to randomly chosen tenses, one extra row each.
export function distributeTenses(tenses: readonly Tenses[], count: number): Tenses[] {
    const perTense = Math.floor(count / tenses.length);
    const extras = shuffle(tenses).slice(0, count % tenses.length);
    return shuffle([
        ...tenses.flatMap((tense) => Array<Tenses>(perTense).fill(tense)),
        ...extras,
    ]);
}

export function generateExercise(tenses: readonly Tenses[] = DEFAULT_TENSES): ExerciseRow[] {
    const verbs = shuffle(pickVerbs());
    const rowTenses = distributeTenses(tenses, verbs.length);
    return verbs.map((verb, i) => {
        const pronoun = pick(PRONOUNS);
        const tense = rowTenses[i];
        return {verb, pronoun, tense, form: conjugate(verb, pronoun, tense)};
    });
}
