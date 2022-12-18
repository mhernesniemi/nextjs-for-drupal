import { Disclosure } from "@headlessui/react";
import Heading from "components/heading/heading";
import { FaChevronUp } from "react-icons/fa";

interface AccordionProps {
  items: any;
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <>
      {items.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full p-5 mb-3 font-medium text-left text-black border-2 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                <Heading level="h3" size="small">
                  {item.title}
                </Heading>
                <FaChevronUp className={open ? "rotate-180 transform" : null} />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pt-3 pb-8 text-black dark:text-white">
                {item.body}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
}
