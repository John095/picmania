import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser, googleSignIn, githubSignIn, twitterSignIn } =
    useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to log in!");
    }
    setLoading(false);
    console.log(currentUser);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to log in!");
    }
    setLoading(false);
    console.log(currentUser);
  };

  const handleGithubSignIn = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await githubSignIn();
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to log in!");
    }
    setLoading(false);
    console.log(currentUser);
  };

  const handleTwitterSignIn = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await twitterSignIn();
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to log in!");
    }
    setLoading(false);
    console.log(currentUser);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-600 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="w-10/12 mx-4 max-w-sm flex items-center justify-center flex-col bg-white rounded-md py-12 px-9">
        <h1 className="text-gray-800 text-3xl font-semibold mb-8">Login</h1>
        {error && (
          <p className="text-red-700 bg-red-300 p-2 text-sm text-center rounded">
            {error}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-end mb-8"
        >
          <div className="w-full flex flex-col items-start justify-center border-b-2 border-gray-400 py-2 px-2 mb-6">
            <label className="text-xs text-gray-500 mb-3">Email</label>
            <div className="flex items-center justify-start">
              <HiOutlineMail className="text-lg text-gray-600 mr-4" />
              <input
                className="border-none outline-none w-full text-sm text-gray-600"
                type="email"
                ref={emailRef}
                placeholder="Type your email address..."
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center border-b-2 border-gray-400 py-2 px-2 mb-3">
            <label className="text-xs text-gray-500 mb-3">Password</label>
            <div className="flex items-center justify-start">
              <BiLock className="text-lg text-gray-600 mr-4" />
              <input
                className="border-none outline-none w-full text-sm text-gray-600"
                type="password"
                placeholder="Type your password..."
                ref={passwordRef}
                required
              />
            </div>
          </div>
          <Link
            to="/forgot-password"
            className="text-xs text-gray-500 no-underline hover:text-blue-800 ease-in duration-300 mb-8"
          >
            Forgot password?
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-2 px-4 rounded-3xl font-medium text-base"
          >
            Login
          </button>
        </form>
        <p className="text-sm font-normal text-gray-600">or Sign In using</p>
        <div className="flex items-center justify-center gap-3">
          <FcGoogle
            className="text-2xl cursor-pointer"
            onClick={handleGoogleSignIn}
          />
          <BsGithub
            onClick={handleGithubSignIn}
            className="text-2xl cursor-pointer"
          />
          <BsTwitter
            onClick={handleTwitterSignIn}
            className="text-2xl text-blue-500 cursor-pointer"
          />
        </div>
        <p className="text-gray-600 text-xs mt-10">
          Don't have an account?&nbsp;
          <Link
            className="text-blue-700 no-underline hover:text-blue-600 ease-in duration-300 mb-8"
            to="/register"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
