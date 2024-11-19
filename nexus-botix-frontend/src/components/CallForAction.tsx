import GetStarted from "./GetStarted";
import arrowUp from "/arrow-up-right-black.svg";

export default function CallForAction() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 bg-custom-white-bg text-black py-14 rounded-3xl">
      <h2 className="text-4xl text-center font-bold leading-relaxed">
        Join 300,000+ businesses accelerating <br /> their growth with Nexus
        Botix{" "}
      </h2>
      <div className="flex justify-center items-center gap-10">
        <GetStarted className="bg-custom-yellow text-white" />
        <a
          href=""
          className="flex justify-center items-center gap-2 rounded-md border border-black sm:rounded-md ~p-1/2 px-3 font-medium text-[0.4rem] sm:text-xs md:text-md lg:text-lg"
        >
          Contact Sale
          <img src={arrowUp} alt="arrow" className="~h-2/7 ~w-2/7" />
        </a>
      </div>
    </div>
  );
}
