import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Partir: Verb = {
    infinitive: "partir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "part",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "pars",
            [Pronouns.tu]: "pars",
            [Pronouns.il]: "part",
            [Pronouns.nous]: "partons",
            [Pronouns.vous]: "partez",
            [Pronouns.ils]: "partent",
        },
    },
};
