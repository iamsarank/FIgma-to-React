import React, { useState } from "react";
import LeftImage from "../assets/images/lg-page-left.png";
import RightBg from "../assets/images/transparent-bg.png";

function VerifyAccount() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [isverified, setIsVerified] = useState(false);

  const handleVerify = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter a valid 6-digit code.");
      return;
    }
    if (code === "123456") {
      setIsVerified(true);
      setError("");
      // Proceed with password reset or next steps
    } else {
      setError("Invalid code. Please try again.");
    }
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
          {isverified ? (
            <div className="text-green-500 text-lg texr-center font-medium">
              OTP Verified! You can proceed.
            </div>
          ) : (
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-wider">
                  Verify Account
                </h2>
                <p className="text-sm font-light text-gray-700">
                  Let's verify your account. Enter the OTP sent to your email.
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter OTP
                  </label>
                  <div className="flex justify-between mb-6">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        value={digit}
                        onChange={(e) => handleVerify(e, index)}
                        maxLength="1"
                        className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                      />
                    ))}
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mt-6 text-center">
                  <button
                    onClick={handleSubmit}
                    className="w-full text-white bg-amber-700 font-medium py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
                  >
                    Verify
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Did not Receive{" "}
                    <button className="cursor-pointer text-gray-700 underline font-medium">
                      Resend
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;
