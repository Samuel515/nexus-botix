// import React from "react";

import { Link } from "react-router-dom";

interface GetStartedProps {
    className?: string;
  }
  
  function GetStarted({ className = "" }: GetStartedProps) {
    return (
      <Link to="/nexus-botix/signup"
        className={`rounded-xl lg:rounded p-4 lg:p-2 text-[0.4rem] text-lg w-full lg:w-auto flex justify-center items-center ${className} hover:text-white`}
      >
        Get Started For Free
      </Link>
    );
  }
  
  export default GetStarted;
  