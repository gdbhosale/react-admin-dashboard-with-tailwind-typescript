import DropdownProfile from "./DropdownProfile";
import { BiCommand, BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

const Topbar = ({ sidebarOpen, setSidebarOpen }: any) => {
  return (
    <div
      id="topbar"
      className="flex h-16 w-full flex-row place-content-between border-b border-gray-200 dark:border-gray-900"
    >
      <button
        className="flex h-full w-16 flex-col place-content-center px-6 md:hidden"
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
      >
        <FiMenu className="mx-auto text-gray-800 dark:text-gray-300" size="20" />
      </button>

      <div className="hidden h-full w-40 flex-col place-content-center px-6 md:flex">
        <div className="text-xs text-gray-700 dark:text-gray-400">Welcome,</div>
        <div className="text-sm font-medium dark:text-white">John Doe</div>
      </div>

      <div className="hidden h-full w-full flex-col place-content-center md:flex">
        <div className="relative">
          <BiSearch
            size="32"
            className="pointer-events-none absolute inset-y-0 left-0 flex h-full items-center pl-3 text-gray-500"
          />
          <input
            type="search"
            id="default-search"
            className="block w-full appearance-none rounded-xl border-0 bg-white  p-3 pl-10 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none dark:bg-gray-900 dark:text-white dark:focus:bg-gray-800"
            placeholder="Find Something"
            required
          />
          <button
            type="submit"
            className="text absolute right-2.5 top-2  rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500 dark:bg-gray-700/50 dark:text-gray-400"
          >
            <BiCommand size="14" className="inline align-[-2px]" /> <span>K</span>
          </button>
        </div>
      </div>

      <DropdownProfile align="right" />
    </div>
  );
};

export default Topbar;
