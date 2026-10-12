import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Mener: Verb = {
  infinitive: "mener",
  group: VerbGroups.first,
  stems: {
    [Tenses.Futur]: "mèner",
  },
  irregularities: {
    [Tenses.Present]: {
      // "e" becomes "è" before a silent "e"
      [Pronouns.je]: "mène",
      [Pronouns.tu]: "mènes",
      [Pronouns.il]: "mène",
      [Pronouns.ils]: "mènent",
    },
  },
};
