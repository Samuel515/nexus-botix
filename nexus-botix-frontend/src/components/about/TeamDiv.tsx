import frameOne from "/about/Frame-i.svg";
import frametwo from "/about/Frame-ii.svg";
import framethree from "/about/Frame-iii.svg";
import framefour from "/about/Frame-iv.svg";
import framefive from "/about/Frame-v.svg";

const TeamDiv = () => {
  return (
    <>
      {" "}
      <div className="team-layer">
        <div className="team-layer__inner">
          <div className="team-layer__content">
            <h1>Meet the Team</h1>
            <p>
              Our team is a diverse group of tech enthusiasts, designers, and
              customer service experts united by a shared goal: empowering
              businesses through AI
            </p>
          </div>
          <div className="team-layer-imgs">
            <img src={frameOne} alt="team member" />
            <img src={frametwo} alt="team member" />
            <img src={framethree} alt="team member" />
            <img src={framefour} alt="team member" />
            <img src={framefive} alt="team member" />
          </div>
        </div>
        <div className="btn-div btn-two">
          <button>Get Started For Free</button>
        </div>
      </div>
    </>
  );
};

export default TeamDiv;
