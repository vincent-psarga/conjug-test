import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Attendre: Verb = {
  infinitive: "attendre",
  group: VerbGroups.third,
  stems: {
    [Tenses.Imparfait]: "attend",
    [Tenses.PasseSimple]: "attendi",
  },
  irregularities: {
    [Tenses.Present]: {
      [Pronouns.je]: "attends",
      [Pronouns.tu]: "attends",
      [Pronouns.il]: "attend",
      [Pronouns.nous]: "attendons",
      [Pronouns.vous]: "attendez",
      [Pronouns.ils]: "attendent",
    },
  },
};
