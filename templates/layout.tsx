import Link from "next/link";

import { PreviewAlert } from "templates/preview-alert";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-md px-6 mx-auto">
          <header>
            <div className="container flex items-center justify-between py-6 mx-auto">
              <div className="flex items-center gap-4">
                <div className="text-5xl">👾</div>
                <Link
                  href="/"
                  passHref
                  className="text-2xl font-semibold text-black no-underline dark:text-white"
                >
                  Next.js for Drupal
                </Link>
              </div>
            </div>
          </header>
          <main className="container py-10 mx-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
