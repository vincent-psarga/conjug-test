import type { Verb } from "../../domain/models/Verb.ts";
import { VerbGroups } from "../../domain/models/VerbGroups.ts";

// A third group verb with no data at all: conjugators have no rule to fall back on.
export const UnknownThirdGroupVerb: Verb = {
  infinitive: "inconnoir",
  group: VerbGroups.third,
};
