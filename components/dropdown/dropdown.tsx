import { useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ClickAwayListener from "react-click-away-listener";
import DropdownItem from "./dropdownItem";

interface DropdownProps {
  label?: string;
  background?: boolean;
  items: Array<Object>;
}

export default function Dropdown({ label, items, background }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className="relative inline-block">
        <button
          id={id}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
        >
          Language <FaChevronDown className="ml-3" />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby={id}
            >
              {items.map((item: any, index) => (
                <div key={index}>
                  <DropdownItem title={item.title} url={item.url} />
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}
