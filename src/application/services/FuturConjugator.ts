import { Tenses } from "../../domain/models/Tenses.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import { VerbGroups } from "../../domain/models/VerbGroups.ts";
import {
  type Endings,
  StemAndEndingsConjugator,
} from "./StemAndEndingsConjugator.ts";

const ENDINGS: Endings = {
  [Pronouns.je]: "ai",
  [Pronouns.tu]: "as",
  [Pronouns.il]: "a",
  [Pronouns.nous]: "ons",
  [Pronouns.vous]: "ez",
  [Pronouns.ils]: "ont",
};

// The stem is the infinitive, without its final "e" for "-re" verbs (prendre -> prendr).
// "-oir" verbs and other irregular ones (venir -> viendr) must define their futur stem.
// Also used by the conditionnel présent, which shares it.
export function futurStem(verb: Verb): string | undefined {
  if (verb.stems?.[Tenses.Futur]) {
    return verb.stems[Tenses.Futur];
  }
  switch (verb.group) {
    case VerbGroups.first:
    case VerbGroups.second:
      return verb.infinitive;
    case VerbGroups.third:
      if (verb.infinitive.endsWith("re")) {
        return verb.infinitive.slice(0, -"e".length);
      }
      if (verb.infinitive.endsWith("ir") && !verb.infinitive.endsWith("oir")) {
        return verb.infinitive;
      }
  }
}

export class FuturConjugator extends StemAndEndingsConjugator<Tenses.Futur> {
  public readonly tense = Tenses.Futur;

  protected defaultStem(verb: Verb): string | undefined {
    return futurStem(verb);
  }

  protected endings(): Endings {
    return ENDINGS;
  }
}
