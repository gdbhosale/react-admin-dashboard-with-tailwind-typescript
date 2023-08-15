import useColorMode from "../_hooks/useColorMode";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {colorMode === "dark" ? (
        <button
          onClick={() => {
            if (typeof setColorMode === "function") {
              setColorMode("light");
            }
          }}
          className="rounded-full p-1 text-gray-600 outline-none focus:outline-none"
        >
          <span className="sr-only">Light Mode</span>

          <BsFillMoonStarsFill size="20" />
        </button>
      ) : (
        <button
          onClick={() => {
            if (typeof setColorMode === "function") {
              setColorMode("dark");
            }
          }}
          className="rounded-full p-1 text-gray-400 outline-none focus:outline-none focus:ring-opacity-20 focus-visible:ring focus-visible:ring-gray-300"
        >
          <span className="sr-only">Dark Mode</span>
          <BsSun size="20" />
        </button>
      )}
    </div>
  );
};

export default DarkModeSwitch;
