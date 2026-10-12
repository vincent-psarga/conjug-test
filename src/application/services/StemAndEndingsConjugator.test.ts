import { describe, expect, it } from "vitest";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import { Tenses } from "../../domain/models/Tenses.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { VerbGroups } from "../../domain/models/VerbGroups.ts";
import {
  type Endings,
  StemAndEndingsConjugator,
} from "./StemAndEndingsConjugator.ts";

const ENDINGS: Endings = {
  [Pronouns.je]: "-je",
  [Pronouns.tu]: "-tu",
  [Pronouns.il]: "-il",
  [Pronouns.nous]: "-nous",
  [Pronouns.vous]: "-vous",
  [Pronouns.ils]: "-ils",
};

class TestConjugator extends StemAndEndingsConjugator<Tenses.Present> {
  public readonly tense = Tenses.Present;

  protected defaultStem(verb: Verb): string | undefined {
    return verb.group === VerbGroups.first ? "default" : undefined;
  }

  protected endings(): Endings {
    return ENDINGS;
  }
}

describe("StemAndEndingsConjugator", () => {
  const conjugator = new TestConjugator();

  it("adds the ending to the group's default stem", () => {
    const verb: Verb = { infinitive: "tester", group: VerbGroups.first };

    expect(conjugator.conjugate(verb, Pronouns.nous)).toBe("default-nous");
  });

  it("prefers the stem defined on the verb", () => {
    const verb: Verb = {
      infinitive: "tester",
      group: VerbGroups.first,
      stems: { [Tenses.Present]: "custom" },
    };

    expect(conjugator.conjugate(verb, Pronouns.tu)).toBe("custom-tu");
  });

  it("prefers an irregularity over any stem", () => {
    const verb: Verb = {
      infinitive: "tester",
      group: VerbGroups.first,
      stems: { [Tenses.Present]: "custom" },
      irregularities: { [Tenses.Present]: { [Pronouns.il]: "irregular" } },
    };

    expect(conjugator.conjugate(verb, Pronouns.il)).toBe("irregular");
    expect(conjugator.conjugate(verb, Pronouns.ils)).toBe("custom-ils");
  });

  it("ignores irregularities of other tenses", () => {
    const verb: Verb = {
      infinitive: "tester",
      group: VerbGroups.first,
      irregularities: { [Tenses.Futur]: { [Pronouns.je]: "irregular" } },
    };

    expect(conjugator.conjugate(verb, Pronouns.je)).toBe("default-je");
  });

  it("throws when there is no stem to use", () => {
    const verb: Verb = { infinitive: "tester", group: VerbGroups.third };

    expect(() => conjugator.conjugate(verb, Pronouns.je)).toThrow(
      "Unable to conjugate tester with je in présent",
    );
  });
});
