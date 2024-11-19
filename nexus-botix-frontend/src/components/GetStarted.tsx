// import React from "react";

interface GetStartedProps {
    className?: string;
  }
  
  function GetStarted({ className = "" }: GetStartedProps) {
    return (
      <button
        className={`rounded sm:rounded-md ~p-1/2 text-[0.4rem] sm:text-xs md:text-md lg:text-lg ${className}`}
      >
        Get Started For Free
      </button>
    );
  }
  
  export default GetStarted;
  