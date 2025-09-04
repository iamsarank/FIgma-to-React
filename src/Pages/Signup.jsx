import React, { useState } from "react";
import LeftImage from "../assets/images/lg-page-left.png";
import RightBg from "../assets/images/transparent-bg.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log("SignUp clicked", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google Login clicked");
  };

  const handleLogin = () => {
    navigate("/");
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
                Enter your information to create an account.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 flex-col sm:flex-row">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sam"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Curren"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                  />
                </div>
              </div>
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
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                />
              </div>
              <button
                onClick={handleSignUp}
                className="w-full text-white bg-amber-700 font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
              >
                Sign Up
              </button>
              <button
                onClick={handleGoogleLogin}
                className="w-full text-gray-700 border font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
              >
                Login with Google
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={handleLogin}
                  className="cursor-pointer text-gray-700 underline font-medium"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
