import Header from "../components/Header";

export default function PrivacyPolicy() {
  return (
    <div className="~px-0/56 mb-20">
      <Header />
      <div className="px-5 flex flex-col gap-10">
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
        <div className="flex flex-col gap-10 text-lg">
          <p>
            Nexus Botix ("Company," "we," "us," or "our") respects your privacy
            and is committed to protecting your personal data. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            information when you use our services, applications, websites, and
            products ("Services"). By using our Services, you agree to the
            practices described in this Privacy Policy.
          </p>
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
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  1.1 Personal Information
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>
                    Name, email address, phone number, and other contact
                    details.
                  </li>
                  <li>Account credentials, including username and password.</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  1.2 Non-Personal Information
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>
                    Browser type, operating system, IP address, device
                    identifiers, and usage data.
                  </li>
                  <li>
                    Analytics data such as user activity, features accessed, and
                    duration of use.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  1.3 Information You Provide
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>
                    Data you upload, submit, or input into our Services (e.g.,
                    chatbot content, user queries).
                  </li>
                  <li>
                    Feedback, survey responses, and other communications you
                    share with us.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  1.4 Third-Party Information
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>
                    Information obtained from third-party integrations, APIs, or
                    services that you connect to our platform.
                  </li>
                  <li>
                    Publicly available information from social media or other
                    sources.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 border-t border-dashed border-gray-700 pt-10">
            <h2 className="font-semibold ~text-xl/2xl">
              2. How We Use Your Information
            </h2>
            <p>We use your information for various purposes, including:</p>
            <div className="gap-8 flex flex-col">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  2.1 To Provide Services
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>To create and manage your account.</li>
                  <li>To process payments and subscriptions</li>
                  <li>
                    To deliver personalized experiences and recommendations.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  2.2 For Communication
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>
                    To send account-related notifications, updates, and alerts.
                  </li>
                  <li>
                    To respond to inquiries, support requests, or feedback.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  2.3 For Improvement and Analytics
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>To analyze usage patterns and improve our Services</li>
                  <li>
                    To conduct research, develop new features, and enhance user
                    experience.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  2.4 For Security and Compliance
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>
                    To monitor and prevent fraudulent, unauthorized, or illegal
                    activities.
                  </li>
                  <li>
                    To comply with legal obligations and enforce our Terms of
                    Service.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold">
                  2.5 For Marketing and Advertising
                </h3>
                <ul className="list-disc ~ml-7/10 gap-3 flex flex-col">
                  <li>
                    To send promotional content, special offers, and relevant
                    updates (with your consent, where required).
                  </li>
                  <li>
                    To display targeted ads based on your preferences and
                    behavior.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
