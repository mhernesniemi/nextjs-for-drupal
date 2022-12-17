import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiSun } from "react-icons/bi";

export default function DarkModeSwitcher() {
  const [darkThemeOn, setDarkThemeOn] = useState(null);

  function switchTheme() {
    if (!darkThemeOn) {
      document.body.classList.add("dark");
      localStorage.theme = "dark";
      setDarkThemeOn(true);
    } else {
      document.body.classList.remove("dark");
      localStorage.theme = "light";
      setDarkThemeOn(false);
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
      setDarkThemeOn(true);
    } else {
      document.body.classList.remove("dark");
      setDarkThemeOn(false);
    }
  }, []);

  return (
    <>
      {
        <button onClick={() => switchTheme()}>
          {darkThemeOn ? (
            <MdOutlineDarkMode className="w-5 h-5 text-white" />
          ) : (
            <BiSun className="w-5 h-5 text-black" />
          )}
        </button>
      }
    </>
  );
}
