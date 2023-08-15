// import User from "../../_models/user.model";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

// const user: User = new User(0, "", "", ["user", "admin"], "", "");

function UserAdd() {
  return (
    <div className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <Link to="/admin/users" className="text-left text-lg font-semibold text-gray-900 dark:text-white">
            Users
          </Link>
          <p className="hidden text-gray-500 dark:text-gray-400 md:block">Add New User and assign roles</p>
        </div>
      </div>

      <form action="#">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="w-full">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="ra-input"
              placeholder="User name"
              required={true}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="ra-input"
              placeholder="Email"
              required={true}
            />
          </div>
          <div className="w-full">
            <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input type="number" name="price" id="price" className="ra-input" placeholder="$2999" required={true} />
          </div>
          <div>
            <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>
            <select id="category" className="ra-input">
              <option value="TV">TV/Monitors</option>
              <option value="PC">PC</option>
              <option value="GA">Gaming/Console</option>
              <option value="PH">Phones</option>
            </select>
          </div>
          <div>
            <label htmlFor="item-weight" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Item Weight (kg)
            </label>
            <input
              type="number"
              name="item-weight"
              id="item-weight"
              className="ra-input"
              placeholder="12"
              required={true}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea id="description" rows={8} className="ra-input" placeholder="Your description here"></textarea>
          </div>
        </div>
        <button type="submit" className="ra-btn-primary mt-4 sm:mt-6">
          Add User
        </button>
      </form>

      <div
        id="alert-2"
        className="my-4 flex items-center rounded-lg border border-red-100 bg-red-50 p-4 text-red-500 dark:border-0 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <FaInfoCircle size="20" />
        <div className="ml-3 text-sm font-medium">
          A simple info alert with an example link. Give it a click if you like.
        </div>
        <button
          type="button"
          className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 p-1.5 text-red-500 hover:bg-red-200 focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
          data-dismiss-target="#alert-2"
          aria-label="Close"
        >
          <IoMdClose size="20" />
        </button>
      </div>
    </div>
  );
}

export default UserAdd;
