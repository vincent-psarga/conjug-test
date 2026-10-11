import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Avoir: Verb = {
    infinitive: "avoir",
    group: VerbGroups.auxilliaries,
    stems: {
        [Tenses.Imparfait]: "av",
        [Tenses.Futur]: "aur",
        [Tenses.PasseSimple]: "eu",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "ai",
            [Pronouns.tu]: "as",
            [Pronouns.il]: "a",
            [Pronouns.nous]: "avons",
            [Pronouns.vous]: "avez",
            [Pronouns.ils]: "ont",
        },
    },
};
