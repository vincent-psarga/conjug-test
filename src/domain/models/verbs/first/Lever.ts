import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Lever: Verb = {
    infinitive: "lever",
    group: VerbGroups.first,
    stems: {
        [Tenses.Futur]: "lèver",
    },
    irregularities: {
        [Tenses.Present]: {
            // "e" becomes "è" before a silent "e"
            [Pronouns.je]: "lève",
            [Pronouns.tu]: "lèves",
            [Pronouns.il]: "lève",
            [Pronouns.ils]: "lèvent",
        },
    },
};
