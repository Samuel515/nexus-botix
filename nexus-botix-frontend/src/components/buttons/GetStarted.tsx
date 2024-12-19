import { Link } from "react-router-dom";

interface GetStartedProps {
  className?: string;
  children?: React.ReactNode; // Allows custom text or elements
}

function GetStarted({ className = "", children = "Get Started For Free" }: GetStartedProps) {
  return (
    <Link
      to="/nexus-botix/signup"
      className={`rounded-xl lg:rounded p-4 lg:p-2 text-[0.4rem] text-lg w-full lg:w-auto flex justify-center items-center ${className} hover:text-white`}
    >
      {children}
    </Link>
  );
}

export default GetStarted;
