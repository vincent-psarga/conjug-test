import { describe, expect, it } from "vitest";
import { Pronouns } from "../../domain/models/Pronouns.ts";
import { Tenses } from "../../domain/models/Tenses.ts";
import type { Verb } from "../../domain/models/Verb.ts";
import { VerbGroups } from "../../domain/models/VerbGroups.ts";
import { Avoir } from "../../domain/models/verbs/auxiliaries/Avoir.ts";
import { Etre } from "../../domain/models/verbs/auxiliaries/Etre.ts";
import { Manger } from "../../domain/models/verbs/first/Manger.ts";
import { Parler } from "../../domain/models/verbs/first/Parler.ts";
import { Placer } from "../../domain/models/verbs/first/Placer.ts";
import { Finir } from "../../domain/models/verbs/second/Finir.ts";
import { Aller } from "../../domain/models/verbs/third/Aller.ts";
import { Prendre } from "../../domain/models/verbs/third/Prendre.ts";
import { Recevoir } from "../../domain/models/verbs/third/Recevoir.ts";
import { Venir } from "../../domain/models/verbs/third/Venir.ts";
import { PasseSimpleConjugator } from "./PasseSimpleConjugator.ts";
import { UnknownThirdGroupVerb } from "./testVerbs.ts";

const conjugateAll = (verb: Verb) =>
  Object.values(Pronouns).map((pronoun) =>
    new PasseSimpleConjugator().conjugate(verb, pronoun),
  );

describe("PasseSimpleConjugator", () => {
  it.each([
    [Parler, "parlai parlas parla parlâmes parlâtes parlèrent"],
    [Manger, "mangeai mangeas mangea mangeâmes mangeâtes mangèrent"],
    [Placer, "plaçai plaças plaça plaçâmes plaçâtes placèrent"],
    // "i" vowel
    [Finir, "finis finis finit finîmes finîtes finirent"],
    [Prendre, "pris pris prit prîmes prîtes prirent"],
    // "u" vowel
    [Recevoir, "reçus reçus reçut reçûmes reçûtes reçurent"],
    [Etre, "fus fus fut fûmes fûtes furent"],
    [Avoir, "eus eus eut eûmes eûtes eurent"],
    // "in" vowel
    [Venir, "vins vins vint vînmes vîntes vinrent"],
    [Aller, "allai allas alla allâmes allâtes allèrent"],
  ])("conjugates %o", (verb, expected) => {
    expect(conjugateAll(verb)).toEqual(expected.split(" "));
  });

  it("throws for a third group verb without a passé simple stem", () => {
    expect(() =>
      new PasseSimpleConjugator().conjugate(UnknownThirdGroupVerb, Pronouns.je),
    ).toThrow();
  });

  it("throws when the stem doesn't end with its vowel", () => {
    const verb: Verb = {
      infinitive: "prendre",
      group: VerbGroups.third,
      stems: { [Tenses.PasseSimple]: "pr" },
    };

    expect(() =>
      new PasseSimpleConjugator().conjugate(verb, Pronouns.nous),
    ).toThrow();
  });
});
