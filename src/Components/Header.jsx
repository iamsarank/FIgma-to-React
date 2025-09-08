import React, { useState } from "react";
import {
  Search,
  Menu,
  ShoppingCart,
  User,
  ChevronDown,
  MapPin,
  Gift,
  Sun,
  Moon,
  Globe,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [isCountryCollectionOpen, setIsCountryCollectionOpen] = useState(false);
  const [isNewDropsOpen, setIsNewDropsOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    country: "IN",
    currency: "INR",
    flag: "in",
    name: "India",
  });
  const locations = [
    { country: "US", currency: "USD", flag: "us", name: "United States" },
    { country: "CA", currency: "CAD", flag: "ca", name: "Canada" },
    { country: "GB", currency: "GBP", flag: "gb", name: "United Kingdom" },
    { country: "EU", currency: "EUR", flag: "eu", name: "European Union" },
    { country: "AU", currency: "AUD", flag: "au", name: "Australia" },
    { country: "JP", currency: "JPY", flag: "jp", name: "Japan" },
    { country: "IN", currency: "INR", flag: "in", name: "India" },
    { country: "CN", currency: "CNY", flag: "cn", name: "China" },
  ];

  const countryCollections = [
    { name: "United States Collection", flag: "us", items: "250+ Items" },
    { name: "European Collection", flag: "eu", items: "180+ Items" },
    { name: "Asian Collection", flag: "jp", items: "120+ Items" },
    { name: "Canadian Collection", flag: "ca", items: "95+ Items" },
    { name: "Australian Collection", flag: "au", items: "75+ Items" },
  ];

  const newDrops = [
    { name: "Limited Gold Coins", date: "Released Today", status: "hot" },
    { name: "Vintage Currency Set", date: "2 days ago", status: "new" },
    { name: "Commemorative Bills", date: "1 week ago", status: "trending" },
    { name: "Rare Collectibles", date: "2 weeks ago", status: "limited" },
  ];

  const leaderboardCategories = [
    { name: "Top Collectors", icon: "🏆" },
    { name: "Most Valuable Collections", icon: "💎" },
    { name: "Recent Achievements", icon: "🎖️" },
    { name: "Community Rankings", icon: "👥" },
  ];
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setIsLocationMenuOpen(false);
  };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <header className="bg-white dark:bg-black dark:text-amber-500 shadow-sm border-b border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md lg:hidden transition-colors"
              >
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hidden lg:flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <div className="relative flex-1 max-w-lg">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-4 pr-12 py-2 border border-gray-200 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors">
                    <Search className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-yellow-600 dark:text-yellow-500 tracking-wider transition-colors">
                GOLDIONAIRE
              </h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
                  className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 px-2 py-1 rounded transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  <div className="text-left">
                    <div className="text-xs">
                      Delivery to {selectedLocation.country}
                      <img
                        src={`https://flagcdn.com/w20/${selectedLocation.flag}.png`}
                        alt={selectedLocation.name}
                        className="w-4 h-3"
                      />
                      <span>{selectedLocation.currency}</span>
                    </div>
                  </div>
                  <ChevronDown className="h-3 w-3" />
                </button>
                {isLocationMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 z-50 max-h-64 overflow-y-auto">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-700">
                        Select Location & Currency
                      </div>
                      {locations.map((location) => (
                        <button
                          key={location.country}
                          onClick={() => handleLocationChange(location)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3 ${
                            selectedLocation.country === location.country
                              ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          <img
                            src={`https://flagcdn.com/w20/${location.flag}.png`}
                            alt={`${location.country} Flag`}
                            className="w-5 h-4"
                          />
                          <div className="flex-1">
                            <div className="font-medium">{location.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Currency: {location.currency}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="hidden sm:flex items-center space-x-1 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 px-2 py-1 rounded transition-colors">
                <Globe className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  EN
                </span>
                <ChevronDown className="h-3 w-3 text-gray-500 dark:text-gray-400" />
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
              <div className="relative cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded transition-colors">
                <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
                <span className="hidden sm:inline ml-1 text-sm text-gray-600 dark:text-gray-300">
                  Cart
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
