import { useState } from "react";
import {
  ALL_GROUPS,
  ALL_TENSES,
  DEFAULT_TENSES,
  generateExercise,
} from "./application/services/ExerciseGenerator.ts";
import type { Tenses } from "./domain/models/Tenses.ts";
import type { VerbGroups } from "./domain/models/VerbGroups.ts";
import ExerciseSheet from "./ExerciseSheet.tsx";
import { EXERCISES, GROUP_LABELS, type Mode } from "./exercises.ts";
import MultiSelect from "./MultiSelect.tsx";

const MODES = Object.keys(EXERCISES) as Mode[];

// Each exercise gets its own rows so one sheet doesn't give away the other's answers.
function generateSheets(tenses: Tenses[], groups: VerbGroups[]) {
  return {
    retrouver: generateExercise(tenses, groups),
    conjuguer: generateExercise(tenses, groups),
  };
}

function App() {
  const [mode, setMode] = useState<Mode>("retrouver");
  const [tenses, setTenses] = useState<Tenses[]>(DEFAULT_TENSES);
  const [groups, setGroups] = useState<VerbGroups[]>(ALL_GROUPS);
  const [sheets, setSheets] = useState(() => generateSheets(tenses, groups));

  const changeTenses = (next: Tenses[]) => {
    setTenses(next);
    setSheets(generateSheets(next, groups));
  };

  const changeGroups = (next: VerbGroups[]) => {
    setGroups(next);
    setSheets(generateSheets(tenses, next));
  };

  return (
    <main>
      <header className="screen-only">
        <h1>Conjugaison</h1>
        <div className="actions">
          {MODES.map((m) => (
            <button
              key={m}
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
            >
              {EXERCISES[m].title}
            </button>
          ))}
        </div>
        <div className="filters">
          <MultiSelect
            label="Temps"
            legend="Temps utilisés dans l’exercice"
            options={ALL_TENSES}
            selected={tenses}
            onChange={changeTenses}
          />
          <MultiSelect
            label="Verbes"
            legend="Groupes de verbes utilisés dans l’exercice"
            options={ALL_GROUPS}
            selected={groups}
            onChange={changeGroups}
            format={(group) => GROUP_LABELS[group]}
          />
        </div>
        <div className="actions">
          <button onClick={() => setSheets(generateSheets(tenses, groups))}>
            Nouvelle fiche
          </button>
          <button onClick={() => window.print()}>Imprimer</button>
        </div>
      </header>

      {MODES.map((m) => (
        <ExerciseSheet
          key={m}
          mode={m}
          rows={sheets[m]}
          tenses={tenses}
          hidden={m !== mode}
        />
      ))}
    </main>
  );
}

export default App;
