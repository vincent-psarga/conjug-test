import { describe, expect, it } from "vitest";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { VerbGroups } from "../../domain/models/VerbGroups.ts";
import { Avoir } from "../../domain/models/verbs/auxiliaries/Avoir.ts";
import { Acheter } from "../../domain/models/verbs/first/Acheter.ts";
import { Envoyer } from "../../domain/models/verbs/first/Envoyer.ts";
import { Parler } from "../../domain/models/verbs/first/Parler.ts";
import { Finir } from "../../domain/models/verbs/second/Finir.ts";
import { Aller } from "../../domain/models/verbs/third/Aller.ts";
import { Partir } from "../../domain/models/verbs/third/Partir.ts";
import { Prendre } from "../../domain/models/verbs/third/Prendre.ts";
import { Venir } from "../../domain/models/verbs/third/Venir.ts";
import { FuturConjugator } from "./FuturConjugator.ts";
import { UnknownThirdGroupVerb } from "./testVerbs.ts";

const conjugateAll = (verb: Verb) =>
  Object.values(Pronouns).map((pronoun) =>
    new FuturConjugator().conjugate(verb, pronoun),
  );

describe("FuturConjugator", () => {
  it.each([
    [Parler, "parlerai parleras parlera parlerons parlerez parleront"],
    [Acheter, "achèterai achèteras achètera achèterons achèterez achèteront"],
    [Envoyer, "enverrai enverras enverra enverrons enverrez enverront"],
    [Finir, "finirai finiras finira finirons finirez finiront"],
    // "-re" verbs drop their final "e"
    [Prendre, "prendrai prendras prendra prendrons prendrez prendront"],
    // "-ir" verbs keep their infinitive
    [Partir, "partirai partiras partira partirons partirez partiront"],
    [Venir, "viendrai viendras viendra viendrons viendrez viendront"],
    [Aller, "irai iras ira irons irez iront"],
    [Avoir, "aurai auras aura aurons aurez auront"],
  ])("conjugates %o", (verb, expected) => {
    expect(conjugateAll(verb)).toEqual(expected.split(" "));
  });

  it("throws for a third group '-oir' verb without a futur stem", () => {
    expect(() =>
      new FuturConjugator().conjugate(UnknownThirdGroupVerb, Pronouns.je),
    ).toThrow();
  });

  it("throws for an auxiliary without a futur stem", () => {
    const verb: Verb = { infinitive: "être", group: VerbGroups.auxiliaries };

    expect(() => new FuturConjugator().conjugate(verb, Pronouns.je)).toThrow();
  });
});
