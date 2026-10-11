import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Sortir: Verb = {
    infinitive: "sortir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "sort",
        [Tenses.PasseSimple]: "sorti",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "sors",
            [Pronouns.tu]: "sors",
            [Pronouns.il]: "sort",
            [Pronouns.nous]: "sortons",
            [Pronouns.vous]: "sortez",
            [Pronouns.ils]: "sortent",
        },
    },
};
