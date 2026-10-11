import { ALL_TENSES } from './application/services/ExerciseGenerator.ts'
import type { Tenses } from './domain/models/Tenses.ts'

type Props = {
  selected: Tenses[]
  onChange: (tenses: Tenses[]) => void
}

// Dropdown on screen, plain list of the included tenses on paper.
function TenseSelector({ selected, onChange }: Props) {
  const toggle = (tense: Tenses) => {
    const next = selected.includes(tense)
      ? selected.filter((t) => t !== tense)
      : ALL_TENSES.filter((t) => t === tense || selected.includes(t))
    onChange(next)
  }

  const summary = selected.join(', ')

  return (
    <>
      <details className="tense-selector screen-only">
        <summary>Temps : {summary}</summary>
        <fieldset>
          <legend>Temps utilisés dans l’exercice</legend>
          {ALL_TENSES.map((tense) => (
            <label key={tense}>
              <input
                type="checkbox"
                checked={selected.includes(tense)}
                // At least one tense is needed to build the exercise.
                disabled={selected.length === 1 && selected.includes(tense)}
                onChange={() => toggle(tense)}
              />
              {tense}
            </label>
          ))}
        </fieldset>
      </details>
      <p className="print-only">Temps : {summary}</p>
    </>
  )
}

export default TenseSelector
