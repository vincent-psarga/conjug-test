import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Perdre: Verb = {
    infinitive: "perdre",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "perd",
        [Tenses.PasseSimple]: "perdi",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "perds",
            [Pronouns.tu]: "perds",
            [Pronouns.il]: "perd",
            [Pronouns.nous]: "perdons",
            [Pronouns.vous]: "perdez",
            [Pronouns.ils]: "perdent",
        },
    },
};
