import { Tenses } from "../../domain/models/Tenses.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { futurStem } from "./FuturConjugator.ts";
import { IMPARFAIT_ENDINGS } from "./ImparfaitConjugator.ts";
import {
  type Endings,
  StemAndEndingsConjugator,
} from "./StemAndEndingsConjugator.ts";

// The futur simple stem followed by the imparfait endings (je viendr + ais).
export class ConditionnelPresentConjugator extends StemAndEndingsConjugator<Tenses.ConditionnelPresent> {
  public readonly tense = Tenses.ConditionnelPresent;

  protected defaultStem(verb: Verb): string | undefined {
    return futurStem(verb);
  }

  protected endings(): Endings {
    return IMPARFAIT_ENDINGS;
  }
}
