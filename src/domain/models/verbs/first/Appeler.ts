import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Appeler: Verb = {
  infinitive: "appeler",
  group: VerbGroups.first,
  stems: {
    [Tenses.Futur]: "appeller",
  },
  irregularities: {
    [Tenses.Present]: {
      // the "l" is doubled before a silent "e"
      [Pronouns.je]: "appelle",
      [Pronouns.tu]: "appelles",
      [Pronouns.il]: "appelle",
      [Pronouns.ils]: "appellent",
    },
  },
};
