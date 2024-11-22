import frameOne from '/Frame 160.svg'
import frametwo from '/Frame 161.svg'
import framethree from '/Frame 162.svg'
import framefour from '/Frame 163.svg'
import framefive from '/Frame 165.svg'


const TeamDiv = () => {
    return ( 

    <>  <div className="team-layer">
            <div className="team-layer__inner">
                <div className="team-layer__content">
                    <h1>Meet the Team</h1>
                    <p>Our team is a diverse group of tech enthusiasts, designers, and customer service experts united by a shared goal: empowering businesses through AI</p>
                </div>
                <div className="team-layer-imgs">
                    <img src={frameOne} alt="" />
                    <img src={frametwo} alt="" />
                    <img src={framethree} alt="" />
                    <img src={framefour} alt="" />
                    <img src={framefive} alt="" />
                </div>
            </div>
            <div className="btn-div  btn-two">
                <button>Get Started For Free</button>

            </div>

        </div>
            
    </> 

     );
}
 
export default TeamDiv;