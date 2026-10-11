import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Recevoir: Verb = {
    infinitive: "recevoir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "recev",
        [Tenses.Futur]: "recevr",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "reçois",
            [Pronouns.tu]: "reçois",
            [Pronouns.il]: "reçoit",
            [Pronouns.nous]: "recevons",
            [Pronouns.vous]: "recevez",
            [Pronouns.ils]: "reçoivent",
        },
    },
};
