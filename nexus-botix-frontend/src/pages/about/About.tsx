import Header from "../../components/header/Header";
import AboutIntro from "../../components/about/Aboutintro";
import TeamDiv from "../../components/about/TeamDiv";
import FearturesCard from "../../components/main/FeaturesCard";
import ChooseUs from "../../components/choosUs/chooseUs";
import CallForAction from "../../components/callForAction/CallForAction";
import Footer from "../../components/footer/Footer";
import "../../assets/style/about.css";
import AboutCards from "../../components/about/AboutCards";

const AboutPage = () => {
  return (
    <>
      <div className="w-full ~px-0/36">
        <div className="~px-0/16 h-full text-justify">
          <Header />
          <div className="overflow-hidden ~px-4/0">
            <AboutIntro />
            <AboutCards />
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
