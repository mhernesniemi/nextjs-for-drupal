import { Dialog } from "@headlessui/react";
import classNames from "classnames";
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
          onClick={async function () {
            await setIsOpen(true);
            inputRef.current?.focus();
          }}
          className="inline-flex items-center py-3 pl-4 pr-12 text-white bg-gray-700 border border-gray-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-800"
        >
          <BiSearch className="w-5 h-5 mr-3 text-white" /> Quick search
        </button>
      </div>

      <div className={classNames({ hidden: !isOpen })}>
        <Dialog
          open={true}
          as="div"
          className={classNames("relative", "z-10", { hidden: !isOpen })}
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />

          <div className="fixed inset-0">
            <div className="flex items-center justify-center min-h-full md:p-4">
              <Dialog.Panel className="relative w-full h-screen max-w-xl overflow-scroll bg-white md:rounded-2xl dark:bg-gray-800 lg:h-auto">
                <Dialog.Title as="h3" className="sr-only">
                  Haku
                </Dialog.Title>
                <div>
                  <QuickSearch setIsOpen={setIsOpen} inputRef={inputRef} />
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
