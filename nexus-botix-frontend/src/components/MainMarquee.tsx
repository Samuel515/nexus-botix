import notionLogo from "/notion-logo.svg";
import tiktokLogo from "/tiktok-logo.svg";
import dropboxLogo from "/dropbox-logo.svg";

export default function MainMarquee() {
  return (
    <div className="flex justify-center items-center font-semibold flex-col gap-5 mb-32">
      <p>Trusted by Industry Leaders Worldwide</p>
      <div className="animate-gradient bg-gradient-to-bl from-primary-blue via-black to-primary-blue overflow-hidden w-full rounded-full p-[0.1rem] whitespace-nowrap">
        <div className="bg-black rounded-full overflow-hidden">
          <ul className="animate-marquee py-8 rounded-full">
            <li className="flex w-full gap-28 bg-black justify-center items-center ">
              <li>
                <img src={tiktokLogo} alt="tiktok logo" />
              </li>
              <li>
                <img src={dropboxLogo} alt="tiktok logo" />
              </li>
              <li>
                <img src={notionLogo} alt="tiktok logo" />
              </li>
              <li>
                <img src={tiktokLogo} alt="tiktok logo" />
              </li>
              <li>
                <img src={dropboxLogo} alt="tiktok logo" />
              </li>
              <li>
                <img src={notionLogo} alt="tiktok logo" />
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
