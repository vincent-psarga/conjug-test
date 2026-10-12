import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Avancer: Verb = {
  infinitive: "avancer",
  group: VerbGroups.first,
  irregularities: {
    [Tenses.Present]: {
      // "c" becomes "ç" otherwise it sounds like a "hard C"
      [Pronouns.nous]: "avançons",
    },
    [Tenses.Imparfait]: {
      // "c" becomes "ç" before "a" otherwise it sounds like a "hard C"
      [Pronouns.je]: "avançais",
      [Pronouns.tu]: "avançais",
      [Pronouns.il]: "avançait",
      [Pronouns.ils]: "avançaient",
    },
    [Tenses.PasseSimple]: {
      // "c" becomes "ç" before "a" otherwise it sounds like a "hard C"
      [Pronouns.je]: "avançai",
      [Pronouns.tu]: "avanças",
      [Pronouns.il]: "avança",
      [Pronouns.nous]: "avançâmes",
      [Pronouns.vous]: "avançâtes",
    },
  },
};
