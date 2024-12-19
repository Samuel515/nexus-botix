// import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="bg-rnu-bg h-screen bg-no-repeat bg-cover flex justify-center items-center relative font-mukta">
        <div className="absolute inset-0 bg-black backdrop-blur-sm bg-opacity-50"></div>
        <div className="z-10 flex justify-center items-center flex-col gap-2">
          <p className="text-white text-4xl">404</p>
          <p className="text-red-500">Resource Not Found!</p>
          <Link
            to="/nexus-botix"
            className="hover:underline text-white hover:text-green-200 mt-8"
          >
            Click to go back to homepage
          </Link>
        </div>
      </div>
    </>
  );
}
