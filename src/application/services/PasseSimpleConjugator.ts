import {Tenses} from "../../domain/models/Tenses.ts";
import type {Verb} from "../../domain/models/Verb.ts";
import {Pronouns} from "../../domain/models/Pronouns.ts";
import {VerbGroups} from "../../domain/models/VerbGroups.ts";
import {type Endings, StemAndEndingsConjugator} from "./StemAndEndingsConjugator.ts";

const FIRST_GROUP_ENDINGS: Endings = {
    [Pronouns.je]: "ai",
    [Pronouns.tu]: "as",
    [Pronouns.il]: "a",
    [Pronouns.nous]: "âmes",
    [Pronouns.vous]: "âtes",
    [Pronouns.ils]: "èrent",
};

const CIRCUMFLEX: Record<string, string> = {i: "î", u: "û"};

// Other verbs have a stem ending with their passé simple vowel: "i" (fini, pri),
// "u" (fu, eu, cru) or "in" (vin, tin). The vowel takes a circumflex with nous and vous.
const VOWEL_STEM = /^(.*)([iu])(n?)$/;

export class PasseSimpleConjugator extends StemAndEndingsConjugator<Tenses.PasseSimple> {
    public readonly tense = Tenses.PasseSimple;

    // Third group and auxiliaries must define their passé simple stem (with its vowel).
    protected defaultStem(verb: Verb): string | undefined {
        switch (verb.group) {
            case VerbGroups.first:
                return verb.infinitive.slice(0, -"er".length);
            case VerbGroups.second:
                return verb.infinitive.slice(0, -"r".length);
        }
    }

    protected endings(verb: Verb): Endings | undefined {
        if (verb.group === VerbGroups.first) {
            return FIRST_GROUP_ENDINGS;
        }
    }

    protected addEnding(verb: Verb, stem: string, pronoun: Pronouns): string | undefined {
        if (verb.group === VerbGroups.first) {
            return super.addEnding(verb, stem, pronoun);
        }

        const match = VOWEL_STEM.exec(stem);
        if (!match) {
            return undefined;
        }
        const [, start, vowel, nasal] = match;
        switch (pronoun) {
            case Pronouns.je:
            case Pronouns.tu:
                return stem + "s";
            case Pronouns.il:
                return stem + "t";
            case Pronouns.nous:
                return start + CIRCUMFLEX[vowel] + nasal + "mes";
            case Pronouns.vous:
                return start + CIRCUMFLEX[vowel] + nasal + "tes";
            case Pronouns.ils:
                return stem + "rent";
        }
    }
}
