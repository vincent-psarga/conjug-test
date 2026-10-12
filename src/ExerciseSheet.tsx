import type { ExerciseRow } from "./application/services/ExerciseGenerator.ts";
import type { Tenses } from "./domain/models/Tenses.ts";
import { EXERCISES, type Mode } from "./exercises.ts";

type Props = {
  mode: Mode;
  rows: ExerciseRow[];
  tenses: Tenses[];
  hidden: boolean;
};

// One printable page. `hidden` only applies on screen: every sheet is printed.
function ExerciseSheet({ mode, rows, tenses, hidden }: Props) {
  const showIfConjuguer = (content: string) =>
    mode === "conjuguer" ? content : null;

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
              <td>{showIfConjuguer(row.pronoun)}</td>
              <td>{showIfConjuguer(row.verb.infinitive)}</td>
              <td className="verb">{mode === "retrouver" ? row.form : null}</td>
              <td>{showIfConjuguer(row.tense)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ExerciseSheet;
