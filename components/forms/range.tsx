import { useId } from "react";

interface RangeProps {
  label: string;
  min?: number;
  max?: number;
  value: any;
  onChange: any;
}

export default function Range({
  label,
  value,
  min = 0,
  max = 100,
  onChange,
}: RangeProps) {
  const id = useId();

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={id}
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}
