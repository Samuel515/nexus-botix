import whatsappIcon from "/social-icons/whatsapp-icon.svg";
import facebookIcon from "/social-icons/facebook-icon.svg";
import instagramIcon from "/social-icons/instagram-icon.svg";

export default function SocialSection() {
  return (
    <div className="flex justify-center items-center my-24 flex-col gap-4">
      <h1 className="~text-2xl/5xl font-bold">Quick And Easy Integrations</h1>
      <p className="text-lg font-normal md:font-medium text-center">
        Simply Integrate Nexus Botix across your favourite apps in just one
        click
      </p>
      <div className="flex ~gap-10/20 mt-7 justify-center items-center">
        <a href="">
          <div className="bg-whatsapp-green h-20 w-20 rounded-full flex justify-center items-center hover:bg-green-950 transition-colors ease-in-out delay-75">
            <img src={whatsappIcon} alt="whatsapp" />
          </div>
        </a>
        <a href="">
          <div className="bg-facebook-blue h-20 w-20 rounded-full flex justify-center items-center hover:bg-blue-950 transition-colors ease-in-out delay-75">
            <img src={facebookIcon} alt="facebook" />
          </div>
        </a>
        <a href="">
          <div className="bg-instagram-red h-20 w-20 rounded-full flex justify-center items-center hover:bg-red-950 transition-colors ease-in-out delay-75">
            <img src={instagramIcon} alt="instagram" />
          </div>
        </a>
      </div>
    </div>
  );
}
