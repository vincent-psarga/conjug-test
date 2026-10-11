import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Mourir: Verb = {
    infinitive: "mourir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "mour",
        [Tenses.Futur]: "mourr",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "meurs",
            [Pronouns.tu]: "meurs",
            [Pronouns.il]: "meurt",
            [Pronouns.nous]: "mourons",
            [Pronouns.vous]: "mourez",
            [Pronouns.ils]: "meurent",
        },
    },
};
