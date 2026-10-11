import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Tenir: Verb = {
    infinitive: "tenir",
    group: VerbGroups.third,
    stems: {
        [Tenses.Imparfait]: "ten",
        [Tenses.Futur]: "tiendr",
    },
    irregularities: {
        [Tenses.Present]: {
            [Pronouns.je]: "tiens",
            [Pronouns.tu]: "tiens",
            [Pronouns.il]: "tient",
            [Pronouns.nous]: "tenons",
            [Pronouns.vous]: "tenez",
            [Pronouns.ils]: "tiennent",
        },
    },
};
