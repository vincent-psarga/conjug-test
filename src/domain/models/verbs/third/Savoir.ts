import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Savoir: Verb = {
  infinitive: "savoir",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "sav",
    [Tenses.Futur]: "saur",
    [Tenses.PasseSimple]: "su",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "sais",
      [Pronouns.tu]: "sais",
      [Pronouns.il]: "sait",
      [Pronouns.nous]: "savons",
      [Pronouns.vous]: "savez",
      [Pronouns.ils]: "savent",
    },
  },
};
