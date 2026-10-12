import { useEffect, useRef } from "react";

type Props<T extends string> = {
  label: string;
  legend: string;
  options: readonly T[];
  selected: T[];
  onChange: (selected: T[]) => void;
  format?: (option: T) => string;
};

// Dropdown of checkboxes. At least one option always stays selected.
function MultiSelect<T extends string>({
  label,
  legend,
  options,
  selected,
  onChange,
  format = (option) => option,
}: Props<T>) {
  const dropdown = useRef<HTMLDetailsElement>(null);

  // Close like a regular dropdown: on a click outside it, or on Escape.
  useEffect(() => {
    const close = () => dropdown.current?.removeAttribute("open");
    const onPointerDown = (event: PointerEvent) => {
      if (!dropdown.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && dropdown.current?.open) {
        close();
        dropdown.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggle = (option: T) => {
    const next = selected.includes(option)
      ? selected.filter((o) => o !== option)
      : options.filter((o) => o === option || selected.includes(o));
    onChange(next);
  };

  const summary = `${label} : ${selected.map(format).join(", ")}`;

  return (
    <details ref={dropdown} className="multi-select">
      {/* Full text on hover, as it may be cut with an ellipsis. */}
      <summary title={summary}>{summary}</summary>
      <fieldset>
        <legend>{legend}</legend>
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={selected.includes(option)}
              disabled={selected.length === 1 && selected.includes(option)}
              onChange={() => toggle(option)}
            />
            {format(option)}
          </label>
        ))}
      </fieldset>
    </details>
  );
}

export default MultiSelect;
