import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Vouloir: Verb = {
    infinitive: "vouloir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "voul",
        [Tenses.Futur]: "voudr",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "veux",
            [Pronouns.tu]: "veux",
            [Pronouns.il]: "veut",
            [Pronouns.nous]: "voulons",
            [Pronouns.vous]: "voulez",
            [Pronouns.ils]: "veulent",
        },
    },
};
