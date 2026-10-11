import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Voir: Verb = {
    infinitive: "voir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "voy",
        [Tenses.Futur]: "verr",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "vois",
            [Pronouns.tu]: "vois",
            [Pronouns.il]: "voit",
            [Pronouns.nous]: "voyons",
            [Pronouns.vous]: "voyez",
            [Pronouns.ils]: "voient",
        },
    },
};
