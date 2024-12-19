import React from "react";
import { Star } from "lucide-react";
import GetStarted from "../buttons/GetStarted";
import avatarI from "/reviews-avatar/avatar-i.svg";
import avatarII from "/reviews-avatar/avatar-ii.svg";
import avatarIII from "/reviews-avatar/avatar-iii.svg";
import avatarIV from "/reviews-avatar/avatar-iv.png";
import avatarV from "/reviews-avatar/avatar-v.png";
import avatarVI from "/reviews-avatar/avatar-vi.svg";
import avatarVII from "/reviews-avatar/avatar-vii.svg";
import avatarVIII from "/reviews-avatar/avatar-viii.svg";

const ReviewCard = ({
  text,
  name,
  avatar,
}: {
  text: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="flex items-center w-full">
      <div className="py-6 px-5 bg-white text-black flex flex-col w-80 gap-5 rounded-2xl flex-shrink-0">
        <div className="flex">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Star key={index} className="fill-black h-5" />
            ))}
        </div>
        <p className="font-medium ~text-sm/xl">{text}</p>
        <div className="flex ~gap-1/2 items-center">
          <img
            src={avatar}
            alt={`${name} profile`}
            className="rounded-full h-12 w-12"
          />
          <p className="font-semibold ~text-lg/xl">{name}</p>
        </div>
      </div>
    </div>
  );
};

const Marquee = ({
  direction,
  children,
}: {
  direction: "left" | "right";
  children: React.ReactNode;
}) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`marquee-content ${
          direction === "left" ? "scroll-left" : "scroll-right"
        }`}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default function ReviewsCard() {
  const reviewsGroup1 = [
    {
      text: "Romantic getaway we'll never forget! Luxurious train & charming hotels - perfect.",
      name: "Emily",
      avatar: avatarI,
    },
    {
      text: "Always dreamed of seeing the Northern Lights. XPLORE made it possible with flights and local buses. Magical experience!",
      name: "Sarr, Kwame",
      avatar: avatarII,
    },
    {
      text: "Family trip to Italy - a breeze! Train rides, car rentals, all perfectly planned.",
      name: "Munoz, Rita",
      avatar: avatarIII,
    },
    {
      text: "Romantic getaway we'll never forget! Luxurious train & charming hotels - perfect.",
      name: "Holland, Josh",
      avatar: avatarIV,
    },
  ];

  const reviewsGroup2 = [
    {
      text: "Combined flights with a local ferry - explored Greek islands like a pro! Thanks!",
      name: "Washington, Cedric",
      avatar: avatarV,
    },
    {
      text: "Sailed the turquoise waters of Greece, then explored charming villages with a rented car. Unforgettable!",
      name: "Simmons, Mary-Anne",
      avatar: avatarVI,
    },
    {
      text: "Seamless booking, amazing adventure! Reached hidden waterfalls thanks to XPLORE.",
      name: "Wright, Malik",
      avatar: avatarVII,
    },
    {
      text: "The best honeymoon ever! Greek Islands cruise & Swiss Alps train ride - magical!",
      name: "Mitchell, Gabriel",
      avatar: avatarVIII,
    },
  ];

  return (
    <div className="w-full py-16 rounded-3xl border">
      <div className="flex flex-col gap-20">
        <div className="flex justify-center items-center flex-col text-center gap-5">
          <h3 className="~text-2xl/5xl font-semibold">
            What Our Customers Are Saying
          </h3>
          <p className="~text-lg/xl">
            Nexus Botix helps businesses like yours improve customer experiences
            and drive growth
          </p>
        </div>

        <div className="flex gap-10 flex-col">
          <Marquee direction="left">
            {reviewsGroup1.map((review, index) => (
              <ReviewCard
                key={index}
                text={review.text}
                name={review.name}
                avatar={review.avatar}
              />
            ))}
          </Marquee>
          <Marquee direction="right">
            {reviewsGroup2.map((review, index) => (
              <ReviewCard
                key={index}
                text={review.text}
                name={review.name}
                avatar={review.avatar}
              />
            ))}
          </Marquee>
        </div>

        <div className="flex justify-center items-center flex-col gap-5 px-3">
          <p className="text-base mb-5">
            Join 2000+ Businesses Using Nexus Botix
          </p>
          <GetStarted className="bg-custom-yellow" />
        </div>
      </div>
    </div>
  );
}
