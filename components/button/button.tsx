import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  type: "primary" | "secondary" | "outlined" | "disabled";
  children: any;
  url?: string;
  clickEvent?: Function;
}

export default function Button({
  type,
  children,
  url,
  clickEvent,
}: ButtonProps) {
  const Tag = url ? Link : "button";

  const classList = classNames(
    "inline-flex",
    "items-center",
    "px-5",
    "py-2",
    "rounded-lg",
    "focus:ring-4",
    "focus:outline-none",
    {
      "text-white": type === "primary",
      "bg-blue-700": type === "primary",
      "hover:bg-blue-800": type === "primary",
      "dark:bg-blue-600": type === "primary",
      "dark:hover:bg-blue-700": type === "primary",
      "dark:focus:ring-blue-800": type === "primary",
    },
    {
      "text-white": type == "secondary",
      "bg-amber-700": type === "secondary",
      "hover:bg-amber-800": type === "secondary",
      "dark:bg-amber-600": type === "secondary",
      "dark:hover:bg-amber-700": type === "secondary",
      "dark:focus:ring-amber-800": type === "secondary",
    },
    {
      "text-blue-700": type == "outlined",
      "border-2": type == "outlined",
      "dark:text-white": type === "outlined",
    },
    {
      "cursor-not-allowed": type == "disabled",
      "bg-gray-200": type == "disabled",
      "dark:bg-gray-400": type === "disabled",
    }
  );

  return (
    <>
      {type !== "disabled" ? (
        <Tag
          href={url}
          className={classList}
          onClick={clickEvent ? () => clickEvent() : null}
        >
          {children}
        </Tag>
      ) : (
        <button className={classList} disabled>
          {children}
        </button>
      )}
    </>
  );
}
