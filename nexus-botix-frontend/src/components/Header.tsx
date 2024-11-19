import logo from "/logo.svg";
import GetStarted from "./GetStarted";

export default function Header() {
  const menuItems = [
    {
      title: "Platform",
      links: ["Platform 1", "Platform 2", "Platform 3"],
    },
    {
      title: "Resources",
      links: ["Resources 1", "Resources 2", "Resources 3"],
    },
    {
      title: "Solution",
      links: ["Solution 1", "Solution 2", "Solution 3"],
    },
  ];

  return (
    <header className="~h-12/24 flex bg-custom-black sticky top-0 right-0 w-full z-10">
      <div className="flex justify-between w-full">
        {/* Logo Section */}
        <div className="flex justify-start items-center ~gap-0/3">
          <img src={logo} alt="logo" className="~h-4/14 ~w-5/8" />
          <h1 className="rtext font-bold ">NEXUS BOTIX</h1>
        </div>
        {/* Navigation Section */}
        <div className="flex items-center justify-center mx-2 h-full">
          <nav className="flex ~space-x-7/20 items-center srtext h-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group hover:cursor-pointer h-full"
              >
                <button className="h-full relative custom-arrow">
                  {item.title}
                </button>
                <ul className="hidden group-hover:flex absolute flex-col bg-custom-black text-white rounded shadow-md p-2">
                  {item.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="px-4 py-2 hover:bg-zinc-800 w-max"
                    >
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <a href="#" className="h-full flex items-center justify-center">
              Pricing
            </a>
          </nav>
        </div>

        {/* Authentication Section */}
        <div className="flex justify-center items-center ~gap-3/6">
          <button className="srtext">Sign In</button>
          <GetStarted className="bg-custom-yellow font-medium"/>
        </div>
      </div>
    </header>
  );
}
