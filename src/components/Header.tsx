import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <header className="text-black dark:text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row">
        <Link className="flex title-font font-medium text-black dark:text-white mb-4 md:mb-0 pr-4" to="/">
          <span className="ml-3 font-bold text-3xl">React Admin</span>
        </Link>
        <button
          className="text-black dark:text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
            <NavLink className="mx-3 hover:text-gray-500 dark:hover:text-gray-300" to="/">Home</NavLink>
            <NavLink className="mx-3 hover:text-gray-500 dark:hover:text-gray-300" to="/about">About</NavLink>
            <NavLink className="mx-3 hover:text-gray-500 dark:hover:text-gray-300" to="/login">Login</NavLink>
            <NavLink className="mx-3 hover:text-gray-500 dark:hover:text-gray-300" to="/register">Register</NavLink>
          </nav>
          <Link to='/admin' className="px-4 py-2 mt-2 me-5 text-sm font-semibold text-white bg-primary-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-white md:mt-0 md:ml-4 hover:text-gray-900 dark:hover:text-gray-900 focus:text-gray-900 dark:focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            Get Started
          </Link>

          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
}
