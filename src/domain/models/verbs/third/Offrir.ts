import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Offrir: Verb = {
  infinitive: "offrir",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "offr",
    [Tenses.PasseSimple]: "offri",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "offre",
      [Pronouns.tu]: "offres",
      [Pronouns.il]: "offre",
      [Pronouns.nous]: "offrons",
      [Pronouns.vous]: "offrez",
      [Pronouns.ils]: "offrent",
    },
  },
};
