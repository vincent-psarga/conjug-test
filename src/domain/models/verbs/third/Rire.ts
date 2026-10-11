import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Rire: Verb = {
    infinitive: "rire",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "ri",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "ris",
            [Pronouns.tu]: "ris",
            [Pronouns.il]: "rit",
            [Pronouns.nous]: "rions",
            [Pronouns.vous]: "riez",
            [Pronouns.ils]: "rient",
        },
    },
};
