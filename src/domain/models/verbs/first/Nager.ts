import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Nager: Verb = {
    infinitive: "nager",
    group: VerbGroups.first,
    irregularities: {
        [Tenses.Present]: {
            // an "e" must be added otherwise it sounds like a "hard G"
            [Pronouns.nous]: "nageons",
        },
        [Tenses.Imparfait]: {
            // an "e" must be added before "a" otherwise it sounds like a "hard G"
            [Pronouns.je]: "nageais",
            [Pronouns.tu]: "nageais",
            [Pronouns.il]: "nageait",
            [Pronouns.ils]: "nageaient",
        },
        [Tenses.PasseSimple]: {
            // an "e" must be added before "a" otherwise it sounds like a "hard G"
            [Pronouns.je]: "nageai",
            [Pronouns.tu]: "nageas",
            [Pronouns.il]: "nagea",
            [Pronouns.nous]: "nageâmes",
            [Pronouns.vous]: "nageâtes",
        },
    },
};
