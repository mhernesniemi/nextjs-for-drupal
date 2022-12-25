import { Dialog, Transition } from "@headlessui/react";
import Button from "components/button/button";
import { Fragment, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import QuickSearch from "./quick-search";

export default function QuickSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setTimeout(() => inputRef.current.focus(), 500);
            setIsOpen(true);
          }}
          className="inline-flex items-center py-3 pl-4 pr-12 text-white bg-gray-700 border border-gray-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-800"
        >
          <BiSearch className="w-5 h-5 mr-3 text-white" /> Quick search
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex items-center justify-center min-h-full md:p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full h-screen max-w-xl overflow-scroll bg-white md:rounded-2xl dark:bg-gray-800 lg:h-auto">
                  <Dialog.Title as="h3" className="sr-only">
                    Haku
                  </Dialog.Title>
                  <div>
                    <QuickSearch setIsOpen={setIsOpen} inputRef={inputRef} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
