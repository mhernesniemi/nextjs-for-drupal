import Link from "next/link";

import { PreviewAlert } from "templates/preview-alert";
import Header from "./header";

interface LayoutProps {
  menus?: any;
  children?: any;
}

export function Layout({ children, menus }: LayoutProps) {
  return (
    <>
      <PreviewAlert />
      <div className="text-black bg-white dark:bg-gray-900 dark:text-white">
        <Header menu={menus} />
        <div className="max-w-screen-md px-6 mx-auto">
          <main className="container py-10 mx-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
