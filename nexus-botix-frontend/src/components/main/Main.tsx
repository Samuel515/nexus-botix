import FeaturesCard from "./FeaturesCard";
import MainIntro from "./MainIntro";
import MainMarquee from "./MainMarquee";
import ReviewsCard from "./ReviewsCard";
import Sections from "./Sections";
import CallForAction from "../callForAction/CallForAction";
import Footer from "../footer/Footer";
import SocialSection from "./SocialSection";

export default function Main() {
  return (
    <main className="bg-r-main-bg sm:bg-main-bg bg-no-repeat bg-top ~pt-36/60 ~-mt-20/28 bg-contain sm:bg-auto">
      <div className="~px-5/0">
        <MainIntro />
        <MainMarquee />
        <FeaturesCard />
        <Sections />
        <ReviewsCard />
        <SocialSection />
        <CallForAction />
      </div>
      <Footer />
    </main>
  );
}
