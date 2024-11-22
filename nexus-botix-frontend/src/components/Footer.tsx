import logo from "/logo.svg";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import twitterLogo from "/new-twitter.svg"
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-36 px-14">
      <div className="mb-32">
        <div className="flex justify-start items-center ~gap-0/3 mb-10">
          <img src={logo} alt="logo" className="~h-4/14 ~w-5/8" />
          <h1 className="rtext font-bold ">NEXUS BOTIX</h1>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Main Section</li>
            <li>
              <Link to="">Find Work</Link>
            </li>
            <li>
              <Link to="">Integrations</Link>
            </li>
            <li>
              <Link to="">How it Works</Link>
            </li>
            <li>
              <Link to="">Pricing</Link>
            </li>
            <li>
              <Link to="">Explore Jobs</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Resources</li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Help Center</Link>
            </li>
            <li>
              <Link to="">Frequently Asked Questions (FAQs)</Link>
            </li>
            <li>
              <Link to="">Case Studies</Link>
            </li>
            <li>
              <Link to="">Community</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Legal</li>
            <li>
              <Link to="">Privacy Policy</Link>
            </li>
            <li>
              <Link to="">Terms of Service</Link>
            </li>
            <li>
              <Link to="">Cookie policy</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Company Information</li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Support</li>
            <li>
              <Link to="">24/7 Customer Support</Link>
            </li>
            <li>
              <Link to="">Chat Support</Link>
            </li>
            <li>
              <Link to="">Email Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <p>Nexus Botix international Ltd {currentYear}</p>
          <div className="flex justify-center items-center gap-5">
            <p>Follow Us</p>
            <a href="" className="border rounded-full p-2">
              <Linkedin />
            </a>
            <a href="" className="border rounded-full p-2">
              <Facebook />
            </a>
            <a href="" className="border rounded-full p-2">
              <Instagram />
            </a>
            <a href="" className="border rounded-full p-2 flex justify-center items-center">
              <img src={twitterLogo} alt="twitter" className="fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
