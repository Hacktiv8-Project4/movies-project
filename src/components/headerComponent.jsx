import React from "react";
import { useDispatch } from "react-redux";
import { fetchSearchMovies } from "../redux/slices/moviesSlice";

function HeaderComponent() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearchMovies(searchTerm));
    setSearchTerm("");
  };
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
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search movies..."
                  className="px-4 py-2 border rounded-md"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
