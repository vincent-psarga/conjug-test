import type {IConjugator} from "../../domain/services/IConjugator.ts";
import type {Tenses} from "../../domain/models/Tenses.ts";
import type {Verb} from "../../domain/models/Verb.ts";
import type {Pronouns} from "../../domain/models/Pronouns.ts";

export type Endings = Record<Pronouns, string>;

// A conjugated form is either an irregularity listed on the verb, or a stem
// followed by the tense's ending. The stem comes from the verb when it defines
// one, otherwise from the group's rule.
export abstract class StemAndEndingsConjugator<Tense extends Tenses> implements IConjugator<Tense> {
    public abstract readonly tense: Tense;

    protected abstract defaultStem(verb: Verb): string | undefined;

    protected abstract endings(verb: Verb): Endings | undefined;

    conjugate(verb: Verb, pronoun: Pronouns): string {
        const irregularity = verb.irregularities?.[this.tense]?.[pronoun];
        if (irregularity) {
            return irregularity;
        }

        const stem = verb.stems?.[this.tense] ?? this.defaultStem(verb);
        const ending = this.endings(verb)?.[pronoun];
        if (stem === undefined || ending === undefined) {
            throw new Error(`Unable to conjugate ${verb.infinitive} with ${pronoun} in ${this.tense}`);
        }
        return stem + ending;
    }
}
