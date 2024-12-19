import notionLogo from "/marquee-items/notion-logo.svg";
import tiktokLogo from "/marquee-items/tiktok-logo.svg";
import dropboxLogo from "/marquee-items/dropbox-logo.svg";

export default function MainMarquee() {
  const logos = [
    { src: tiktokLogo, alt: "tiktok logo" },
    { src: dropboxLogo, alt: "dropbox logo" },
    { src: notionLogo, alt: "notion logo" },
  ];

  return (
    <div className="flex justify-center items-center font-semibold flex-col gap-5 mb-32">
      <p className="text-center px-4">Trusted by Industry Leaders Worldwide</p>
      <div className="relative w-full overflow-hidden bg-gradient-to-bl from-primary-blue via-black to-primary-blue p-[0.1rem] rounded-full">
        <div className="bg-black rounded-full overflow-hidden">
          <div className="flex whitespace-nowrap ~py-5/8 gap-20">
            {/* First set of logos */}
            <div className="flex animate-marquee gap-16 md:gap-28">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center justify-center w-16 md:w-24 shrink-0">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="w-full h-auto object-contain min-w-[80px]"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex animate-marquee gap-16 md:gap-28" aria-hidden="true">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center justify-center w-16 md:w-24 shrink-0">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="w-full h-auto object-contain min-w-[80px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}