import React, { useRef, useState } from "react";
import { BsPersonCircle, BsGithub, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your email for further instructions.");
    } catch (error) {
      setError("Email is not valid or doesn't exist!");
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-600 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="w-10/12 mx-4 max-w-sm flex items-center justify-center flex-col bg-white rounded-md py-8 px-9">
        <h1 className="text-gray-800 text-2xl font-semibold mb-8">
          Reset Password
        </h1>
        <p className="text-sm text-blue-600 text-center">
          Enter your email address to receive a password reset link.
        </p>
        {error && (
          <p className="text-red-700 bg-red-300 p-2 text-xs text-center rounded">
            {error}
            {error && (
              <p className="text-red-700 bg-red-300 p-2 text-sm text-center rounded">
                {error}
              </p>
            )}
          </p>
        )}
        {message && (
          <p className="text-green-700 bg-green-300 p-2 text-xs text-center rounded">
            {message}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-end mb-8"
        >
          {/* Email */}
          <div className="w-full flex flex-col items-start justify-center border-b-2 border-gray-400 py-2 px-2 mb-6">
            <label className="text-xs text-gray-500 mb-3">Email</label>
            <div className="flex items-center justify-start">
              <HiOutlineMail className="text-lg text-gray-600 mr-4" />
              <input
                className="border-none outline-none w-full text-sm text-gray-600"
                type="email"
                placeholder="Type your email address..."
                ref={emailRef}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-2 px-4 rounded-3xl font-medium text-base"
          >
            Send
          </button>
        </form>
        <p className="text-gray-600 text-xs">
          Go back to&nbsp;
          <Link
            className="text-blue-700 no-underline hover:text-blue-600 ease-in duration-300"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
