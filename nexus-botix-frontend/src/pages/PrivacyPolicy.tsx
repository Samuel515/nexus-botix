import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPolicy() {
  // Data for sections that can be mapped
  const personalInformationTypes = [
    {
      title: "Personal Information",
      items: [
        "Name, email address, phone number, and other contact details.",
        "Account credentials, including username and password.",
      ],
    },
    {
      title: "Non-Personal Information",
      items: [
        "Browser type, operating system, IP address, device identifiers, and usage data.",
        "Analytics data such as user activity, features accessed, and duration of use.",
      ],
    },
    {
      title: "Information You Provide",
      items: [
        "Data you upload, submit, or input into our Services (e.g., chatbot content, user queries).",
        "Feedback, survey responses, and other communications you share with us.",
      ],
    },
    {
      title: "Third-Party Information",
      items: [
        "Information obtained from third-party integrations, APIs, or services that you connect to our platform.",
        "Publicly available information from social media or other sources.",
      ],
    },
  ];

  const usageOfInformation = [
    {
      title: "To Provide Services",
      items: [
        "To create and manage your account.",
        "To process payments and subscriptions",
        "To deliver personalized experiences and recommendations.",
      ],
    },
    {
      title: "For Communication",
      items: [
        "To send account-related notifications, updates, and alerts.",
        "To respond to inquiries, support requests, or feedback.",
      ],
    },
    {
      title: "For Improvement and Analytics",
      items: [
        "To analyze usage patterns and improve our Services",
        "To conduct research, develop new features, and enhance user experience.",
      ],
    },
    {
      title: "For Security and Compliance",
      items: [
        "To monitor and prevent fraudulent, unauthorized, or illegal activities.",
        "To comply with legal obligations and enforce our Terms of Service.",
      ],
    },
    {
      title: "For Marketing and Advertising",
      items: [
        "To send promotional content, special offers, and relevant updates (with your consent, where required).",
        "To display targeted ads based on your preferences and behavior.",
      ],
    },
  ];

  const sharingInformation = [
    {
      title: "With Service Providers",
      description:
        "Third-party vendors, contractors, and partners who assist in delivering our Services (e.g., payment processors, hosting providers).",
    },
    {
      title: "For Legal Purposes",
      description:
        "To comply with legal obligations, respond to legal requests, or protect our rights and interests.",
    },
    {
      title: "With Your Consent",
      description:
        "When you authorize us to share your data with third parties for specific purposes.",
    },
    {
      title: "Aggregated or De-Identified Data",
      description:
        "We may share aggregated, anonymized, or de-identified data that cannot be used to identify you.",
    },
  ];

  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "Required for basic functionality.",
    },
    {
      title: "Performance Cookies",
      description: "Used to analyze usage and improve performance.",
    },
    {
      title: "Marketing Cookies",
      description: "Used to deliver personalized ads.",
    },
  ];

  const userRights = [
    {
      title: "Access and Portability",
      description:
        "Request access to your personal data and receive a copy in a structured format.",
    },
    {
      title: "Correction",
      description:
        "Request that we update or correct inaccuracies in your personal data.",
    },
    {
      title: "Deletion",
      description:
        "Request deletion of your personal data, subject to legal or contractual obligations.",
    },
    {
      title: "Restriction or Objection",
      description:
        "Restrict or object to the processing of your personal data in certain circumstances.",
    },
    {
      title: "Withdraw Consent",
      description:
        "Withdraw your consent for data processing at any time, where applicable.",
    },
  ];

  const regionalProvisions = [
    {
      title: "European Union (EU) - GDPR",
      description:
        "If you are in the EU, you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with a supervisory authority.",
    },
    {
      title: "California Residents - CCPA",
      description:
        "California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to opt out of the sale of personal data.",
    },
    {
      title: "Other Jurisdictions",
      description:
        "Local laws may grant additional rights or impose additional obligations.",
    },
  ];

  return (
    <div className="~px-0/56">
      <Header />
      <div className="px-5 flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col text-center ~gap-5/3 ~mt-7/20 border-b ~pb-10/20 border-dashed border-gray-700">
          <h1 className="~text-4xl/5xl font-semibold">Privacy Policy</h1>
          <p className="~text-base/lg">
            Learn how we collect, use, and protect your personal information in
            our privacy policy.
          </p>
        </div>
        <div>
          <p className="font-semibold ~text-xl/2xl">Privacy Policy</p>
          <p className="italic">Last Updated: 2 December 2024</p>
        </div>

        {/* Introductory Paragraph */}
        <div className="flex flex-col gap-5">
          <p>
            Nexus Botix ("Company," "we," "us," or "our") respects your privacy
            and is committed to protecting your personal data. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            information when you use our services, applications, websites, and
            products ("Services"). By using our Services, you agree to the
            practices described in this Privacy Policy.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            1. Information We Collect
          </h2>
          <p>
            We collect information to provide and improve our Services, to
            operate effectively, and to comply with legal obligations. <br />{" "}
            The types of information we collect include:
          </p>
          <div className="gap-8 flex flex-col">
            {personalInformationTypes.map((type, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`1.${index + 1} ${
                  type.title
                }`}</h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 2. How We Use Your Information */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            2. How We Use Your Information
          </h2>
          <p>We use your information for various purposes, including:</p>
          <div className="gap-8 flex flex-col">
            {usageOfInformation.map((usage, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`2.${index + 1} ${
                  usage.title
                }`}</h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  {usage.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Sharing Your Information */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            3. Sharing Your Information
          </h2>
          <p>
            We do not sell or rent your personal data. However, we may share
            your information in the following ways:
          </p>
          <div className="gap-8 flex flex-col">
            {sharingInformation.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`3.${index + 1} ${
                  item.title
                }`}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Cookies and Tracking Technologies */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            4. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies, web beacons, and similar technologies to collect
            information about your interactions with our Services.
          </p>
          <div className="gap-8 flex flex-col">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">4.1 Types of Cookies</h3>
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <span className="font-semibold">{`• ${cookie.title}:`}</span>
                  <p>{cookie.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold">4.2 Managing Cookies</h3>
              <p>
                You can adjust your cookie preferences through your browser
                settings. Disabling cookies may affect the functionality of our
                Services.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Data Retention */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">5. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary to fulfill
            the purposes outlined in this policy or as required by law.
          </p>
        </div>

        {/* 6. Your Rights */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">6. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <div className="gap-8 flex flex-col">
            {userRights.map((right, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`6.${index + 1} ${
                  right.title
                }`}</h3>
                <p>{right.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">
            To exercise these rights, please contact us at hello@nexusbotix.com.
          </p>
        </div>

        {/* 7. Data Security */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">7. Data Security</h2>
          <p>
            We implement technical, administrative, and physical security
            measures to protect your personal data from unauthorized access,
            loss, or misuse. However, no system can guarantee absolute security.
          </p>
        </div>

        {/* 8. International Data Transfers */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            8. International Data Transfers
          </h2>
          <p>
            As a global service, your data may be transferred and stored in
            countries outside your own, which may have different data protection
            laws. By using our Services, you consent to such transfers.
          </p>
        </div>

        {/* 9. Children's Privacy */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">9. Children's Privacy</h2>
          <p>
            Our Services are not intended for children under the age of 13 (or
            the age of majority in your jurisdiction). We do not knowingly
            collect personal data from children.
          </p>
        </div>

        {/* 10. Third-Party Links */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">10. Third-Party Links</h2>
          <p>
            Our Services may include links to third-party websites or services.
            We are not responsible for the privacy practices of these third
            parties.
          </p>
        </div>

        {/* 11. Changes to This Policy */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            11. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy to reflect changes in our
            practices or applicable laws. We will notify you of significant
            changes through our Services or by other means.
          </p>
        </div>

        {/* 12. Additional Provisions for Specific Regions */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
          <h2 className="font-semibold ~text-xl/2xl">
            12. Additional Provisions for Specific Regions
          </h2>
          <div className="gap-8 flex flex-col">
            {regionalProvisions.map((provision, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{`12.${index + 1} ${
                  provision.title
                }`}</h3>
                <p>{provision.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 13. Contact Us */}
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10 pb-5 border-b">
          <h2 className="font-semibold ~text-xl/2xl">13. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us:
          </p>
          <p>Email: <a href="mailto:hello@nexusbotix.com">hello@nexusbotix.com</a></p>
          <p className="border-t border-dashed border-gray-700 py-10">
            By using our Services, you acknowledge that you have read and
            understood this Privacy Policy. Thank you for trusting Nexus Botix
            with your data.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
