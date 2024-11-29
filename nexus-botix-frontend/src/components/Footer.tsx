import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import logo from "/logo.svg"

const footerSections = [
  {
    title: "Main Section",
    links: [
      { text: "Find Work", to: "" },
      { text: "Integrations", to: "" },
      { text: "How it Works", to: "" },
      { text: "Pricing", to: "/nexus-botix/pricing" },
      { text: "Explore Jobs", to: "" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", to: "" },
      { text: "Help Center", to: "" },
      { text: "Frequently Asked Questions (FAQs)", to: "" },
      { text: "Case Studies", to: "" },
      { text: "Community", to: "" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", to: "" },
      { text: "Terms of Service", to: "" },
      { text: "Cookie policy", to: "" },
    ],
  },
  {
    title: "Company Information",
    links: [
      { text: "About Us", to: "/nexus-botix/about" },
      { text: "Careers", to: "" },
      { text: "Contact Us", to: "" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "24/7 Customer Support", to: "" },
      { text: "Chat Support", to: "" },
      { text: "Email Support", to: "" },
    ],
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    to: "",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    to: "",
    label: "Facebook",
  },
  {
    icon: Instagram,
    to: "",
    label: "Instagram",
  },
  {
    icon: FaXTwitter,
    to: "",
    label: "X (Twitter)",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-20 px-2 mb-10">
      {/* Logo Section */}
      <div className="mb-10 w-full">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-10 w-full">
          <img src={logo} alt="logo" className="h-8 w-6" />
          <h1 className="text-xl font-bold">NEXUS BOTIX</h1>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
          {footerSections.map((section) => (
            <ul
              key={section.title}
              className="flex flex-col gap-2 items-center lg:items-start"
            >
              <li className="text-base font-bold">{section.title}</li>
              {section.links.map((link) => (
                <li key={link.text}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <hr />

      {/* Social Links and Copyright */}
      <div className="mt-10">
        <div className="flex justify-between items-center flex-col-reverse gap-7 lg:flex-row">
          <p>Nexus Botix International Ltd {currentYear}</p>
          <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
            <p>Follow Us</p>
            <div className="flex gap-5">
              {socialLinks.map(({ icon: Icon, to, label }) => (
                <Link
                  key={label}
                  to={to}
                  className="border rounded-full p-2 flex justify-center items-center h-10 w-10"
                  aria-label={label}
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}