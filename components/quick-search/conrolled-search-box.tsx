import { GoSearch } from "react-icons/go";

import {
  ChangeEvent,
  FormEvent,
  RefObject,
  ComponentProps,
  Fragment,
  useRef,
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
  // Focus input after modal is open.
  const searchRef = useRef(null);
  setTimeout(() => searchRef.current.focus(), 0);

  return (
    <Fragment {...props}>
      <form action="" className="w-full" noValidate>
        <input
          ref={searchRef}
          className="w-full px-12 py-3 bg-gray-700 border border-gray-400 rounded placeholder:text-white"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="go"
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
