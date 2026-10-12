import type { Tenses } from "../models/Tenses.ts";
import type { Verb } from "../models/Verb.ts";
import type { Pronouns } from "../models/Pronouns.ts";

export interface IConjugator<Tense extends Tenses> {
  tense: Tense;
  conjugate(verb: Verb, pronoun: Pronouns): string;
}
