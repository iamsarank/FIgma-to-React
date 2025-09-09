import React, { useState, useEffect, useRef, use } from "react";
import {
  Search,
  Menu,
  ShoppingCart,
  User,
  ChevronDown,
  MapPin,
  Gift,
  X,
  Sun,
  Moon,
  Globe,
} from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [language, setLanguage] = useState("EN");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    alert(`Searching for: ${searchQuery}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const languages = ["EN", "FR", "DE", "ES", "IT", "PT", "JP", "CN"];

  const countryCollections = [
    "United States",
    "United Kingdom",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Japan",
    "China",
    "India",
    "Brazil",
  ];

  return (
    <div className={` ${isDark ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
        <div className="max-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="hidden lg:flex flex-1 max-w-sm mr-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=" p-2 mr-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <div className="w-full relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors"
                >
                  <Search size={16} className="text-white" />
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                GOLDIONAIRE
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 text-sm">
                <MapPin size={16} />
                <div className="flex flex-col items-start ml-1">
                  <span className="text-xs">Delivering to US</span>
                  <span className="text-xs font-semibold">Update Location</span>
                </div>
              </button>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => toggleDropdown("language")}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400"
                >
                  <Globe size={20} />
                  <span className="text-sm font-medium">{language}</span>
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "language" && (
                  <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setActiveDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="relative text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400"
                onClick={() => setCartCount(cartCount + 1)}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400"
                >
                  <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300">
                    Sign-In
                  </span>
                  <ChevronDown className="h-3 w-3 text-gray-600 dark:text-gray-300" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Sign-In
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Create Account
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        My Collection
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Orders
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        Account Settings
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 py-4 border-t border-gray-200 dark:border-gray-700">
            {/* Country Collections Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("countries")}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
              >
                <span>Country Collections</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === "countries" && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50">
                  {countryCollections.map((country) => (
                    <button
                      key={country}
                      onClick={() => {
                        setActiveDropdown(null);
                        alert(`Selected: ${country}`);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => alert("New Drops clicked")}
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
            >
              New Drops
            </button>

            <button
              onClick={() => alert("Gift a Collectible clicked")}
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
            >
              Gift a Collectible
            </button>

            <button
              onClick={() => alert("Leaderboard clicked")}
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
            >
              Leaderboard
            </button>

            <button
              onClick={() => alert("About & Trust clicked")}
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
            >
              About & Trust
            </button>

            <button
              onClick={() => alert("Best Deals clicked")}
              className="flex items-center space-x-2 ml-auto px-4 py-1 bg-yellow-50 dark:bg-yellow-900/20 rounded-md hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors"
            >
              <span className="text-2xl">🎁</span>
              <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                Best Deals
              </span>
            </button>

            <button
              onClick={() => alert("Liveshop clicked")}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
            >
              <span>Liveshop</span>
              <span className="text-2xl">🛒</span>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700">
            {/* Mobile Search */}
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-yellow-500 hover:bg-yellow-600 rounded-full"
                >
                  <Search size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="px-4 pb-4 space-y-2">
              <button
                onClick={() => alert("Country Collections clicked")}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
              >
                Country Collections
              </button>
              <button
                onClick={() => alert("New Drops clicked")}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
              >
                New Drops
              </button>
              <button
                onClick={() => alert("Gift a Collectible clicked")}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
              >
                Gift a Collectible
              </button>
              <button
                onClick={() => alert("Leaderboard clicked")}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
              >
                Leaderboard
              </button>
              <button
                onClick={() => alert("About & Trust clicked")}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
              >
                About & Trust
              </button>
              <button
                onClick={() => alert("Best Deals clicked")}
                className="block w-full text-left py-2 text-yellow-600 dark:text-yellow-400 font-medium"
              >
                🎁 Best Deals
              </button>
              <button
                onClick={() => alert("Liveshop clicked")}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
              >
                Liveshop 🛒
              </button>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => alert("Update Location clicked")}
                  className="flex items-center space-x-2 py-2 text-gray-700 dark:text-gray-300"
                >
                  <MapPin size={16} />
                  <span>Update Location</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
