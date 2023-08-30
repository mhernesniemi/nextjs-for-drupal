import Link from "next/link";
import cx from "classix";

interface ButtonProps {
  type: "primary" | "secondary" | "outlined" | "disabled";
  children: any;
  url?: string;
  onClick?: any;
}

export default function Button({ type, children, url, onClick }: ButtonProps) {
  const Tag = url && type != "disabled" ? Link : "button";

  return (
    <Tag
      href={url}
      className="max-w-[250px] break-words font-bold text-white uppercase"
      onClick={onClick}
    >
      <div
        className={cx(
          "rounded px-3 py-2 text-center",
          type == "primary" && "bg-blue-500 hover:bg-blue-600",
          type == "secondary" && "bg-violet-500 hover:bg-violet-600",
          type == "outlined" &&
            "outline outline-1 outline-offset-[-1px] outline-black text-black",
          type == "disabled" && "bg-gray-500 cursor-not-allowed"
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
