import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/img/background-image.webp";

const Landing = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/src/assets/img/background-image.webp')] object-cover">
      <div className="absolute w-full h-full z-1 bg-black/70"></div>
      <Box
        className="flex flex-col text-white items-center justify-center gap-6 z-50"
        sx={{ textAlign: "center", width: "80%", maxWidth: "600px" }}
      >
        <h1 className="text-5xl font-bold text-white stroke-white	stroke-1">
          PICMANIA
        </h1>
        <Typography variant="p" sx={{ fontSize: "14px" }}>
          Best app to view different users and explore albums with many
          inspiring photos that will make you smile. View your media in a way
          you never have before: through a beautiful, inspiring gallery and all
          the strange ways to view images. Explore other people's photos — not
          just your own, but their own as well. See their albums, learn about
          their stories and connect with them in a whole new way. Feel free to
          explore all kinds of unusual perspectives.
        </Typography>
        <Link to="/login">
          <button className="bg-blue-700  text-white  hover:text-blue-700 border-white border-2 text-base  py-2 px-3 rounded-md  ease-in-out duration-300">
            Get Started
          </button>
        </Link>
      </Box>
    </div>
  );
};

export default Landing;
