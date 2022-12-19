import Link from "next/link";
import QuickSearch from "components/quick-search/quick-search";
import DarkModeSwitcher from "components/dark-mode-switcher/dark-mode-switcher";
import QuickSearchButton from "components/quick-search/quick-search-button";
import Dropdown from "components/dropdown/dropdown";
import MobileMenu from "components/mobile-menu/mobile-menu";

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
            className="hidden text-2xl font-semibold text-black no-underline dark:text-white lg:inline-block"
          >
            Next.js for Drupal
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <QuickSearchButton />
          <div className="hidden lg:inline-block">
            <Dropdown
              label="Language"
              items={[
                { title: "Suomeksi", url: "#" },
                { title: "In English", url: "#" },
                { title: "På svenska", url: "#" },
              ]}
            />
          </div>
          <div className="hidden lg:inline-block">
            <DarkModeSwitcher />
          </div>
          <div className="inline-block lg:hidden">
            <MobileMenu
              items={[
                { title: "Finnish", url: "#" },
                { title: "English", url: "#" },
                { title: "Swedish", url: "#" },
              ]}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
