import Robotimg from '/rebot.svg'
import arrowUp from "/arrow-up-right.svg";

const AboutIntro  = () => {
    return (  

        <div className="intro">
           <div className="img-div">
            <img src= {Robotimg} alt="" />
           </div>

        <div className="text-div">
            <h2>ABOUT NEXUS BOTIX</h2>
            <h1>Transforming Engagement with Intelligent AI Solutions</h1>
            <p>At Nexus Botix, we’re driven by a commitment to empower businesses with advanced, accessible AI technology. Our customizable chatbots and virtual agents connect brands with customers in meaningful ways, enhancing support, boosting sales, and delivering seamless digital experiences across all platforms. Discover our journey, values, and the people behind our innovative platform.</p>
            
        <div className="btn-div">
            <button>Get Started For Free</button>
            <a
            href=""
            className='btn-contact'
          >
            Contact Sale
            <img src={arrowUp} alt="arrow"  />
          </a>


        </div>

        </div>

        </div>
    );
}
 
export default AboutIntro ;