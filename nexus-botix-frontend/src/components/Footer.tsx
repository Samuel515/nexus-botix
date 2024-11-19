import logo from "/logo.svg";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import twitterLogo from "/new-twitter.svg"

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
              <a href="">Find Work</a>
            </li>
            <li>
              <a href="">Integrations</a>
            </li>
            <li>
              <a href="">How it Works</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Explore Jobs</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Resources</li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Frequently Asked Questions (FAQs)</a>
            </li>
            <li>
              <a href="">Case Studies</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Legal</li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Cookie policy</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Company Information</li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-base font-medium">Support</li>
            <li>
              <a href="">24/7 Customer Support</a>
            </li>
            <li>
              <a href="">Chat Support</a>
            </li>
            <li>
              <a href="">Email Support</a>
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
