import AboutImg1 from "/about first pic.svg";
import ABoutImg2 from "/about 2.svg";
import ABoutImg3 from "/about 3.svg";

export default function AboutCards() {
  return (
    <div className="card-div mt-10  ~mx-0/5 flex flex-col gap-20">
      <div className="cust-abt-cards">
        <img src={AboutImg1} alt="team working" className="h-max lg:h-full" />
        <div className="text-center flex flex-col gap-5 lg:max-w-[50%] lg:text-left lg:max-h-[50%]">
          <h2 className="~text-2xl/3xl font-semibold">Our Mission</h2>
          <p className="text-base leading-[24px] lg:text-xl">
            At Nexus Botix, we believe in empowering businesses of all sizes
            with accessible AI-driven solutions. Our mission is to transform
            customer engagement through intuitive and customizable chatbots and
            virtual agents that provide seamless support, drive sales, and
            enhance user experiences across all digital touchpoints.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full lg:flex-row lg:justify-between lg:items-center lg:h-[400px]">
        <img src={ABoutImg2} alt="chart image" className="h-max lg:h-full" />
        <div className="text-center flex flex-col gap-5 lg:max-w-[50%] lg:text-left lg:max-h-[50%] lg:gap-5">
          <h2 className="~text-2xl/3xl font-semibold">Our Values</h2>

          <div>
            <h3 className="text-base lg:font-semibold lg:text-xl">
              <span className="inline lg:hidden">1:</span> Innovation
            </h3>
            <p className="text-sm lg:text-xl">
              We continuously evolve to provide state-of-the-art AI tools.
            </p>
          </div>

          <div>
            <h3 className="text-base lg:font-semibold lg:text-xl">
              <span className="inline lg:hidden">2:</span> Accessibility
            </h3>
            <p className="text-sm lg:text-xl">
              {" "}
              Our platform is designed for everyone, from small startups to
              large enterprises.
            </p>
          </div>

          <div>
            <h3 className="text-base lg:font-semibold lg:text-xl">
              <span className="inline lg:hidden">3:</span> Customer-Centricity
            </h3>
            <p className="text-sm lg:text-xl">
              Our goal is to help you deliver exceptional customer experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center cust-abt-cards">
        <img src={ABoutImg3} alt="opened book" className="h-max lg:h-full" />
        <div className="flex flex-col gap-5 lg:max-w-[50%] lg:text-left lg:max-h-[50%]">
          <h2 className="~text-2xl/3xl font-semibold">Our Story</h2>
          <p className="text-base leading-[24px] lg:text-xl">
            Founded in 2024, Nexus Botix emerged from a passion for bridging the
            gap between businesses and their customers. Starting as a small tech
            solution, we've grown into a powerful platform helping brands across
            industries to connect with their audience on a deeper, more
            personalized level.
          </p>
        </div>
      </div>
    </div>
  );
};
