import { useState } from "react";
import GetStarted from "../buttons/GetStarted";
import arrowUp from "/arrow/arrow-up-right.svg";
import chatImage from "/home-chat-img/chat-img.png";
import ContactForm from "../pop-up-form/ContactForm";

export default function MainIntro() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col gap-9">
      <h1 className="text-center ~text-3xl/6xl font-medium">
        Power Conversations That Drive Results with&nbsp; <br />
        <span className="text-custom-yellow">Nexus Botix</span>
      </h1>
      <p className="text-center text-lg">
        Effortlessly create AI-driven chatbots that connect with users on any
        platform, for <br /> any industry, all with no coding required
      </p>
      <div className="flex justify-center items-center gap-5 lg:gap-10 flex-col lg:flex-row w-full px-1">
        <GetStarted className="bg-custom-yellow" />
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex justify-center items-center gap-2 border border-white rounded-xl lg:rounded p-4 lg:p-2 font-medium text-lg w-full lg:w-auto hover:underline"
        >
          Contact Sales
          <img src={arrowUp} alt="arrow" className="w-5 h-5" />
        </button>
      </div>
      <div className="relative mt-8 mb-14 px-5">
        <img src={chatImage} alt="image" />
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
