import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Repeter: Verb = {
  infinitive: "répéter",
  group: VerbGroups.first,
  irregularities: {
    [Tenses.Present]: {
      // "é" becomes "è" before a silent "e"
      [Pronouns.je]: "répète",
      [Pronouns.tu]: "répètes",
      [Pronouns.il]: "répète",
      [Pronouns.ils]: "répètent",
    },
  },
};
