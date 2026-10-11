import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Etre: Verb = {
    infinitive: "être",
    group: VerbGroups.auxilliaries,
    stems: {
        [Tenses.Imparfait]: "ét",
        [Tenses.Futur]: "ser",
        [Tenses.PasseSimple]: "fu",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "suis",
            [Pronouns.tu]: "es",
            [Pronouns.il]: "est",
            [Pronouns.nous]: "sommes",
            [Pronouns.vous]: "êtes",
            [Pronouns.ils]: "sont",
        },
    },
};
