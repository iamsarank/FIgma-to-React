import React, { useState } from "react";
import LeftImage from "../assets/images/lg-page-left.png";
import RightBg from "../assets/images/transparent-bg.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login clicked", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google Login clicked");
  };

  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
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
                Login
              </h2>
              <p className="text-sm font-light text-gray-700">
                Enter to your Email461z below to login to your Account.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>  
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
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
                  <button
                    className="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password ?
                  </button>
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
                onClick={handleLogin}
                className="w-full text-white bg-amber-700 font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Login
              </button>
              <button
                onClick={handleGoogleLogin}
                className="w-full text-gray-700 border font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Login with Google
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={handleSignUp}
                  className="*text-amber-700 underline font-medium"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
