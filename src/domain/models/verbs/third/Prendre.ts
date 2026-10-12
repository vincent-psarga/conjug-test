import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Prendre: Verb = {
  infinitive: "prendre",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "pren",
    [Tenses.PasseSimple]: "pri",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "prends",
      [Pronouns.tu]: "prends",
      [Pronouns.il]: "prend",
      [Pronouns.nous]: "prenons",
      [Pronouns.vous]: "prenez",
      [Pronouns.ils]: "prennent",
    },
  },
};
