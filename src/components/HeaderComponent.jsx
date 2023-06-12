import React from "react";

function headerComponent() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white">Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/saved"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Favorites
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M21.707 20.293l-5.6-5.6a8.5 8.5 0 1 0-1.414 1.414l5.6 5.6a1 1 0 0 0 1.414-1.414zm-10.464-1.414a6.5 6.5 0 1 1 0-9.192A6.5 6.5 0 0 1 11.243 18.88z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default headerComponent;
