import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Placer: Verb = {
    infinitive: "placer",
    group: VerbGroups.first,
    irregularities: {
        [Tenses.Present]: {
            // "c" becomes "ç" otherwise it sounds like a "hard C"
            [Pronouns.nous]: "plaçons",
        },
        [Tenses.Imparfait]: {
            // "c" becomes "ç" before "a" otherwise it sounds like a "hard C"
            [Pronouns.je]: "plaçais",
            [Pronouns.tu]: "plaçais",
            [Pronouns.il]: "plaçait",
            [Pronouns.ils]: "plaçaient",
        },
        [Tenses.PasseSimple]: {
            // "c" becomes "ç" before "a" otherwise it sounds like a "hard C"
            [Pronouns.je]: "plaçai",
            [Pronouns.tu]: "plaças",
            [Pronouns.il]: "plaça",
            [Pronouns.nous]: "plaçâmes",
            [Pronouns.vous]: "plaçâtes",
        },
    },
};
