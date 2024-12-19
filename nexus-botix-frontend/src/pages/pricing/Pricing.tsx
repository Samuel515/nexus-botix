import CallForAction from "../../components/callForAction/CallForAction";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PricingCards from "../../components/pricing/PricingCard";

export default function Pricing() {
  return (
    <div className="w-full ~px-0/36 mb-20">
      <div className="~px-2/16">
        <Header />
        <PricingCards />
        <Faq />
        <CallForAction />
        <Footer />
      </div>
    </div>
  );
}
