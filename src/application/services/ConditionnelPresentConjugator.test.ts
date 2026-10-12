import { describe, expect, it } from "vitest";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { Avoir } from "../../domain/models/verbs/auxiliaries/Avoir.ts";
import { Etre } from "../../domain/models/verbs/auxiliaries/Etre.ts";
import { Acheter } from "../../domain/models/verbs/first/Acheter.ts";
import { Envoyer } from "../../domain/models/verbs/first/Envoyer.ts";
import { Manger } from "../../domain/models/verbs/first/Manger.ts";
import { Parler } from "../../domain/models/verbs/first/Parler.ts";
import { Finir } from "../../domain/models/verbs/second/Finir.ts";
import { Aller } from "../../domain/models/verbs/third/Aller.ts";
import { Partir } from "../../domain/models/verbs/third/Partir.ts";
import { Prendre } from "../../domain/models/verbs/third/Prendre.ts";
import { Venir } from "../../domain/models/verbs/third/Venir.ts";
import { ConditionnelPresentConjugator } from "./ConditionnelPresentConjugator.ts";
import { UnknownThirdGroupVerb } from "./testVerbs.ts";

const conjugateAll = (verb: Verb) =>
  Object.values(Pronouns).map((pronoun) =>
    new ConditionnelPresentConjugator().conjugate(verb, pronoun),
  );

describe("ConditionnelPresentConjugator", () => {
  it.each([
    [Parler, "parlerais parlerais parlerait parlerions parleriez parleraient"],
    // the -ger spelling change only applies before "a" and "o" of the ending
    [Manger, "mangerais mangerais mangerait mangerions mangeriez mangeraient"],
    [
      Acheter,
      "achèterais achèterais achèterait achèterions achèteriez achèteraient",
    ],
    [Envoyer, "enverrais enverrais enverrait enverrions enverriez enverraient"],
    [Finir, "finirais finirais finirait finirions finiriez finiraient"],
    // "-re" verbs drop their final "e"
    [Prendre, "prendrais prendrais prendrait prendrions prendriez prendraient"],
    // "-ir" verbs keep their infinitive
    [Partir, "partirais partirais partirait partirions partiriez partiraient"],
    [Venir, "viendrais viendrais viendrait viendrions viendriez viendraient"],
    [Aller, "irais irais irait irions iriez iraient"],
    [Etre, "serais serais serait serions seriez seraient"],
    [Avoir, "aurais aurais aurait aurions auriez auraient"],
  ])("conjugates %o", (verb, expected) => {
    expect(conjugateAll(verb)).toEqual(expected.split(" "));
  });

  it("throws for a third group '-oir' verb without a futur stem", () => {
    expect(() =>
      new ConditionnelPresentConjugator().conjugate(
        UnknownThirdGroupVerb,
        Pronouns.je,
      ),
    ).toThrow();
  });
});
