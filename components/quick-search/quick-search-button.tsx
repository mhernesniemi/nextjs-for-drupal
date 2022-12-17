import { BiSearch } from "react-icons/bi";

export default function QuickSearchButton() {
  return (
    <button className="inline-flex items-center py-3 pl-4 pr-12 text-white bg-gray-700 border border-gray-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-800">
      <BiSearch className="w-5 h-5 mr-3 text-white" /> Quick search
    </button>
  );
}
