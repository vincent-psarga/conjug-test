import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Esperer: Verb = {
  infinitive: "espérer",
  group: VerbGroups.first,
  irregularities: {
    [Tenses.Present]: {
      // "é" becomes "è" before a silent "e"
      [Pronouns.je]: "espère",
      [Pronouns.tu]: "espères",
      [Pronouns.il]: "espère",
      [Pronouns.ils]: "espèrent",
    },
  },
};
