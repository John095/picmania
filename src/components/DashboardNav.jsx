import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const DashboardNav = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogout = async (e) => {
    setError("");

    try {
      1;
      await logout();
      navigate("/login");
    } catch (error) {
      setError("Failed to Log Out");
    }
  };
  // console.log(currentUser.email);

  return (
    <div className="w-full  px-[5%] h-16 flex justify-between items-center bg-blue-700">
      {error && (
        <p className="text-red-700 bg-red-300 p-2 text-sm text-center rounded">
          {error}
        </p>
      )}
      <Link to="/dashboard">
        <button className="bg-blue-900 text-white text-lg py-2 px-3 rounded-md hover:bg-blue-500 ease-in-out duration-300">
          Home
        </button>
      </Link>

      <button
        onClick={handleLogout}
        className="bg-blue-900 text-white text-lg py-2 px-3 rounded-md hover:bg-blue-500 ease-in-out duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardNav;
