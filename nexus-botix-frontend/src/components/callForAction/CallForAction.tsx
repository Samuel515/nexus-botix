import { useState } from "react";
import GetStarted from "../buttons/GetStarted";
import arrowUp from "/arrow/arrow-up-right-black.svg";
import bgCfa from "/call-for-action/bg-cfa.svg";
import bgCfaII from "/call-for-action/bg-cfa-ii.svg";
import ContactForm from "../pop-up-form/ContactForm";

export default function CallForAction() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative overflow-hidden flex justify-center items-center flex-col gap-10 bg-custom-white-bg text-black py-12 px-6 rounded-3xl h-[450px] lg:h-[300px]">
      <h2 className="~text-xl/4xl text-center font-semibold lg:font-bold leading-relaxed z-10">
        Join 300,000+ businesses accelerating their growth with Nexus Botix{" "}
      </h2>
      <div className="flex justify-center items-center ~gap-7/10 flex-col lg:flex-row w-3/4 lg:w-auto z-10">
        <GetStarted className="bg-custom-yellow text-white min-h-14 min-w-max" />
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex justify-center items-center gap-2 border border-black rounded-xl lg:rounded px-3 py-3  font-medium text-lg w-full lg:w-auto hover:underline"
        >
          Contact Sales
          <img src={arrowUp} alt="arrow" className="w-5 h-5" />
        </button>
      </div>
      <img
        src={bgCfa}
        alt="background"
        className="absolute lg:right-0 -right-[28%] top-0 lg:top-auto"
      />
      <img
        src={bgCfaII}
        alt="background"
        className="absolute lg:left-0 -left-[27%] bottom-0 lg:bottom-auto"
      />
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
