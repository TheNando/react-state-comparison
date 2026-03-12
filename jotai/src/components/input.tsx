import { type KeyboardEvent } from "react";

const map = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;"
} as const;

type EscapeChars = keyof typeof map;
const rxSanitize = /[&<>"'/]/gi;

const sanitize = (str: string) =>
  str.replace(rxSanitize, (match) => map[match as EscapeChars]);

const hasValidMin = (value: string, min: number) => {
  return value.length >= min;
};

type Props = {
  onSubmit: (title: string) => void;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  onBlur?: () => void;
};

export function Input({
  onSubmit,
  placeholder,
  label,
  defaultValue,
  onBlur
}: Props) {
  const handleBlur = () => {
    if (onBlur) onBlur();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value.trim();

      if (!hasValidMin(value, 2)) return;

      onSubmit(sanitize(value));
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="input-container">
      <input
        className="new-todo"
        id="todo-input"
        type="text"
        autoFocus
        placeholder={placeholder}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      <label className="visually-hidden" htmlFor="todo-input">
        {label}
      </label>
    </div>
  );
}
