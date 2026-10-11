import type {Verb} from "../../Verb.ts";
import {VerbGroups} from "../../VerbGroups.ts";
import {Tenses} from "../../Tenses.ts";
import {Pronouns} from "../../Pronouns.ts";

export const Envoyer: Verb = {
    infinitive: "envoyer",
    group: VerbGroups.first,
    stems: {
        [Tenses.Futur]: "enverr",
    },
    irregularities: {
        [Tenses.Present]: {
            // "y" becomes "i" before a silent "e"
            [Pronouns.je]: "envoie",
            [Pronouns.tu]: "envoies",
            [Pronouns.il]: "envoie",
            [Pronouns.ils]: "envoient",
        },
    },
};
