import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TermsOfService() {
  // Data for sections that can be mapped
  const acceptanceTerms = [
    {
      title: "Age Requirement",
      description:
        "By accessing or using the Services, you affirm that you are at least 18 years old or the legal age of majority in your jurisdiction.",
    },
    {
      title: "Organizational Use",
      description:
        "If you are using the Services on behalf of an organization, you represent and warrant that you are authorized to bind the organization to these Terms.",
    },
  ];

  const serviceDescription = [
    {
      title: "Service Offerings",
      description:
        "Nexus Botix offers a variety of AI-driven chatbot and automation tools designed for businesses, developers, and individuals to enhance communication, automate workflows, and analyze data.",
    },
    {
      title: "Features and Pricing",
      description:
        "The Services may include free and paid features, APIs, integrations, and third-party plugins. Certain features may require additional agreements, subscriptions, or fees.",
    },
  ];

  const accountRegistration = [
    {
      title: "Account Information",
      description:
        "You may be required to create an account to access certain Services. You agree to provide accurate, complete, and updated information during the registration process.",
    },
    {
      title: "Account Security",
      description:
        "You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for all activities conducted through your account.",
    },
    {
      title: "Security Breach",
      description:
        "Notify us immediately of any unauthorized use or suspected breach of your account.",
    },
  ];

  const prohibitedActivities = [
    "Using the Services to harm, harass, or exploit others.",
    "Distributing malware, spam, or unauthorized advertisements.",
    "Reverse-engineering, decompiling, or attempting to access the source code of any part of the Services.",
    "Misrepresenting your identity or affiliation with any person or organization.",
    "Using the Services in violation of any applicable laws or regulations.",
  ];

  const intellectualProperty = [
    {
      title: "Ownership",
      description:
        "All intellectual property rights in the Services, including but not limited to software, content, designs, and trademarks, are owned by Nexus Botix or its licensors.",
    },
    {
      title: "License",
      description:
        "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable license to use the Services for their intended purpose.",
    },
    {
      title: "Restrictions",
      description:
        "You may not copy, modify, distribute, or create derivative works based on the Services without our prior written consent.",
    },
  ];

  const paymentTerms = [
    {
      title: "Fees",
      description:
        "Certain features of the Services may require payment. All fees are non-refundable unless explicitly stated otherwise.",
    },
    {
      title: "Additional Charges",
      description:
        "You are responsible for any taxes, currency conversion fees, or additional charges associated with your payments.",
    },
    {
      title: "Subscription Renewal",
      description:
        "Subscription-based Services will automatically renew unless canceled before the renewal date. You can manage your subscription settings through your account.",
    },
  ];

  const dataOwnership = [
    {
      title: "Your Data",
      description:
        "You retain ownership of the data you upload or provide through the Services.",
    },
    {
      title: "License Grant",
      description:
        "You grant us a worldwide, royalty-free license to use, process, and display your data solely for the purpose of providing the Services.",
    },
    {
      title: "Compliance",
      description:
        "You are responsible for ensuring that your data complies with all applicable laws, including but not limited to privacy and intellectual property laws.",
    },
  ];

  const thirdPartyIntegrations = [
    {
      title: "Third-Party Services",
      description:
        "Our Services may integrate with third-party tools or services. Your use of these third-party services is governed by their respective terms of service.",
    },
    {
      title: "Liability",
      description:
        "We are not responsible for any issues arising from third-party integrations, including data loss, security breaches, or service interruptions.",
    },
  ];

  const serviceAvailability = [
    {
      title: "Continuous Operation",
      description:
        "While we strive to ensure uninterrupted access to the Services, we cannot guarantee continuous or error-free operation.",
    },
    {
      title: "Service Interruption",
      description:
        "We reserve the right to suspend or terminate the Services for maintenance, updates, or other reasons beyond our control.",
    },
  ];

  const regionalProvisions = [
    {
      title: "European Union (EU)",
      description:
        "Users in the EU are entitled to specific rights under the General Data Protection Regulation (GDPR). Refer to our Privacy Policy for details.",
    },
    {
      title: "United States",
      description:
        "Users in the U.S. are subject to specific state and federal regulations, including but not limited to the California Consumer Privacy Act (CCPA).",
    },
    {
      title: "Other Regions",
      description: "Local laws may apply to your use of the Services.",
    },
  ];

  return (
    <div className="~px-0/56">
      <Header />
      <div className="px-5 flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col text-center ~gap-5/3 ~mt-7/20 border-b ~pb-10/20 border-dashed border-gray-700">
          <h1 className="~text-4xl/5xl font-semibold">Terms of Service</h1>
          <p className="~text-base/lg">
          Explore our comprehensive guidelines and legal agreements governing the use of our website or service.
          </p>
        </div>
        <div>
          <p className="font-semibold ~text-xl/2xl">Terms of Service</p>
          <p className="italic">Last Updated: 2 December 2024</p>
        </div>

        {/* Introduction */}
        <div className="flex flex-col gap-5">
          <p>
            Welcome to Nexus Botix. These Terms of Service ("Terms") govern your
            access to and use of the services, applications, and products
            ("Services") offered by Nexus Botix ("Company," "we," "us," or
            "our"). By using our Services, you agree to comply with and be bound
            by these Terms. If you do not agree to these Terms, you must not use
            our Services.
          </p>
        </div>

        {/* 1. Acceptance of Terms */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">1. Acceptance of Terms</h2>
          <div className="gap-8 flex flex-col">
            {acceptanceTerms.map((term, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`1.${index + 1} ${
                  term.title
                }`}</h3>
                <p>{term.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Changes to the Terms */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            2. Changes to the Terms
          </h2>
          <div className="gap-8 flex flex-col">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">2.1 Modifications</h3>
              <p>
                We reserve the right to modify these Terms at any time. Any
                changes will be effective immediately upon posting the updated
                Terms on our website or notifying users through other
                communication channels.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">2.2 Continued Use</h3>
              <p>
                Your continued use of the Services after such modifications
                constitutes your acceptance of the revised Terms.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Description of Services */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            3. Description of Services
          </h2>
          <div className="gap-8 flex flex-col">
            {serviceDescription.map((service, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`3.${index + 1} ${
                  service.title
                }`}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. User Account Registration */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            4. User Account Registration
          </h2>
          <div className="gap-8 flex flex-col">
            {accountRegistration.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`4.${index + 1} ${
                  item.title
                }`}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Acceptable Use */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">5. Acceptable Use</h2>
          <div className="gap-8 flex flex-col">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                5.1 Prohibited Activities
              </h3>
              <p>
                You agree to use the Services only for lawful purposes and in
                accordance with these Terms. Prohibited activities include, but
                are not limited to:
              </p>
              <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                {prohibitedActivities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">5.2 Account Suspension</h3>
              <p>
                We reserve the right to suspend or terminate your account if we
                determine that you have engaged in prohibited activities.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Intellectual Property */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            6. Intellectual Property
          </h2>
          <div className="gap-8 flex flex-col">
            {intellectualProperty.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`6.${index + 1} ${
                  item.title
                }`}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Payment and Subscription Terms */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            7. Payment and Subscription Terms
          </h2>
          <div className="gap-8 flex flex-col">
            {paymentTerms.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`7.${index + 1} ${
                  item.title
                }`}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Privacy Policy */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">8. Privacy Policy</h2>
          <div className="gap-8 flex flex-col">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                8.1 Privacy Policy Governance
              </h3>
              <p>
                Your use of the Services is also governed by our Privacy Policy,
                which outlines how we collect, use, and protect your personal
                data.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">8.2 Consent</h3>
              <p>
                By using the Services, you consent to the collection and
                processing of your data as described in the Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* 9. Data Ownership and Responsibility */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            9. Data Ownership and Responsibility
          </h2>
          <div className="gap-8 flex flex-col">
            {dataOwnership.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`9.${index + 1} ${
                  item.title
                }`}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 10. Third-Party Integrations */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            10. Third-Party Integrations
          </h2>
          <div className="gap-8 flex flex-col">
            {thirdPartyIntegrations.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`10.${index + 1} ${
                  item.title
                }`}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 11. Service Availability */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            11. Service Availability
          </h2>
          <div className="gap-8 flex flex-col">
            {serviceAvailability.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`11.${index + 1} ${
                  item.title
                }`}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 12. Limitation of Liability */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            12. Limitation of Liability
          </h2>
          <div className="gap-8 flex flex-col">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                12.1 Liability Exclusions
              </h3>
              <p>
                To the fullest extent permitted by law, Nexus Botix shall not be
                liable for any indirect, incidental, consequential, or punitive
                damages arising from your use of the Services.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">12.2 Liability Cap</h3>
              <p>
                Our total liability for any claim related to the Services shall
                not exceed the amount you paid for the Services in the 12 months
                preceding the claim.
              </p>
            </div>
          </div>
        </div>

        {/* 13. Indemnification */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">13. Indemnification</h2>
          <p>
            You agree to indemnify and hold Nexus Botix, its affiliates,
            employees, and agents harmless from any claims, liabilities,
            damages, or expenses arising from your use of the Services, your
            violation of these Terms, or your infringement of any third-party
            rights.
          </p>
        </div>

        {/* 14. Termination */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">14. Termination</h2>
          <div className="gap-8 flex flex-col">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">14.1 Termination Rights</h3>
              <p>
                We may terminate or suspend your access to the Services at our
                sole discretion, with or without notice, for any violation of
                these Terms or other legal reasons.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                14.2 Effect of Termination
              </h3>
              <p>
                Upon termination, your license to use the Services will
                immediately cease.
              </p>
            </div>
          </div>
        </div>

        {/* 15. Governing Law and Dispute Resolution */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            15. Governing Law and Dispute Resolution
          </h2>
          <div className="gap-8 flex flex-col">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">15.1 Governing Law</h3>
              <p>
                These Terms are governed by the laws of [Insert Governing
                Jurisdiction], without regard to conflict of law principles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">15.2 Dispute Resolution</h3>
              <p>
                Any disputes arising from these Terms shall be resolved through
                binding arbitration in accordance with the rules of [Insert
                Arbitration Body].
              </p>
            </div>
          </div>
        </div>

        {/* 16. Export Control */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">16. Export Control</h2>
          <p>
            You agree to comply with all applicable export laws and regulations
            when using the Services.
          </p>
        </div>

        {/* 17. Additional Terms for Specific Regions */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            17. Additional Terms for Specific Regions
          </h2>
          <div className="gap-8 flex flex-col">
            {regionalProvisions.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`17.${index + 1} ${
                  item.title
                }`}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 18. Contact Information */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10 pb-5 border-b">
          <h2 className="font-semibold ~text-xl/2xl">
            18. Contact Information
          </h2>
          <p>
            For any questions or concerns about these Terms, please contact us:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:hello@nexusbotix.com" className="text-custom-yellow">hello@nexusbotix.com</a>
          </p>
          <p className="border-t border-dashed border-gray-700 py-10">
            By using Nexus Botix, you acknowledge that you have read,
            understood, and agreed to these Terms of Service.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
