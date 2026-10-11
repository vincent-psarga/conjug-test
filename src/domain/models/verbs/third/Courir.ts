import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Courir: Verb = {
    infinitive: "courir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "cour",
        [Tenses.Futur]: "courr",
        [Tenses.PasseSimple]: "couru",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "cours",
            [Pronouns.tu]: "cours",
            [Pronouns.il]: "court",
            [Pronouns.nous]: "courons",
            [Pronouns.vous]: "courez",
            [Pronouns.ils]: "courent",
        },
    },
};
