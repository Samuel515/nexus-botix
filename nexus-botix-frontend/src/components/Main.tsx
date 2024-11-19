import FeaturesCard from "./FeaturesCard";
import MainIntro from "./MainIntro";
import MainMarquee from "./MainMarquee";
import ReviewsCard from "./ReviewsCard";
import Sections from "./Sections";
import whatsappIcon from "/whatsapp-icon.svg";
import facebookIcon from "/facebook-icon.svg";
import instagramIcon from "/instagram-icon.svg";
import CallForAction from "./CallForAction";
import Footer from "./Footer";

export default function Main() {
  return (
    <main className="bg-main-bg bg-no-repeat bg-top pt-60 -mt-24 pb-10 bg-auto">
      <MainIntro />
      <MainMarquee />
      <FeaturesCard />
      <Sections />
      <ReviewsCard />
      <div className="flex justify-center items-center my-24 flex-col gap-7">
        <h1 className="text-[2.5rem] font-bold">Quick And Easy Integrations</h1>
        <p className="text-lg font-medium">
          Simply Integrate Nexus Botix across your favourite apps in just one
          click
        </p>
        <div className="flex gap-20 mt-7">
          <a href="">
            <div className="bg-whatsapp-green h-20 w-20 rounded-full flex justify-center items-center hover:bg-green-950 transition-colors ease-in-out delay-75">
              <img src={whatsappIcon} alt="whatsapp" />
            </div>
          </a>
          <a href="">
            <div className="bg-facebook-blue h-20 w-20 rounded-full flex justify-center items-center hover:bg-blue-950 transition-colors ease-in-out delay-75">
              <img src={facebookIcon} alt="facebook" />
            </div>
          </a>
          <a href="">
            <div className="bg-instagram-red h-20 w-20 rounded-full flex justify-center items-center hover:bg-red-950 transition-colors ease-in-out delay-75">
              <img src={instagramIcon} alt="instagram" />
            </div>
          </a>
        </div>
      </div>
      <CallForAction/>
      <Footer/>
    </main>
  );
}
