import Header from "../components/Header";

export default function PrivacyPolicy() {
  return (
    <div className="~px-0/56">
      <Header />
      <div className="px-5">
        <div className="flex justify-center items-center flex-col text-center ~gap-5/3 ~my-7/20 border-b ~pb-10/20 border-dashed border-gray-700">
          <h1 className="~text-4xl/5xl font-semibold">Privacy Policy</h1>
          <p className="~text-base/lg">
            Learn how we collect, use, and protect your personal information in
            our privacy policy.
          </p>
        </div>
        <div>
            <p className="italic">Last Updated: 2 December 2024</p>
            <p className="font-semibold text-xl">Privacy Policy Introduction</p>
        </div>
      </div>
    </div>
  );
}
