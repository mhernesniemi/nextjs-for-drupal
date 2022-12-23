import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  label: string;
  background?: boolean;
  items: any;
  position?: "left" | "right";
}

export default function Dropdown({ label, items, background }: DropdownProps) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
