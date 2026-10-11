import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Faire: Verb = {
    infinitive: "faire",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "fais",
        [Tenses.Futur]: "fer",
        [Tenses.PasseSimple]: "fi",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "fais",
            [Pronouns.tu]: "fais",
            [Pronouns.il]: "fait",
            [Pronouns.nous]: "faisons",
            [Pronouns.vous]: "faites",
            [Pronouns.ils]: "font",
        },
    },
};
