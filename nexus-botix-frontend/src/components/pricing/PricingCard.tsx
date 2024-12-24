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
        " 150,000 AI Tokens per month",
        "25 Knowledge Base Sources per AI Agent.",
        " collect name and email only.",
        "2 AI Agent",
        "10 Document upload",
        "Basic Tier (email-based)"
      ],
    },
    {
      title: "Starter Plan",
      price: "$15",
      description:
        "Designed for growing businesses that require a more comprehensive AI setup",
      features: [
        "3,000,000 AI Tokens per month.",
        "100 Knowledge Base Sources per AI Agent.",
        "Brand Logo and Color Customization",
        " Collect name, email, and phone number.",
        "10 AI Agents",
        "25 File upload",
        "Chat Support: Priority email support.",
        "Integration with Social Media (WhatsApp)"


      ],
    },
    {
      title: "Professional Plan",
      price: "$100",
      description:
        "Tailored for medium-sized businesses with a significant focus on AI optimization.",
      features: [
        "10,000,000 AI Tokens per month",
        "500 Knowledge Base Sources per AI Agent.",
        "Brand Logo and Color Customization: Full branding control.",
        "Custom branding",
        "Unlimited AI Agent",
        "Dedicated account manager.",
        "Integration with Social Media (Meta: WhatsApp, Instagram, Facebook).",
        "150 File upload",
        "Advanced insights into token usage, customer engagement, and performanc",

      ],
    },
    {
      title: "Enterprise Plan",
      price: "Custom Pricing",
      description:
        "Perfect for large enterprises seeking tailored AI solutions with dedicated support.",
      features: [
        "Unlimited AI Tokens",
        "Unlimited AI ",
        "Unlimited Knowledge Base Sources per AI Agent.",
        " Advanced branding and custom themes.",
        "Fully integrated with CRM tools.",
        "24/7 dedicated team with SLA guarantees.",
        "Integration with Social Media (Meta: WhatsApp, Instagram, Facebook).",
        "For deep integrations.",
        "Enterprise-level reporting and advanced insights.",
        "1-1 Training and onbo",
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
