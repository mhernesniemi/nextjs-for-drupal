import { Tab } from "@headlessui/react";

interface TabsProps {
  items: any;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ items }: TabsProps) {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
          {items.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {item.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {items.map((item, index) => (
            <Tab.Panel
              key={index}
              className="bg-gray-200 rounded-lg dark:bg-gray-800 p-7 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            >
              <ul>{item.body}</ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
