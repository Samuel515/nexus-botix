// import React from "react";

interface GetStartedProps {
    className?: string;
  }
  
  function GetStarted({ className = "" }: GetStartedProps) {
    return (
      <button
        className={`rounded-xl lg:rounded p-4 lg:p-2 text-[0.4rem] text-lg w-full lg:w-auto ${className}`}
      >
        Get Started For Free
      </button>
    );
  }
  
  export default GetStarted;
  