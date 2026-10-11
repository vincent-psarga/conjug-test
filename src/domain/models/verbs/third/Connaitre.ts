import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Connaitre: Verb = {
    infinitive: "connaître",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "connaiss",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "connais",
            [Pronouns.tu]: "connais",
            [Pronouns.il]: "connaît",
            [Pronouns.nous]: "connaissons",
            [Pronouns.vous]: "connaissez",
            [Pronouns.ils]: "connaissent",
        },
    },
};
