import type { Verb } from "../../Verb.ts";
import { VerbGroups } from "../../VerbGroups.ts";
import { Tenses } from "../../Tenses.ts";
import { Pronouns } from "../../Pronouns.ts";

export const Manger: Verb = {
  infinitive: "manger",
  group: VerbGroups.first,
  irregularities: {
    [Tenses.Present]: {
      // an "e" must be added otherwise it sounds like a "hard G"
      [Pronouns.nous]: "mangeons",
    },
    [Tenses.Imparfait]: {
      // an "e" must be added before "a" otherwise it sounds like a "hard G"
      [Pronouns.je]: "mangeais",
      [Pronouns.tu]: "mangeais",
      [Pronouns.il]: "mangeait",
      [Pronouns.ils]: "mangeaient",
    },
    [Tenses.PasseSimple]: {
      // an "e" must be added before "a" otherwise it sounds like a "hard G"
      [Pronouns.je]: "mangeai",
      [Pronouns.tu]: "mangeas",
      [Pronouns.il]: "mangea",
      [Pronouns.nous]: "mangeâmes",
      [Pronouns.vous]: "mangeâtes",
    },
  },
};
