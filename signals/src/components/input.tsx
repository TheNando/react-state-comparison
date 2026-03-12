import { type KeyboardEvent } from "react";

import { hasValidMin } from "@/lib";

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

      onSubmit(value);
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
