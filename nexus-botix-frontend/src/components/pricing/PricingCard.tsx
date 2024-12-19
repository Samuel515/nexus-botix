import GetStarted from "../buttons/GetStarted";
import { FaCheck } from "react-icons/fa6";

export default function PricingCards() {
  // Array of pricing plan data
  const pricingPlans = [
    {
      title: "Free",
      price: "$0",
      description:
        "Ideal for small businesses and startups trying out AI chatbots.",
      features: [
        "Up to 2 AI agents",
        "Multi-platform integration (Web, Social)",
        "Basic analytics",
        "Access to core templates",
        "Community support",
      ],
    },
    {
      title: "Professional Plan",
      price: "$49",
      description:
        "Ideal for small businesses and startups trying out AI chatbots.",
      features: [
        "Up to 5 AI agents",
        "Multi-platform integration (Web, Social, CRM)",
        "Advanced analytics and reporting",
        "Customizable chat flows",
        "Priority email support",
      ],
    },
    {
      title: "Business Plan",
      price: "$149",
      description:
        "Ideal for small businesses and startups trying out AI chatbots.",
      features: [
        "Up to 10 AI agents",
        "Full multi-channel support (Web, Social, CRM, Apps)",
        "Detailed insights and analytics",
        "Custom branding",
        "Dedicated account manager",
        "Priority chat and email support",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "$449",
      description:
        "Ideal for small businesses and startups trying out AI chatbots.",
      features: [
        "Unlimited AI agents",
        "Omnichannel support (Web, Social, CRM, Apps, Voice)",
        "Advanced customizations",
        "White-label options",
        "Dedicated account and success manager",
        "24/7 priority support",
      ],
    },
  ];

  return (
    <div className="~px-3/10 ~mt-8/16">
      <div className="flex flex-col justify-center items-center ~gap-5/10">
        <h1 className="~text-3xl/6xl text-center font-bold leading-snug">
          Find the right plan for your{" "}
          <span className="hidden lg:inline">
            {" "}
            <br />{" "}
          </span>{" "}
          business
        </h1>
        <p className="font-normal lg:font-semibold ~text-lg/2xl">
          Choose a plan that fits your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-2xl px-5 py-14 grid gap-10"
          >
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-3xl">{plan.title}</h1>
              <p className="text-lg">{plan.description}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-5xl font-semibold">{plan.price}</p>
              <p className="text-lg">/month</p>
            </div>
            <ul className="flex flex-col gap-3 mb-5">
              <li>This plan includes:</li>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex gap-2 items-center">
                  <FaCheck />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <div className="grid max-h-max">
              <GetStarted className="bg-custom-yellow w-full max-h-min">Get Started</GetStarted>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
