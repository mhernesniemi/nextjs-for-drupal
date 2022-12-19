import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useId, useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  items: any;
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    menuOpen
      ? document.body.classList.add("fixed", "w-full")
      : document.body.classList.remove("fixed", "w-full");
  }, [menuOpen]);

  return (
    <div>
      <div className={menuOpen ? "fixed z-20 top-3 right-3" : undefined}>
        <button
          className="inline-flex items-center px-5 py-2.5 rounded-lg focus:ring-4 focus:outline-none text-white bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
          onClick={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true);
          }}
          aria-expanded={menuOpen ? "true" : "false"}
          aria-controls={id}
        >
          {menuOpen ? (
            <>
              <span className="sr-only">Close mobile menu</span>
              <CgClose className="text-white w-7 h-7" />
            </>
          ) : (
            <>
              <span className="sr-only">Open mobile menu</span>
              <CgMenu className="text-white w-7 h-7" />
            </>
          )}
        </button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        show={menuOpen}
      >
        <div
          id={id}
          className="fixed top-0 left-0 z-10 w-screen h-screen bg-white dark:bg-gray-900 dark:text-white"
        >
          <div className="w-full h-screen px-4 pt-20 overflow-scroll break-words">
            {items.map((item, index: number) => (
              <div key={index} className="py-2 text-lg border-b">
                <Link href={item.url}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
}
