import Header from "../components/Header";
import AboutIntro from "../components/Aboutintro";
import AboutCard from "../components/AboutCards.tsx";
import TeamDiv from "../components/TeamDiv";
import FearturesCard from "../components/FeaturesCard";
import ChooseUs from "../components/chooseUs";
import CallForAction from "../components/CallForAction";
import Footer from "../components/Footer";
import "../style/about.css";

const AboutPage = () => {
  return (
    <>
      <div className="w-full ~px-0/36">
        <div className="~px-0/16 h-full text-justify">
          <Header />
          <div className="overflow-hidden ~px-4/0">
            <AboutIntro />
            <AboutCard />
            <FearturesCard />
            <TeamDiv />
            <ChooseUs />
            <CallForAction />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
