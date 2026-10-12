import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Preferer: Verb = {
  infinitive: "préférer",
  group: VerbGroups.first,
  irregularities: {
    [Tenses.Present]: {
      // "é" becomes "è" before a silent "e"
      [Pronouns.je]: "préfère",
      [Pronouns.tu]: "préfères",
      [Pronouns.il]: "préfère",
      [Pronouns.ils]: "préfèrent",
    },
  },
};
