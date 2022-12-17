import Link from "next/link";

import { PreviewAlert } from "templates/preview-alert";
import Header from "./header";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="bg-white dark:bg-gray-900">
        <Header />
        <div className="max-w-screen-md px-6 mx-auto">
          <main className="container py-10 mx-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
