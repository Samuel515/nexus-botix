import CallForAction from "../components/CallForAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingCards from "../components/PricingCard";

export default function Pricing() {
  return (
    <div className="w-full ~px-0/36 mb-20">
      <div className="~px-0/16">
        <Header />
        <PricingCards/>
        <Faq/>
        <CallForAction/>
        <Footer/>
      </div>
    </div>
  );
}
