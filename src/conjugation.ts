import { PRONOUNS, type Pronoun, type Tense, type Verb } from './verbs.ts'

const PRESENT_ENDINGS_1 = ['e', 'es', 'e', 'ons', 'ez', 'ent']
const PRESENT_ENDINGS_2 = ['is', 'is', 'it', 'issons', 'issez', 'issent']
const IMPARFAIT_ENDINGS = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient']
const FUTUR_ENDINGS = ['ai', 'as', 'a', 'ons', 'ez', 'ont']

export function conjugate(verb: Verb, pronoun: Pronoun, tense: Tense): string {
  const i = PRONOUNS.indexOf(pronoun)

  if ('present' in verb) {
    switch (tense) {
      case 'présent':
        return verb.present[i]
      case 'imparfait':
        return verb.imparfaitStem + IMPARFAIT_ENDINGS[i]
      case 'futur simple':
        return verb.futurStem + FUTUR_ENDINGS[i]
    }
  }

  const stem = verb.infinitive.slice(0, -2)
  switch (tense) {
    case 'présent':
      return stem + (verb.group === 1 ? PRESENT_ENDINGS_1 : PRESENT_ENDINGS_2)[i]
    case 'imparfait':
      return stem + (verb.group === 2 ? 'iss' : '') + IMPARFAIT_ENDINGS[i]
    case 'futur simple':
      return verb.infinitive + FUTUR_ENDINGS[i]
  }
}
