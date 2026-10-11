import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Ecrire: Verb = {
    infinitive: "écrire",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "écriv",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "écris",
            [Pronouns.tu]: "écris",
            [Pronouns.il]: "écrit",
            [Pronouns.nous]: "écrivons",
            [Pronouns.vous]: "écrivez",
            [Pronouns.ils]: "écrivent",
        },
    },
};
