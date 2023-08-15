import { BiChevronsLeft, BiChevronsRight, BiSearch, BiUser } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { FaChevronDown, FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserList() {
  return (
    <div className="p-6">

      <div className="flex items-center justify-between mb-5">
        <div>
          <Link to="/admin/users" className="text-lg font-semibold text-left text-gray-900 dark:text-white">
            Users
          </Link>
          <p className="text-gray-500 dark:text-gray-400 hidden md:block">Manage all your existing users or add a new one</p>
        </div>
        <Link to="/admin/users/add" type="button" className="flex items-center justify-center px-4 py-2 pt-2 text-sm font-medium text-white rounded-lg bg-primary-600 hover:bg-primary-700">
          <BiUser className="me-1" size="15" />
          Add User
        </Link>
      </div>

      <div className="relative overflow-x-auto border-gray-400 sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="px-5 py-4  text-left bg-white  dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span className="sr-only">Action button</span>
                  Action
                  <FaChevronDown className="ml-1" size="12" />
                </button>
                <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                      <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</Link>
                  </div>
                </div>
              </div>
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <BiSearch
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  />
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Search Users"
                />
              </div>
            </div>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Name
                  <Link to="#">
                    <FaSort className="ml-1" size="12" />
                  </Link>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Role
                  <Link to="#">
                    <FaSort className="ml-1" size="12" />
                  </Link>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Status
                  <Link to="#">
                    <FaSort className="ml-1" size="12" />
                  </Link>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/john-doe.jpg" alt="" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Neil Sims</div>
                  <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                </div>
              </th>
              <td className="px-6 py-4">
                React Developer
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                </div>
              </td>
              <td className="px-6 py-4">
                <Link to="#" className="inline p-2 font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 hover:dark:text-blue-600"><BsEyeFill className="inline" size="15" /></Link>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/john-doe.jpg" alt="" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Bonnie Green</div>
                  <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                </div>
              </th>
              <td className="px-6 py-4">
                Designer
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                </div>
              </td>
              <td className="px-6 py-4">
                <Link to="#" className="inline p-2 font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 hover:dark:text-blue-600"><BsEyeFill className="inline" size="15" /></Link>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/john-doe.jpg" alt="" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Jese Leos</div>
                  <div className="font-normal text-gray-500">jese@flowbite.com</div>
                </div>
              </th>
              <td className="px-6 py-4">
                Vue JS Developer
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                </div>
              </td>
              <td className="px-6 py-4">
                <Link to="#" className="inline p-2 font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 hover:dark:text-blue-600"><BsEyeFill className="inline" size="15" /></Link>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/john-doe.jpg" alt="" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Thomas Lean</div>
                  <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                </div>
              </th>
              <td className="px-6 py-4">
                UI/UX Engineer
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                </div>
              </td>
              <td className="px-6 py-4">
                <Link to="#" className="inline p-2 font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 hover:dark:text-blue-600"><BsEyeFill className="inline" size="15" /></Link>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src="/john-doe.jpg" alt="" />
                <div className="pl-3">
                  <div className="text-base font-semibold">Leslie Livingston</div>
                  <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                </div>
              </th>
              <td className="px-6 py-4">
                SEO Specialist
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                </div>
              </td>
              <td className="px-6 py-4">
                <Link to="#" className="inline p-2 font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 hover:dark:text-blue-600"><BsEyeFill className="inline" size="15" /></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal pe-1 text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <Link to="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><BiChevronsLeft size="20" /></Link>
          </li>
          <li>
            <Link to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
          </li>
          <li>
            <Link to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</Link>
          </li>
          <li>
            <Link to="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</Link>
          </li>
          <li>
            <Link to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</Link>
          </li>
          <li>
            <Link to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</Link>
          </li>
          <li>
            <Link to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><BiChevronsRight size="20" /></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default UserList;
