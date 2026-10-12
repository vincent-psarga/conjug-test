import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Devoir: Verb = {
  infinitive: "devoir",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "dev",
    [Tenses.Futur]: "devr",
    [Tenses.PasseSimple]: "du",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "dois",
      [Pronouns.tu]: "dois",
      [Pronouns.il]: "doit",
      [Pronouns.nous]: "devons",
      [Pronouns.vous]: "devez",
      [Pronouns.ils]: "doivent",
    },
  },
};
