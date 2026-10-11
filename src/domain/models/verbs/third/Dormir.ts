import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Dormir: Verb = {
    infinitive: "dormir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "dorm",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "dors",
            [Pronouns.tu]: "dors",
            [Pronouns.il]: "dort",
            [Pronouns.nous]: "dormons",
            [Pronouns.vous]: "dormez",
            [Pronouns.ils]: "dorment",
        },
    },
};
