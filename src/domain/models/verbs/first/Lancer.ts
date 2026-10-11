import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Lancer: Verb = {
    infinitive: "lancer",
    group: VerbGroups.first,
    irregularities: {
        [Tenses.Present]: {
            // "c" becomes "ç" otherwise it sounds like a "hard C"
            [Pronouns.nous]: "lançons",
        },
        [Tenses.Imparfait]: {
            // "c" becomes "ç" before "a" otherwise it sounds like a "hard C"
            [Pronouns.je]: "lançais",
            [Pronouns.tu]: "lançais",
            [Pronouns.il]: "lançait",
            [Pronouns.ils]: "lançaient",
        },
        [Tenses.PasseSimple]: {
            // "c" becomes "ç" before "a" otherwise it sounds like a "hard C"
            [Pronouns.je]: "lançai",
            [Pronouns.tu]: "lanças",
            [Pronouns.il]: "lança",
            [Pronouns.nous]: "lançâmes",
            [Pronouns.vous]: "lançâtes",
        },
    },
};
