import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Boire: Verb = {
    infinitive: "boire",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "buv",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "bois",
            [Pronouns.tu]: "bois",
            [Pronouns.il]: "boit",
            [Pronouns.nous]: "buvons",
            [Pronouns.vous]: "buvez",
            [Pronouns.ils]: "boivent",
        },
    },
};
