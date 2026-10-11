import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Changer: Verb = {
    infinitive: "changer",
    group: VerbGroups.first,
    irregularities: {
        [Tenses.Present]: {
            // an "e" must be added otherwise it sounds like a "hard G"
            [Pronouns.nous]: "changeons",
        },
        [Tenses.Imparfait]: {
            // an "e" must be added before "a" otherwise it sounds like a "hard G"
            [Pronouns.je]: "changeais",
            [Pronouns.tu]: "changeais",
            [Pronouns.il]: "changeait",
            [Pronouns.ils]: "changeaient",
        },
        [Tenses.PasseSimple]: {
            // an "e" must be added before "a" otherwise it sounds like a "hard G"
            [Pronouns.je]: "changeai",
            [Pronouns.tu]: "changeas",
            [Pronouns.il]: "changea",
            [Pronouns.nous]: "changeâmes",
            [Pronouns.vous]: "changeâtes",
        },
    },
};
