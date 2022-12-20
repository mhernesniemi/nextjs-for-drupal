import { useId } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: any;
  name?: string;
  displaySwitch?: boolean;
}

export default function Checkbox({
  label,
  onChange,
  checked,
  name,
  displaySwitch,
}: CheckboxProps) {
  const id = useId();

  return (
    <>
      {!displaySwitch ? (
        <div className="flex items-center mb-4">
          <input
            id={id}
            name={name}
            onChange={onChange}
            checked={checked}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor={id}
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      ) : (
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id={id}
              name={name}
              onChange={onChange}
              checked={checked}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {label}
            </span>
          </label>
        </div>
      )}
    </>
  );
}
