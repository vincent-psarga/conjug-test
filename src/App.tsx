import { useState } from 'react'
import { DEFAULT_TENSES, generateExercise } from './application/services/ExerciseGenerator.ts'
import type { Tenses } from './domain/models/Tenses.ts'
import ExerciseSheet from './ExerciseSheet.tsx'
import { EXERCISES, type Mode } from './exercises.ts'
import TenseSelector from './TenseSelector.tsx'

const MODES = Object.keys(EXERCISES) as Mode[]

// Each exercise gets its own rows so one sheet doesn't give away the other's answers.
function generateSheets(tenses: Tenses[]) {
  return {
    retrouver: generateExercise(tenses),
    conjuguer: generateExercise(tenses),
  }
}

function App() {
  const [mode, setMode] = useState<Mode>('retrouver')
  const [tenses, setTenses] = useState<Tenses[]>(DEFAULT_TENSES)
  const [sheets, setSheets] = useState(() => generateSheets(tenses))

  const changeTenses = (next: Tenses[]) => {
    setTenses(next)
    setSheets(generateSheets(next))
  }

  return (
    <main>
      <header className="screen-only">
        <h1>Conjugaison</h1>
        <div className="actions">
          {MODES.map((m) => (
            <button key={m} aria-pressed={mode === m} onClick={() => setMode(m)}>
              {EXERCISES[m].title}
            </button>
          ))}
        </div>
        <TenseSelector selected={tenses} onChange={changeTenses} />
        <div className="actions">
          <button onClick={() => setSheets(generateSheets(tenses))}>Nouvelle fiche</button>
          <button onClick={() => window.print()}>Imprimer</button>
        </div>
      </header>

      {MODES.map((m) => (
        <ExerciseSheet key={m} mode={m} rows={sheets[m]} tenses={tenses} hidden={m !== mode} />
      ))}
    </main>
  )
}

export default App
