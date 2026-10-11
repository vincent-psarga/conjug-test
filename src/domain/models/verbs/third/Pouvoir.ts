import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Pouvoir: Verb = {
    infinitive: "pouvoir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "pouv",
        [Tenses.Futur]: "pourr",
        [Tenses.PasseSimple]: "pu",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "peux",
            [Pronouns.tu]: "peux",
            [Pronouns.il]: "peut",
            [Pronouns.nous]: "pouvons",
            [Pronouns.vous]: "pouvez",
            [Pronouns.ils]: "peuvent",
        },
    },
};
