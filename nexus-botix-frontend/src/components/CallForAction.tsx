import GetStarted from "./GetStarted";
import arrowUp from "/arrow-up-right-black.svg";
import bgCfa from "/bg-cfa.svg";
import bgCfaII from "/bg-cfa-ii.svg";
import { Link } from "react-router-dom";

export default function CallForAction() {
  return (
    <div className="relative overflow-hidden flex justify-center items-center flex-col gap-10 bg-custom-white-bg text-black py-12 px-6 rounded-3xl h-[450px] lg:h-max">
      <h2 className="~text-xl/4xl text-center font-semibold lg:font-bold leading-relaxed z-10">
        Join 300,000+ businesses accelerating their growth with Nexus Botix{" "}
      </h2>
      <div className="flex justify-center items-center gap-10 flex-col lg:flex-row w-3/4 lg:w-auto z-10">
        <GetStarted className="bg-custom-yellow text-white min-h-14 min-w-max" />
        <Link
          to="/nexus-botix/pricing"
          className="flex justify-center items-center gap-2 border border-black rounded-md py-3 px-3 font-medium text-lg w-full"
        >
          Contact Sale
          <img src={arrowUp} alt="arrow" className="h-7 w-7" />
        </Link>
      </div>
      <img
        src={bgCfa}
        alt="background"
        className="absolute lg:right-0 -right-[26%] top-0 lg:top-auto"
      />
      <img
        src={bgCfaII}
        alt="background"
        className="absolute lg:left-0 -left-[26%] bottom-0 lg:bottom-auto"
      />
    </div>
  );
}
