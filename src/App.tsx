import { useState } from 'react'
import { generateExercise } from './application/services/ExerciseGenerator.ts'

type Mode = 'retrouver' | 'conjuguer'

const INSTRUCTIONS: Record<Mode, string> = {
  retrouver: 'Retrouve le pronom, l’infinitif et le temps de chaque verbe conjugué.',
  conjuguer: 'Conjugue chaque verbe avec le pronom et au temps indiqués.',
}

function App() {
  const [mode, setMode] = useState<Mode>('retrouver')
  const [rows, setRows] = useState(generateExercise)

  const switchMode = (next: Mode) => {
    if (next === mode) return
    setMode(next)
    setRows(generateExercise())
  }

  const showIfConjuguer = (content: string) => (mode === 'conjuguer' ? content : null)

  return (
    <main>
      <header>
        <h1>Conjugaison</h1>
        <div className="actions">
          <button aria-pressed={mode === 'retrouver'} onClick={() => switchMode('retrouver')}>
            Exercice 1 : retrouver
          </button>
          <button aria-pressed={mode === 'conjuguer'} onClick={() => switchMode('conjuguer')}>
            Exercice 2 : conjuguer
          </button>
        </div>
        <p>{INSTRUCTIONS[mode]}</p>
        <div className="actions">
          <button onClick={() => setRows(generateExercise())}>Nouvelle fiche</button>
          <button onClick={() => window.print()}>Imprimer</button>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th>Pronom</th>
            <th>Verbe (infinitif)</th>
            <th>Verbe (conjugué)</th>
            <th>Temps</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.verb.infinitive}>
              <td>{showIfConjuguer(row.pronoun)}</td>
              <td>{showIfConjuguer(row.verb.infinitive)}</td>
              <td className="verb">{mode === 'retrouver' ? row.form : null}</td>
              <td>{showIfConjuguer(row.tense)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default App
