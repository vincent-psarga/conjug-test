import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Commencer: Verb = {
    infinitive: "commencer",
    group: VerbGroups.first,
    irregularities: {
        [Tenses.Present]: {
            // "c" becomes "ç" otherwise it sounds like a "hard C"
            [Pronouns.nous]: "commençons",
        },
        [Tenses.Imparfait]: {
            // "c" becomes "ç" before "a" otherwise it sounds like a "hard C"
            [Pronouns.je]: "commençais",
            [Pronouns.tu]: "commençais",
            [Pronouns.il]: "commençait",
            [Pronouns.ils]: "commençaient",
        },
    },
};
