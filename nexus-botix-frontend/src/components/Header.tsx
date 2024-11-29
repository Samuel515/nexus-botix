import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import GetStarted from "./GetStarted";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null); // Explicitly define type

  const menuItems = [
    {
      title: "Platform",
      links: ["Platform 1", "Platform 2", "Platform 3"],
      destination: ["/platform1", "/platform2", "/platform3"],
    },
    {
      title: "Resources",
      links: ["Resources 1", "Resources 2", "Resources 3"],
      destination: ["/resources1", "/resources2", "/resources3"],
    },
    {
      title: "Solution",
      links: ["Solution 1", "Solution 2", "Solution 3"],
      destination: ["/sol1", "/sol2", "/sol3"],
    },
  ];

  const toggleMenu = (index: number) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <header className="h-24 flex bg-black sticky top-0 right-0 w-full z-50">
      <div className="flex justify-between w-full items-center px-4">
        {/* Logo Section */}
        <Link to="/" className="flex justify-center items-center">
          <div className="flex justify-start items-center gap-3">
            <img src={logo} alt="logo" className="h-14 w-8" />
            <h1 className="text-2xl font-bold text-white">NEXUS BOTIX</h1>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          &#9776;
        </button>

        {/* Navigation Section for Large Screens */}
        <div className="hidden lg:flex items-center justify-center mx-2 h-full">
          <nav className="flex space-x-12 items-center text-white">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group hover:cursor-pointer h-full"
              >
                <button className="h-[80px] custom-arrow">
                  {item.title}
                </button>
                <ul className="hidden group-hover:flex flex-col bg-gray-900 text-white rounded shadow-md p-2 absolute">
                  {item.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="px-4 py-2 hover:bg-gray-700 w-max"
                    >
                      <Link to={item.destination[linkIndex]}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link to="/nexus-botix-frontend/pricing" className="h-full flex items-center justify-center">
              Pricing
            </Link>
          </nav>
        </div>

        {/* Authentication Section for Large Screens */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          <Link to="/nexus-botix-frontend/signin" className="text-white">Sign In</Link>
          <GetStarted className="bg-custom-yellow text-white font-medium px-4 py-2 rounded"/>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 z-20 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-custom-black text-white p-4 flex flex-col transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="self-end text-3xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
          {/* Sidebar Links */}
          <nav className="mt-8 space-y-6">
            {menuItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleMenu(index)}
                  className="w-full text-left px-4 py-2 font-bold hover:bg-gray-700 rounded"
                >
                  {item.title}
                </button>
                <ul
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedMenu === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={item.destination[linkIndex]}
                        className="block hover:bg-gray-700 px-4 py-2 rounded"
                        onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              to="/nexus-botix-frontend/pricing"
              className="block hover:bg-gray-700 px-4 py-2 rounded mt-4 font-bold"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
            >
              Pricing
            </Link>
          </nav>

          {/* Authentication Section */}
          <div className="mt-auto">
            <Link to="/nexus-botix-frontend/signin"
              className="text-left w-full px-4 py-2 hover:bg-gray-700 rounded mb-4 flex justify-center items-center border hover:border-0"
              onClick={() => setIsSidebarOpen(false)}
            >
              Sign In
            </Link>
            <GetStarted className="w-full bg-custom-yellow text-white font-medium px-4 py-2 rounded text-center" />
          </div>
        </div>
      </div>
    </header>
  );
}
