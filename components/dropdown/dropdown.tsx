import { useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ClickAwayListener from "react-click-away-listener";

interface DropdownProps {
  label?: string;
}

export default function Dropdown({}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className="relative inline-block">
        <button
          id={id}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}
