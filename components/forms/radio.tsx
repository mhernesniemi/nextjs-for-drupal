import { useId } from "react";

interface RadioProps {
  label: string;
  name: string;
  value: string;
  onChange: any;
  activeValue: any;
}

export default function Radio({
  label,
  name,
  value,
  onChange,
  activeValue,
}: RadioProps) {
  const id = useId();

  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        onChange={onChange}
        name={name}
        value={value}
        checked={value === activeValue}
        type="radio"
        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={id}
        className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        <>{label}</>
      </label>
    </div>
  );
}
