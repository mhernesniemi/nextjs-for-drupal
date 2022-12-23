import classNames from "classnames";
import Dropdown from "components/dropdown/dropdown";
import Link from "next/link";
import { useRouter } from "next/router";

export function LanguagePicker() {
  const { locales, asPath } = useRouter();

  const languages = [];

  locales?.map((locale) =>
    languages.push({
      title:
        locale == "en" ? "English" : locale == "es" ? "Español" : "undefined",
      url: asPath,
      locale: locale,
    })
  );

  return (
    <div>
      <Dropdown label="Language" items={languages} />
    </div>
  );
}
