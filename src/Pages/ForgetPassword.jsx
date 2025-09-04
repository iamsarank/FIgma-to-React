import React, { useState } from "react";
import LeftImage from "../assets/images/lg-page-left.png";
import RightBg from "../assets/images/transparent-bg.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const handleForgotPassword = () => {
    console.log("Send Reset Link clicked", { email });
  };
  return (
    <div className="flex h-screen bg-[#EDE5C4]">
      <div className="flex">
        <img
          src={LeftImage}
          alt="Left Background"
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="flex-1 bg-grey-50 flex items-center justify-center p-8"
        style={{ backgroundImage: `url(${RightBg})`, backgroundSize: "cover" }}
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <p className="text-sm mb-2 text-gray-600 tracking-widest">
              WELCOME BACK TO
            </p>
            <h1 className="text-4xl font-bold text-gray-900 tracking-widest">
              GOLDIONAIRE
            </h1>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wider">
                Sign Up
              </h2>
              <p className="text-sm font-light text-gray-700">
                Enter your verified email and we will send you a reset link.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="sample@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                />
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={handleForgotPassword}
                  className="w-full text-white bg-amber-700 font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
                >
                  Send Reset Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
