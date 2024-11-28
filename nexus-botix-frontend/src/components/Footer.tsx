import logo from "/logo.svg";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import twitterLogo from "/new-twitter.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="~mt-20/36 ~px-2/14 mb-10">
      <div className="~mb-10/32 w-full">
        <div className="flex items-center justify-center lg:justify-start ~gap-1/3 mb-10 w-full">
          <img src={logo} alt="logo" className="~h-8/14 ~w-6/8" />
          <h1 className="text-xl font-bold">NEXUS BOTIX</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
          <ul className="flex flex-col ~gap-2/1  items-center lg:items-start">
            <li className="text-base font-bold">Main Section</li>
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
          <ul className="flex flex-col ~gap-2/1  items-center lg:items-start">
            <li className="text-base font-bold">Resources</li>
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
          <ul className="flex flex-col ~gap-2/1  items-center lg:items-start">
            <li className="text-base font-bold">Legal</li>
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
          <ul className="flex flex-col ~gap-2/1  items-center lg:items-start">
            <li className="text-base font-bold">Company Information</li>
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
          <ul className="flex flex-col ~gap-2/1  items-center lg:items-start">
            <li className="text-base font-bold">Support</li>
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
        <div className="flex justify-between items-center flex-col-reverse gap-7 lg:flex-row">
          <p>Nexus Botix international Ltd {currentYear}</p>
          <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
            <p>Follow Us</p>
            <div className="flex gap-5">
              <a href="" className="border rounded-full p-2">
                <Linkedin />
              </a>
              <a href="" className="border rounded-full p-2">
                <Facebook />
              </a>
              <a href="" className="border rounded-full p-2">
                <Instagram />
              </a>
              <a
                href=""
                className="border rounded-full p-2 flex justify-center items-center h-10 w-10"
              >
                <img src={twitterLogo} alt="twitter" className="fill-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
