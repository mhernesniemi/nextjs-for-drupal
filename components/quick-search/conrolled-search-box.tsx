import { GoSearch } from "react-icons/go";

import {
  ChangeEvent,
  FormEvent,
  RefObject,
  ComponentProps,
  Fragment,
  useRef,
  useCallback,
} from "react";

export type ControlledSearchBoxProps = ComponentProps<"div"> & {
  inputRef: RefObject<HTMLInputElement>;
  isSearchStalled: boolean;
  onChange(event: ChangeEvent): void;
  onReset(event: FormEvent): void;
  onSubmit?(event: FormEvent): void;
  placeholder?: string;
  value: string;
};

export function ControlledSearchBox({
  inputRef,
  isSearchStalled,
  onChange,
  onReset,
  onSubmit,
  placeholder,
  value,
  ...props
}: ControlledSearchBoxProps) {
  function focusAndOpenKeyboard(el) {
    if (el) {
      // Align temp input element approx. to be where the input element is
      var __tempEl__ = document.createElement("input");
      __tempEl__.style.position = "absolute";
      __tempEl__.style.top = el.offsetTop + 7 + "px";
      __tempEl__.style.left = el.offsetLeft + "px";
      __tempEl__.style.height = "0";
      __tempEl__.style.opacity = "0";
      // Put this temp element as a child of the page <body> and focus on it
      document.body.appendChild(__tempEl__);
      __tempEl__.focus();

      // The keyboard is open. Now do a delayed focus on the target element
      setTimeout(function () {
        el.focus();
        el.click();
        // Remove the temp element
        document.body.removeChild(__tempEl__);
      }, 100);
    }
  }

  const callbackRef = useCallback((inputElement: HTMLInputElement): void => {
    callbackRef.current = inputElement;
    focusAndOpenKeyboard(inputElement);
  }, []);

  return (
    <Fragment {...props}>
      <form action="" className="w-full" noValidate>
        <input
          ref={callbackRef}
          className="w-full px-12 py-3 bg-gray-700 border border-gray-400 rounded placeholder:text-white"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder={placeholder}
          spellCheck={false}
          maxLength={512}
          type="search"
          value={value}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none left-6">
          <GoSearch className="w-6 h-6 text-white" />
        </div>
      </form>
    </Fragment>
  );
}
