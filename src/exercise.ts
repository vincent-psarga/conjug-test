import { conjugate } from './conjugation.ts'
import {
  ALLER, AVOIR, ETRE, GROUP_1, GROUP_2, GROUP_3,
  PRONOUNS, TENSES, type Pronoun, type Tense, type Verb,
} from './verbs.ts'

export type ExerciseRow = {
  verb: Verb
  pronoun: Pronoun
  tense: Tense
  form: string
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// 20 verbs: être, avoir, aller + 5 of group 1 + 5 of group 2 + 7 of group 3.
export function pickVerbs(): Verb[] {
  return [
    ETRE,
    AVOIR,
    ALLER,
    ...shuffle(GROUP_1).slice(0, 5),
    ...shuffle(GROUP_2).slice(0, 5),
    ...shuffle(GROUP_3).slice(0, 7),
  ]
}

export function generateExercise(): ExerciseRow[] {
  return shuffle(pickVerbs()).map((verb) => {
    const pronoun = pick(PRONOUNS)
    const tense = pick(TENSES)
    return { verb, pronoun, tense, form: conjugate(verb, pronoun, tense) }
  })
}
