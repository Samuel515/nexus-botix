import star from "/star.svg";
import blockchain from "/blockchain.svg";
import brain from "/brain.svg";
import analytics from "/analytics.svg";
import GetStarted from "./GetStarted";

export default function FearturesCard() {
  return (
    <div className="w-full py-20 rounded-3xl mainfeature-bg mb-16">
      <div className="flex flex-col gap-20 justify-center items-center">
        <div className="flex justify-center items-center flex-col text-center gap-6">
          <h3 className="text-5xl font-semibold">
            Your Virtual Sales Assistant, Redefined
          </h3>
          <p className="text-xl">
            Nexus Botix is designed to make AI simple, effective, and fully
            customizable <br /> for your unique business needs
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="grid gap-3">
            <img src={star} alt="magic star" />
            <h4 className="text-2xl font-semibold">Effortless Bot Creation</h4>
            <p>
              Our drag-and-drop interface makes it <br /> easy to create and
              launch your bo <br />t within minutes, no coding needed.
            </p>
          </div>
          <div className="grid gap-3">
            <img src={brain} alt="magic star" />
            <h4 className="text-2xl font-semibold">Intelligent Responses</h4>
            <p>
              Leverage advanced AI to provide <br /> relevant, human-like
              responses that keep <br /> your customers engaged.
            </p>
          </div>
          <div className="grid gap-3">
            <img src={blockchain} alt="magic star" />
            <h4 className="text-2xl font-semibold">Seamless Integrations</h4>
            <p>
              Easily integrate with platforms like <br /> Facebook, Slack, and
              WhatsApp to meet <br /> your customers where they are.
            </p>
          </div>
          <div className="grid gap-3">
            <img src={analytics} alt="magic star" />
            <h4 className="text-2xl font-semibold">In-Depth Analytics</h4>
            <p>
              Track bot performance with detailed <br /> analytics to optimize
              engagement and <br /> conversions over time.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <GetStarted className="bg-custom-gray" />
        </div>
      </div>
    </div>
  );
}
