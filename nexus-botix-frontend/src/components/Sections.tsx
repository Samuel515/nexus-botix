export default function Sections() {
  return (
    <div className="w-full px-40 py-20 rounded-3xl bg-whitebg text-black mb-16">
      <div className="flex flex-col gap-20">
        <div className="flex justify-center items-center flex-col text-center gap-5">
          <h3 className="text-5xl font-semibold">
            Adaptable AI Chatbots for Every Industry
          </h3>
          <p className="text-xl">
            Our technology adapts to a variety of sectors, offering tailored solutions that drive results
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 grid-rows-2 text-left">
          <div className="row-span-2 bg-white px-5 py-8 rounded-xl shadow-sm">
            <h4 className="font-semibold text-2xl pb-7">E-Commerce</h4>
            <p className="font-medium">
              Boost sales and improve support with quick, AI-driven responses to product  inquiries.
            </p>
          </div>
          <div className="bg-black text-white px-5 py-8 rounded-xl">
            <h4 className="font-semibold text-2xl pb-7">Finance</h4>
            <p className="font-medium">
              Help customers navigate their financial questions securely and quickly.
            </p>
          </div>
          <div className="row-span-2 bg-custom-blue px-5 py-8 rounded-xl">
            <h4 className="font-semibold text-2xl pb-7">Healthcare</h4>
            <p className="font-medium">Provide patients with easy access to appointment scheduling and health information.</p>
          </div>
          <div className="bg-light-yellow px-5 py-8 rounded-xl">
            <h4 className="font-semibold text-2xl pb-7">Real Estate</h4>
            <p className="font-medium">Engage leads instantly and answer property-related queries 24/7.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <button className="rounded sm:rounded-md ~p-1/2 text-[0.4rem] sm:text-xs md:text-md lg:text-lg bg-custom-yellow text-white">Explore Industry Solutions</button>
        </div>
      </div>
    </div>
  );
}
