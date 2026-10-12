import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Lire: Verb = {
  infinitive: "lire",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "lis",
    [Tenses.PasseSimple]: "lu",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "lis",
      [Pronouns.tu]: "lis",
      [Pronouns.il]: "lit",
      [Pronouns.nous]: "lisons",
      [Pronouns.vous]: "lisez",
      [Pronouns.ils]: "lisent",
    },
  },
};
