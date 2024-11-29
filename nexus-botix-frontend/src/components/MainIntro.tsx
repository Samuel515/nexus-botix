import GetStarted from "./GetStarted";
import arrowUp from "/arrow-up-right.svg";
import chatImage from "/chat-img.png";
import { Link } from "react-router-dom";

export default function MainIntro() {
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
        <Link
          to="/nexus-botix-frontend/pricing"
          className="flex justify-center items-center gap-2 border border-white  rounded-xl lg:rounded p-4 lg:p-2 font-medium text-[0.4rem] w-full lg:w-auto text-lg"
        >
          Contact Sale
          <img src={arrowUp} alt="arrow" className="h-7 w-7" />
        </Link>
      </div>
      <div className="relative mt-8 mb-14 px-5">
        <img src={chatImage} alt="image" />
      </div>
    </div>
  );
}
