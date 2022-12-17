import Link from "next/link";
import QuickSearch from "components/quick-search/quick-search";
import DarkModeSwitcher from "components/dark-mode-switcher/dark-mode-switcher";
import QuickSearchButton from "components/quick-search/quick-search-button";
import Dropdown from "components/dropdown/dropdown";

interface HeaderProps {
  propertyName?: string;
}

export default function Header({}: HeaderProps) {
  return (
    <header>
      <div className="container flex items-center justify-between py-6 mx-auto">
        <div className="flex items-center gap-4">
          <div className="text-5xl">🎅🏻</div>
          <Link
            href="/"
            passHref
            className="text-2xl font-semibold text-black no-underline dark:text-white"
          >
            Next.js for Drupal
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <QuickSearchButton />
          <Dropdown
            items={[
              { title: "Finnish", url: "#" },
              { title: "English", url: "#" },
              { title: "Swedish", url: "#" },
            ]}
          />
          <DarkModeSwitcher />
        </div>
      </div>
    </header>
  );
}
