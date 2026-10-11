import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Ranger: Verb = {
    infinitive: "ranger",
    group: VerbGroups.first,
    irregularities: {
        [Tenses.Present]: {
            // an "e" must be added otherwise it sounds like a "hard G"
            [Pronouns.nous]: "rangeons",
        },
        [Tenses.Imparfait]: {
            // an "e" must be added before "a" otherwise it sounds like a "hard G"
            [Pronouns.je]: "rangeais",
            [Pronouns.tu]: "rangeais",
            [Pronouns.il]: "rangeait",
            [Pronouns.ils]: "rangeaient",
        },
    },
};
