import Link from "next/link";

interface ButtonProps {
  type: "primary" | "secondary" | "outlined" | "disabled";
  children: any;
  url?: string;
}

export default function Button({ type, children, url }: ButtonProps) {
  const Tag = url ? Link : "button";

  return (
    <>
      {type === "primary" && (
        <Tag
          href={url}
          className="inline-flex items-center px-5 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {children}
        </Tag>
      )}
      {type === "secondary" && (
        <Tag
          href={url}
          className="inline-flex items-center px-5 py-2 text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
        >
          {children}
        </Tag>
      )}
      {type === "outlined" && (
        <Tag
          href={url}
          className="inline-flex items-center px-5 py-2 text-blue-700 border-2 border-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 dark:text-white"
        >
          {children}
        </Tag>
      )}
      {type === "disabled" && (
        <button className="inline-flex items-center px-5 py-2 text-black bg-gray-200 rounded-lg cursor-not-allowed dark:bg-gray-400">
          {children}
        </button>
      )}
    </>
  );
}
