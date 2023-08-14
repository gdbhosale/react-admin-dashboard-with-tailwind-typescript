import DarkModeSwitch from "./DarkModeSwitch";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header className="body-font text-black dark:text-white">
      <div className="container mx-auto flex flex-wrap px-2 py-5 md:flex-row">
        <Link className="title-font flex pr-4 font-medium text-black dark:text-white md:mb-0" to="/">
          <span className="text-3xl font-bold">React Admin</span>
        </Link>
        <button
          className="border-transparent bg-transparent ml-auto block h-10 w-10 cursor-pointer rounded border border-solid text-xl leading-none text-black outline-none focus:outline-none dark:border-gray-700 dark:text-gray-700 md:hidden"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <FiMenu className="mx-auto" size="20" />
        </button>
        <div
          className={
            "mt-2 w-full flex-col items-center rounded-lg bg-gray-200 p-3 dark:bg-gray-900 md:mt-0 md:flex md:w-fit  md:flex-grow md:flex-row md:bg-white md:p-0 md:dark:bg-gray-950" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <nav className="flex flex-col flex-wrap items-center justify-center text-base font-semibold md:ml-auto md:flex-row md:pl-7">
            <NavLink className="mx-3 my-1 hover:text-gray-500 dark:hover:text-gray-300 md:my-0" to="/">
              Home
            </NavLink>
            <NavLink className="mx-3 my-1 hover:text-gray-500 dark:hover:text-gray-300 md:my-0" to="/about">
              About
            </NavLink>
            <NavLink className="mx-3 my-1 hover:text-gray-500 dark:hover:text-gray-300 md:my-0" to="/login">
              Login
            </NavLink>
            <NavLink className="mx-3 my-1 hover:text-gray-500 dark:hover:text-gray-300 md:my-0" to="/register">
              Register
            </NavLink>
          </nav>
          <Link
            to="/admin"
            className="bg-transparent focus:shadow-outline mt-2 transform rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition duration-500 ease-in-out hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:text-white dark:hover:text-gray-900 dark:focus:text-gray-900 md:me-5 md:ml-4 md:mt-0"
          >
            Get Started
          </Link>

          <div className="hidden md:block">
            <DarkModeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
