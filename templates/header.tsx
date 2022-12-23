import Link from "next/link";
import QuickSearch from "components/quick-search/quick-search";
import DarkModeSwitcher from "components/dark-mode-switcher/dark-mode-switcher";
import QuickSearchButton from "components/quick-search/quick-search-button";
import Dropdown from "components/dropdown/dropdown";
import MobileMenu from "components/mobile-menu/mobile-menu";
import { LanguagePicker } from "components/language-picker/language-picker";

interface HeaderProps {
  menu?: any;
}

export default function Header({ menu }: HeaderProps) {
  const mainMenu = [];
  menu?.map((item) => mainMenu.push({ title: item.title, url: item.url }));

  return (
    <header>
      <div className="container flex items-center justify-between py-6 mx-auto">
        <div className="flex items-center gap-40">
          <Link href="/" passHref className="flex items-center gap-4">
            <span className="text-5xl">🪐</span>
            <span className="hidden text-2xl font-semibold lg:inline-block">
              Next.js for Drupal
            </span>
          </Link>
          <div className="hidden gap-6 text-lg lg:flex">
            {menu?.map((item, index) => (
              <div key={index}>
                <Link href={item.url}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8">
          <QuickSearchButton />
          <div className="hidden lg:inline-block">
            <LanguagePicker />
          </div>
          <div className="hidden lg:inline-block">
            <DarkModeSwitcher />
          </div>
          <div className="inline-block lg:hidden">
            <MobileMenu items={mainMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
