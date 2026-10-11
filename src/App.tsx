import { useState } from 'react'
import { generateExercise } from './exercise.ts'

function App() {
  const [rows, setRows] = useState(generateExercise)

  return (
    <main>
      <header>
        <h1>Conjugaison</h1>
        <p>Retrouve le pronom, l’infinitif et le temps de chaque verbe conjugué.</p>
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
              <td />
              <td />
              <td className="verb">{row.form}</td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default App
