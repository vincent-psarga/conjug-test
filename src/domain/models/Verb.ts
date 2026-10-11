import type {VerbGroups} from "./VerbGroups.ts";
import type {Tenses} from "./Tenses.ts";
import type {Pronouns} from "./Pronouns.ts";

export type Verb = {
    infinitive: string,
    group: VerbGroups,
    stems?: Partial<Record<Tenses, string>>,
    irregularities?: Partial<Record<Tenses, Partial<Record<Pronouns, string>>>>
}
