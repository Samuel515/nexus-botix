import Header from "../components/Header";
import AboutIntro from "../components/Aboutintro"; 
import Aboutcard from "../components/aboutCards"
import FearturesCard from "../components/FeaturesCard";
import '../style/about.css'

const AboutPage = () => {
    return (  
        <>
        <div className="w-full ~px-0/36">
          <div className="~px-4/16 h-full text-justify">
            <div>
              <Header/>
              <AboutIntro/>
              <Aboutcard/>
              <FearturesCard/>
              
            </div>
          </div>
        </div>
      </>    
      );
}
 
export default AboutPage;