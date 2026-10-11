import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Jeter: Verb = {
    infinitive: "jeter",
    group: VerbGroups.first,
    stems: {
        [Tenses.Futur]: "jetter",
    },
    irregularities: {
        [Tenses.Present]: {
            // the "t" is doubled before a silent "e"
            [Pronouns.je]: "jette",
            [Pronouns.tu]: "jettes",
            [Pronouns.il]: "jette",
            [Pronouns.ils]: "jettent",
        },
    },
};
