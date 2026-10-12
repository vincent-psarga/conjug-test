import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Nettoyer: Verb = {
  infinitive: "nettoyer",
  group: VerbGroups.first,
  stems: {
    [Tenses.Futur]: "nettoier",
  },
  irregularities: {
    [Tenses.Present]: {
      // "y" becomes "i" before a silent "e"
      [Pronouns.je]: "nettoie",
      [Pronouns.tu]: "nettoies",
      [Pronouns.il]: "nettoie",
      [Pronouns.ils]: "nettoient",
    },
  },
};
