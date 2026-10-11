import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Ouvrir: Verb = {
    infinitive: "ouvrir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "ouvr",
        [Tenses.PasseSimple]: "ouvri",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "ouvre",
            [Pronouns.tu]: "ouvres",
            [Pronouns.il]: "ouvre",
            [Pronouns.nous]: "ouvrons",
            [Pronouns.vous]: "ouvrez",
            [Pronouns.ils]: "ouvrent",
        },
    },
};
