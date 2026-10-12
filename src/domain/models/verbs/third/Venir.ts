import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Venir: Verb = {
  infinitive: "venir",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "ven",
    [Tenses.Futur]: "viendr",
    [Tenses.PasseSimple]: "vin",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "viens",
      [Pronouns.tu]: "viens",
      [Pronouns.il]: "vient",
      [Pronouns.nous]: "venons",
      [Pronouns.vous]: "venez",
      [Pronouns.ils]: "viennent",
    },
  },
};
