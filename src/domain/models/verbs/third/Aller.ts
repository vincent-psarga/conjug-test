import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Aller: Verb = {
  infinitive: "aller",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "all",
    [Tenses.Futur]: "ir",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "vais",
      [Pronouns.tu]: "vas",
      [Pronouns.il]: "va",
      [Pronouns.nous]: "allons",
      [Pronouns.vous]: "allez",
      [Pronouns.ils]: "vont",
    },
    [Tenses.PasseSimple]: {
      // conjugated like a first group verb
      [Pronouns.je]: "allai",
      [Pronouns.tu]: "allas",
      [Pronouns.il]: "alla",
      [Pronouns.nous]: "allâmes",
      [Pronouns.vous]: "allâtes",
      [Pronouns.ils]: "allèrent",
    },
  },
};
