import { describe, expect, it } from "vitest";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { Etre } from "../../domain/models/verbs/auxiliaries/Etre.ts";
import { Appeler } from "../../domain/models/verbs/first/Appeler.ts";
import { Changer } from "../../domain/models/verbs/first/Changer.ts";
import { Parler } from "../../domain/models/verbs/first/Parler.ts";
import { Placer } from "../../domain/models/verbs/first/Placer.ts";
import { Finir } from "../../domain/models/verbs/second/Finir.ts";
import { Aller } from "../../domain/models/verbs/third/Aller.ts";
import { Prendre } from "../../domain/models/verbs/third/Prendre.ts";
import { PresentConjugator } from "./PresentConjugator.ts";
import { UnknownThirdGroupVerb } from "./testVerbs.ts";

const conjugateAll = (verb: Verb) =>
  Object.values(Pronouns).map((pronoun) =>
    new PresentConjugator().conjugate(verb, pronoun),
  );

describe("PresentConjugator", () => {
  it.each([
    [Parler, "parle parles parle parlons parlez parlent"],
    [Changer, "change changes change changeons changez changent"],
    [Placer, "place places place plaçons placez placent"],
    [Appeler, "appelle appelles appelle appelons appelez appellent"],
    [Finir, "finis finis finit finissons finissez finissent"],
    [Prendre, "prends prends prend prenons prenez prennent"],
    [Aller, "vais vas va allons allez vont"],
    [Etre, "suis es est sommes êtes sont"],
  ])("conjugates %o", (verb, expected) => {
    expect(conjugateAll(verb)).toEqual(expected.split(" "));
  });

  it("throws for a third group verb without its forms", () => {
    expect(() =>
      new PresentConjugator().conjugate(UnknownThirdGroupVerb, Pronouns.je),
    ).toThrow();
  });
});
