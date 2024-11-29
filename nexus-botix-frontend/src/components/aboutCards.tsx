import AboutImg1 from '/about first pic.svg'
import ABoutImg2 from '/about 2.svg'
import ABoutImg3 from '/about 3.svg'



const Aboutcard = () => {
    return ( 
        <div className="card-div">
            <div className="card-one test">
                <img  src={AboutImg1} alt="" />
                <div className="text-test">
                    <h2>Our Mission</h2>

                    <p>At Nexus Botix, we believe in empowering businesses of all sizes with accessible AI-driven solutions. Our mission is to transform customer engagement through intuitive and customizable chatbots and virtual agents that provide seamless support, drive sales, and enhance user experiences across all digital touchpoints.</p>
                </div>
            </div>


            <div className="card-one normal ">
                <img src={ABoutImg2} alt="" />
                
                <div className="text-testone">
                    <h2>Our Values</h2>

                    <h3>Innovation</h3>

                    <p>We continuously evolve to provide state-of-the-art AI tools.</p>

                    <h3>Accessibility</h3>
                    <p> Our platform is designed for everyone, from small startups to large enterprises.</p>

                    <h3>Customer-Centricity</h3>
                    <p>Our goal is to help you deliver exceptional customer experiences.</p>

                </div>
                
            </div>

            <div className="card-one test">
                <img src={ABoutImg3} alt="" />
                <div className="text-test">
                    <h2>Our Story</h2>

                    <p>Founded in [Year], Nexus Botix emerged from a passion for bridging the gap between businesses and their customers. Starting as a small tech solution, we've grown into a powerful platform helping brands across industries to connect with their audience on a deeper, more personalized level.</p>
                </div>
            </div>


        </div>

     );
}
 
export default Aboutcard;