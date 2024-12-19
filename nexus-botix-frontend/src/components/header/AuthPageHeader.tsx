import { Link } from "react-router-dom";
import logo from "/logo/logo.svg";

export default function AuthPageHeader() {
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

  return (
    <header className="h-24 flex bg-black sticky top-0 right-0 w-full z-50">
      <div className="px-4 flex justify-center items-center w-full">
        <div className="flex justify-between w-full items-center">
          <Link to="/nexus-botix" className="flex justify-center items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="~h-8/14 ~w-5/8" />
              <h1 className="~text-lg/2xl font-bold text-white">NEXUS BOTIX</h1>
            </div>
          </Link>
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
              <Link
                to="/nexus-botix/pricing"
                className="h-full flex items-center justify-center"
              >
                Pricing
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
