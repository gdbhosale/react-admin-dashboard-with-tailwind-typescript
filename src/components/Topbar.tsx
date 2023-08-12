import { BiCommand, BiSearch, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="flex flex-row h-16 w-full border-b border-gray-200 dark:border-gray-800 place-content-between">
      <div className="flex flex-col w-40 h-full place-content-center px-6">
        <div className="text-xs text-gray-700 dark:text-gray-400">Welcome,</div>
        <div className="text-sm font-medium dark:text-white">John Doe</div>
      </div>
      <div className="flex flex-col w-full h-full place-content-center">
        <div className="relative">
          <BiSearch size="32" className="absolute inset-y-0 left-0 flex h-full text-gray-500 items-center pl-3 pointer-events-none" />
          <input type="search" id="default-search" className="block w-full p-3 pl-10 text-sm appearance-none  border-0 rounded-xl text-gray-800 placeholder:text-gray-500 dark:text-white bg-white dark:bg-gray-900 dark:focus:bg-gray-800 focus:outline-none" placeholder="Find Something" required />
          <button type="submit" className="text absolute right-2.5 top-2  font-medium rounded-lg text-sm px-3 py-1 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50"><BiCommand size="14" className='inline align-[-2px]' /> <span>K</span></button>
        </div>
      </div>

      <div className="flex flex-col px-4 h-full place-content-center">
        {/* Reference https://flowbite.com/docs/components/navbar/#navbar-with-dropdown */}
        <button className="w-10 h-10 text-gray-500 rounded-full text-center bg-white hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800">
          <BiUser size="20" className='mx-auto' />
        </button>
        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
            <li>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
            </li>
            <li>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
            </li>
          </ul>
          <div className="py-1">
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
