import GetStarted from "./GetStarted";
import arrowUp from "/arrow-up-right.svg";
import firstChatImage from "/chat-img.jpg";
import secondChatImage from "/chat-imgi.png";

export default function MainIntro(){
    return(
        <div className="flex justify-center items-center flex-col gap-9">
        <h1 className="text-center ~text-3xl/6xl font-medium">
          Power Conversations That Drive <br /> Results with&nbsp;
          <span className="text-yellow">Nexus Botix</span>
        </h1>
        <p className="text-center text-lg">
          Effortlessly create AI-driven chatbots that connect with users on any
          platform, for <br /> any industry, all with no coding required
        </p>
        <div className="flex justify-center items-center gap-10">
          <GetStarted className="bg-custom-yellow" />
          <a
            href=""
            className="flex justify-center items-center gap-2 rounded-md border border-white sm:rounded-md ~p-1/2 font-medium text-[0.4rem] sm:text-xs md:text-md lg:text-lg"
          >
            Contact Sale
            <img src={arrowUp} alt="arrow" className="~h-2/7 ~w-2/7" />
          </a>
        </div>
        <div className="relative mt-8 mb-64">
          <img
            src={firstChatImage}
            alt="chat image with bot"
            className="rounded-3xl"
          />
          <img
            src={secondChatImage}
            alt="chat image with bot"
            className="absolute top-[38%] -left-[8%]"
          />
        </div>
      </div>
    )
}