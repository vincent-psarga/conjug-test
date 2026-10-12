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
export class FuturConjugator extends StemAndEndingsConjugator<Tenses.Futur> {
  public readonly tense = Tenses.Futur;

  protected defaultStem(verb: Verb): string | undefined {
    switch (verb.group) {
      case VerbGroups.first:
      case VerbGroups.second:
        return verb.infinitive;
      case VerbGroups.third:
        if (verb.infinitive.endsWith("re")) {
          return verb.infinitive.slice(0, -"e".length);
        }
        if (
          verb.infinitive.endsWith("ir") &&
          !verb.infinitive.endsWith("oir")
        ) {
          return verb.infinitive;
        }
    }
  }

  protected endings(): Endings {
    return ENDINGS;
  }
}
