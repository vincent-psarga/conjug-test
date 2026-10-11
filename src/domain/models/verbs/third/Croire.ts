import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Croire: Verb = {
    infinitive: "croire",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "croy",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "crois",
            [Pronouns.tu]: "crois",
            [Pronouns.il]: "croit",
            [Pronouns.nous]: "croyons",
            [Pronouns.vous]: "croyez",
            [Pronouns.ils]: "croient",
        },
    },
};
