import type { ExerciseRow } from "./application/services/ExerciseGenerator.ts";
import type { Tenses } from "./domain/models/Tenses.ts";
import { EXERCISES, type Mode } from "./exercises.ts";

type Props = {
  mode: Mode;
  rows: ExerciseRow[];
  tenses: Tenses[];
  hidden: boolean;
  showSolutions: boolean;
};

// One printable page. `hidden` only applies on screen: every sheet is printed.
function ExerciseSheet({ mode, rows, tenses, hidden, showSolutions }: Props) {
  // A cell is either given to the student, or left for them to fill in.
  // The expected answer can be shown on screen, but is never printed.
  const cell = (content: string, given: boolean) => {
    if (given) return content;
    return showSolutions ? (
      <span className="solution screen-only">{content}</span>
    ) : null;
  };
  const conjuguer = mode === "conjuguer";

  return (
    <section className={hidden ? "sheet screen-hidden" : "sheet"}>
      <h2 className="print-only">Conjugaison – {EXERCISES[mode].title}</h2>
      <p>{EXERCISES[mode].instruction}</p>
      <p className="print-only">Temps : {tenses.join(", ")}</p>

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
          {/* Verbs repeat when only auxiliaries are selected: key by position. */}
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{cell(row.pronoun, conjuguer)}</td>
              <td>{cell(row.verb.infinitive, conjuguer)}</td>
              <td className="verb">{cell(row.form, !conjuguer)}</td>
              <td>{cell(row.tense, conjuguer)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ExerciseSheet;
