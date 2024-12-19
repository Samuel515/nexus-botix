import { Link } from "react-router-dom";

export default function Sections() {
  return (
    <div className="w-full ~px-5/24 py-20 rounded-3xl bg-whitebg text-black mb-16">
      <div className="flex flex-col gap-20">
        <div className="flex justify-center items-center flex-col text-center gap-5">
          <h3 className="~text-xl/5xl font-semibold">
            Adaptable AI Chatbots for Every Industry
          </h3>
          <p className="~text-lg/xl">
            Our technology adapts to a variety of sectors, offering tailored
            solutions that drive results
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 lg:grid-rows-2 text-left">
          <div className="lg:row-span-2 bg-white px-5 py-8 rounded-xl shadow-sm">
            <h4 className="font-semibold text-2xl pb-7">E-Commerce</h4>
            <p className="font-medium">
              Boost sales and improve support with quick, AI-driven responses to
              product inquiries.
            </p>
          </div>
          <div className="bg-black text-white px-5 py-8 rounded-xl">
            <h4 className="font-semibold text-2xl pb-7">Finance</h4>
            <p className="font-medium">
              Help customers navigate their financial questions securely and
              quickly.
            </p>
          </div>
          <div className="row-span-2 bg-custom-blue px-5 py-8 rounded-xl">
            <h4 className="font-semibold text-2xl pb-7">Healthcare</h4>
            <p className="font-medium">
              Provide patients with easy access to appointment scheduling and
              health information.
            </p>
          </div>
          <div className="bg-light-yellow px-5 py-8 rounded-xl">
            <h4 className="font-semibold text-2xl pb-7">Real Estate</h4>
            <p className="font-medium">
              Engage leads instantly and answer property-related queries 24/7.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <Link
            to="/nexus-botix"
            className="rounded-xl px-2 py-3 text-lg bg-custom-yellow text-white flex justify-center items-center w-full lg:w-auto"
          >
            Explore Industry Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
