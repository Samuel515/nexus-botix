// import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="bg-rnu-bg h-screen bg-no-repeat bg-cover flex justify-center items-center relative font-mukta">
      <div className="absolute inset-0 bg-black backdrop-blur-sm bg-opacity-50"></div>
      <div className="z-10 flex justify-center items-center flex-col">
      <p className="text-white">404 Resource Not Found!</p>
        <Link to="/" className="hover:underline text-red-500 hover:text-red-700">
          Click to go back to homepage
        </Link>
      </div>
      </div>
    </>
  );
}
