import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Acheter: Verb = {
    infinitive: "acheter",
    group: VerbGroups.first,
    stems: {
        [Tenses.Futur]: "achèter",
    },
    irregularities: {
        [Tenses.Present]: {
            // "e" becomes "è" before a silent "e"
            [Pronouns.je]: "achète",
            [Pronouns.tu]: "achètes",
            [Pronouns.il]: "achète",
            [Pronouns.ils]: "achètent",
        },
    },
};
