import { Tenses } from "../../domain/models/Tenses.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import { VerbGroups } from "../../domain/models/VerbGroups.ts";
import {
  type Endings,
  StemAndEndingsConjugator,
} from "./StemAndEndingsConjugator.ts";

const ENDINGS: Endings = {
  [Pronouns.je]: "ais",
  [Pronouns.tu]: "ais",
  [Pronouns.il]: "ait",
  [Pronouns.nous]: "ions",
  [Pronouns.vous]: "iez",
  [Pronouns.ils]: "aient",
};

// Third group and auxiliaries must define their imparfait stem.
export class ImparfaitConjugator extends StemAndEndingsConjugator<Tenses.Imparfait> {
  public readonly tense = Tenses.Imparfait;

  protected defaultStem(verb: Verb): string | undefined {
    switch (verb.group) {
      case VerbGroups.first:
        return verb.infinitive.slice(0, -"er".length);
      case VerbGroups.second:
        return verb.infinitive.slice(0, -"ir".length) + "iss";
    }
  }

  protected endings(): Endings {
    return ENDINGS;
  }
}
