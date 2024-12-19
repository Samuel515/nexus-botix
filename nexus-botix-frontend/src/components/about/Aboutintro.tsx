import { useState } from "react";
import Robotimg from "/about/robot.svg";
import arrowUp from "/arrow/arrow-up-right.svg";
import { Link } from "react-router-dom";
import ContactForm from "../pop-up-form/ContactForm";

const AboutIntro = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="intro">
      <div className="img-div">
        <img src={Robotimg} alt="robot image" />
      </div>

      <div className="text-div">
        <h2 className="text-lg font-normal lg:font-semibold w-full flex justify-center items-center lg:items-start lg:justify-start">
          ABOUT NEXUS BOTIX
        </h2>
        <h1 className="cust-lh">
          Transforming Engagement with Intelligent AI Solutions
        </h1>
        <p className="text-lg text-center lg:text-left">
          At Nexus Botix, we’re driven by a commitment to empower businesses
          with advanced, accessible AI technology. Our customizable chatbots and
          virtual agents connect brands with customers in meaningful ways,
          enhancing support, boosting sales, and delivering seamless digital
          experiences across all platforms. Discover our journey, values, and
          the people behind our innovative platform.
        </p>
        <div />

        <div className="btn-div">
          <Link to="/nexus-botix/signup" className="btn-div-link min-w-max">
            Get Started For Free
          </Link>

          <button
            onClick={() => setIsFormOpen(true)}
            className="flex justify-center items-center gap-2 border border-white rounded-xl lg:rounded px-3 py-2.5 font-medium text-lg w-full lg:w-auto hover:underline"
          >
            Contact Sales
            <img src={arrowUp} alt="arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default AboutIntro;
