import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import classNames from "classnames";

interface DropdownProps {
  label: string;
  items: any;
  background?: boolean;
  directionLeft?: boolean;
}

export default function Dropdown({
  label,
  items,
  background = true,
  directionLeft,
}: DropdownProps) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={classNames(
              "inline-flex items-center w-full px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
              { "bg-blue-700 text-white ": background }
            )}
          >
            {label}
            <FaChevronDown className="w-3 h-3 ml-3" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={classNames(
              "absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
              { "right-0": directionLeft }
            )}
          >
            {items.map((item, index) => (
              <div className="p-1" key={index}>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href={item.url}
                      locale={item.locale}
                      className={`${
                        active ? "bg-gray-500 text-white" : "text-gray-900"
                      } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.title}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
