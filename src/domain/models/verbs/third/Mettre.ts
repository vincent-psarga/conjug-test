import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Mettre: Verb = {
    infinitive: "mettre",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "mett",
        [Tenses.PasseSimple]: "mi",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "mets",
            [Pronouns.tu]: "mets",
            [Pronouns.il]: "met",
            [Pronouns.nous]: "mettons",
            [Pronouns.vous]: "mettez",
            [Pronouns.ils]: "mettent",
        },
    },
};
