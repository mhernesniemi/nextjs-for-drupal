interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4";
  size: "xl" | "large" | "medium" | "small";
  children: string;
}

export default function Heading({ level, size, children }: HeadingProps) {
  const Tag = level;

  return (
    <>
      {size === "xl" && (
        <Tag className="mb-10 text-6xl font-black text-black dark:text-white">
          {children}
        </Tag>
      )}
      {size === "large" && (
        <Tag className="mb-6 text-4xl font-bold text-black dark:text-white">
          {children}
        </Tag>
      )}
      {size === "medium" && (
        <Tag className="mb-3 text-2xl font-bold text-black dark:text-white">
          {children}
        </Tag>
      )}
      {size === "small" && (
        <Tag className="font-bold text-black dark:text-white">{children}</Tag>
      )}
    </>
  );
}
