import { describe, expect, it } from "vitest";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { Etre } from "../../domain/models/verbs/auxiliaries/Etre.ts";
import { Changer } from "../../domain/models/verbs/first/Changer.ts";
import { Oublier } from "../../domain/models/verbs/first/Oublier.ts";
import { Parler } from "../../domain/models/verbs/first/Parler.ts";
import { Placer } from "../../domain/models/verbs/first/Placer.ts";
import { Finir } from "../../domain/models/verbs/second/Finir.ts";
import { Faire } from "../../domain/models/verbs/third/Faire.ts";
import { Prendre } from "../../domain/models/verbs/third/Prendre.ts";
import { ImparfaitConjugator } from "./ImparfaitConjugator.ts";
import { UnknownThirdGroupVerb } from "./testVerbs.ts";

const conjugateAll = (verb: Verb) =>
  Object.values(Pronouns).map((pronoun) =>
    new ImparfaitConjugator().conjugate(verb, pronoun),
  );

describe("ImparfaitConjugator", () => {
  it.each([
    [Parler, "parlais parlais parlait parlions parliez parlaient"],
    [Oublier, "oubliais oubliais oubliait oubliions oubliiez oubliaient"],
    [Changer, "changeais changeais changeait changions changiez changeaient"],
    [Placer, "plaçais plaçais plaçait placions placiez plaçaient"],
    [Finir, "finissais finissais finissait finissions finissiez finissaient"],
    [Prendre, "prenais prenais prenait prenions preniez prenaient"],
    [Faire, "faisais faisais faisait faisions faisiez faisaient"],
    [Etre, "étais étais était étions étiez étaient"],
  ])("conjugates %o", (verb, expected) => {
    expect(conjugateAll(verb)).toEqual(expected.split(" "));
  });

  it("throws for a third group verb without an imparfait stem", () => {
    expect(() =>
      new ImparfaitConjugator().conjugate(UnknownThirdGroupVerb, Pronouns.je),
    ).toThrow();
  });
});
