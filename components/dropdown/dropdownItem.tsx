interface DropdownItemProps {
  title: string;
  url?: string;
}

export default function DropdownItem({ title, url }: DropdownItemProps) {
  return (
    <li>
      <a
        href={url}
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {title}
      </a>
    </li>
  );
}
