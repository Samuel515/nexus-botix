import Robotimg from "/rebot.svg";
import arrowUp from "/arrow-up-right.svg";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <div className="intro">
      <div className="img-div">
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="star star6"></div>
        <div className="star star7"></div>
        <img src={Robotimg} alt="" />
      </div>

      <div className="text-div">
        <h2 className="move">ABOUT NEXUS BOTIX</h2>
        <h1>Transforming Engagement with Intelligent AI Solutions</h1>
        <p>
          At Nexus Botix, we’re driven by a commitment to empower businesses
          with advanced, accessible AI technology. Our customizable chatbots and
          virtual agents connect brands with customers in meaningful ways,
          enhancing support, boosting sales, and delivering seamless digital
          experiences across all platforms. Discover our journey, values, and
          the people behind our innovative platform.
        </p>
        <div />

        <div className="btn-div">
          <Link to="/nexus-botix/about" className="btn-div-link">Get Started For Free</Link>

          <a href="/nexus-botix/pricing" className="btn-contact">
            Contact Sale
            <img src={arrowUp} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
