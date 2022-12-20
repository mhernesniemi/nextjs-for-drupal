import { useId } from "react";

interface TextareaProps {
  label: string;
  value: string;
  rows?: number;
  onChange: Function;
}

export default function Textarea({
  label,
  value,
  rows = 4,
  onChange,
}: TextareaProps) {
  const id = useId();

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange()}
        rows={rows}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
}
