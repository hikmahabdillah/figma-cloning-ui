import { ChevronDown } from "lucide-react";

const Dropdown = ({ content, className, classNameContent }) => {
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`text-white font-medium rounded-lg text-sm text-center inline-flex items-center hover:bg-[#373737] ${className}`}
        type="button"
      >
        <div className="flex items-center">
          <div className={classNameContent}>{content}</div>
          <ChevronDown className="size-3 ml-0.5" />
        </div>
      </button>

      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
