import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Vendre: Verb = {
  infinitive: "vendre",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "vend",
    [Tenses.PasseSimple]: "vendi",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "vends",
      [Pronouns.tu]: "vends",
      [Pronouns.il]: "vend",
      [Pronouns.nous]: "vendons",
      [Pronouns.vous]: "vendez",
      [Pronouns.ils]: "vendent",
    },
  },
};
