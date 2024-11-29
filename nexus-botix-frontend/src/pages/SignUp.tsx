import { useState } from "react";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthPageHeader from "../components/AuthPageHeader";

const SignUpForm = () => {
  // State to handle password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="~px-0/96">
      <AuthPageHeader/>
      <div className="flex items-center justify-center bg-black">
      <div className=" text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome!</h1>
        <p className="text-center mb-6">
          Sign up to <span className="font-bold">Nexus Botix</span>
        </p>

        <form className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input
              type="text"
              placeholder="Enter first and last name"
              className="w-full mt-1 p-3 rounded-3xl bg-black border border-gray-700 text-gray-300 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 rounded-3xl bg-black border border-gray-700 text-gray-300 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full mt-1 p-3 rounded-3xl bg-black border border-gray-700 text-gray-300 focus:outline-none focus:border-yellow-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* Toggle visibility icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex items-center justify-center relative top-3 right-3 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    showPassword
                      ? "M13.875 18.825A10.05 10.05 0 0012 19c-5.523 0-10-4.477-10-10S6.477 3 12 3c2.386 0 4.577.832 6.284 2.219m-2.484 1.776a3 3 0 11-3.775 3.775M15 15l6 6"
                      : "M3 3l18 18M4.929 4.929A10.046 10.046 0 0012 3c5.523 0 10 4.477 10 10 0 2.176-.684 4.184-1.845 5.819M15 15a3 3 0 11-3-3"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Continue Button */}
          <button className="w-full py-3 mt-6 bg-yellow-500  rounded-md hover:bg-yellow-600 text-white">
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-6">
          <p>
            Already have an account?{" "}
            <Link to="/nexus-botix-frontend/signin" className="text-yellow-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-white"></div>
          <span className="px-3 text-white">OR</span>
          <div className="flex-grow border-t border-white"></div>
        </div>

        {/* Social Media Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center py-3 bg-white text-black rounded-3xl hover:bg-gray-200">
            <FaGoogle className="mr-2 " /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center py-3 bg-white text-black rounded-3xl hover:bg-gray-200">
            <FaApple className="mr-2" /> Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center py-3 bg-white text-black rounded-3xl hover:bg-gray-200">
            <FaFacebook className="mr-2" /> Continue with Facebook
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUpForm;
