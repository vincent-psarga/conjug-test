import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Dire: Verb = {
    infinitive: "dire",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "dis",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "dis",
            [Pronouns.tu]: "dis",
            [Pronouns.il]: "dit",
            [Pronouns.nous]: "disons",
            [Pronouns.vous]: "dites",
            [Pronouns.ils]: "disent",
        },
    },
};
