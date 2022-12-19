import classNames from "classnames";

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  size: "xl" | "large" | "medium" | "small";
  children: string;
}

export default function Heading({ level, size, children }: HeadingProps) {
  const Tag = level;

  return (
    <>
      <Tag
        className={classNames(
          "text-black",
          "dark:text-white",
          {
            "text-6xl": size === "xl",
            "font-black": size === "xl",
            "mb-10": size === "xl",
          },
          {
            "text-4xl": size === "large",
            "font-bold": size === "large",
            "mb-6": size === "large",
          },
          {
            "text-2xl": size === "medium",
            "font-bold": size === "medium",
            "mb-3": size === "medium",
          },
          {
            "font-bold": size === "small",
          }
        )}
      >
        {children}
      </Tag>
    </>
  );
}
