import { Tenses } from "../../domain/models/Tenses.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import { VerbGroups } from "../../domain/models/VerbGroups.ts";
import {
  type Endings,
  StemAndEndingsConjugator,
} from "./StemAndEndingsConjugator.ts";

const FIRST_GROUP_ENDINGS: Endings = {
  [Pronouns.je]: "e",
  [Pronouns.tu]: "es",
  [Pronouns.il]: "e",
  [Pronouns.nous]: "ons",
  [Pronouns.vous]: "ez",
  [Pronouns.ils]: "ent",
};

const SECOND_GROUP_ENDINGS: Endings = {
  [Pronouns.je]: "is",
  [Pronouns.tu]: "is",
  [Pronouns.il]: "it",
  [Pronouns.nous]: "issons",
  [Pronouns.vous]: "issez",
  [Pronouns.ils]: "issent",
};

// Third group and auxiliaries have no common rule: their forms are listed as irregularities.
export class PresentConjugator extends StemAndEndingsConjugator<Tenses.Present> {
  public readonly tense = Tenses.Present;

  protected defaultStem(verb: Verb): string | undefined {
    switch (verb.group) {
      case VerbGroups.first:
        return verb.infinitive.slice(0, -"er".length);
      case VerbGroups.second:
        return verb.infinitive.slice(0, -"ir".length);
    }
  }

  protected endings(verb: Verb): Endings | undefined {
    switch (verb.group) {
      case VerbGroups.first:
        return FIRST_GROUP_ENDINGS;
      case VerbGroups.second:
        return SECOND_GROUP_ENDINGS;
    }
  }
}
