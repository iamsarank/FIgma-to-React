import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ChevronDown, Globe } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("EN");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const languages = ["EN", "FR", "DE", "ES", "IT", "PT", "JP", "CN"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };
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

  // Colored payment method icons
  const paymentMethods = [
    {
      name: "Mastercard",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
      alt: "Mastercard",
    },
    {
      name: "Visa",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
      alt: "Visa",
    },
    {
      name: "American Express",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
      alt: "American Express",
    },
    {
      name: "Discover",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg",
      alt: "Discover",
    },
    {
      name: "PayPal",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
      alt: "PayPal",
    },
    {
      name: "Apple Pay",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
      alt: "Apple Pay",
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Newsletter :
            </h4>
            <p className="text-md text-gray-600 mb-4 leading-relaxed">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Shop :
            </h4>
            <ul className="space-y-3">
              {[
                "Country Collections",
                "New Drops",
                "Gift a Collectible",
                "Leaderboard",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-md text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Quick Links :
            </h4>
            <ul className="space-y-3">
              {["About", "Contact", "FAQ", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-md text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact Us :
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaPhone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-md text-gray-600">319-351-1898</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:support@goldionaire.com"
                  className="text-md text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  support@goldionaire.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <address className="text-md text-gray-600 not-italic">
                  3473 Shinn Street
                  <br />
                  New York, NY 10007
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col items-start gap-2">
          <p className="text-lg font-semibold text-gray-400 uppercase tracking-wider">
            We Accept :
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {/* Colored Payment Method Icons */}
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex items-center justify-center p-1 bg-white rounded border hover:shadow-sm transition-shadow duration-200 border-none"
              >
                <img
                  src={method.src}
                  alt={method.alt}
                  className="h-6 w-auto max-w-[50px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            {/* 2CO Custom Badge */}
            <div className="flex items-center justify-center bg-blue-500 text-white px-3 py-1.5 rounded text-xs font-bold border hover:shadow-sm transition-shadow duration-200">
              2CO
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Brand & Location */}
            <div className="flex items-center space-x-6">
              <span className="font-bold text-lg text-yellow-600 tracking-wide">
                GOLDIONAIRE
              </span>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
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
                    <div className="absolute right-[-20px] bottom-[25px] mt-2 w-24 bg-white dark:bg-gray-700 rounded-md shadow-lg z-50">
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
                <span className="text-gray-400">English</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-md text-gray-500">
              Copyright © 2025 All rights reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              {[
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 bg-yellow-500 hover:bg-yellow-600 text-white rounded flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
