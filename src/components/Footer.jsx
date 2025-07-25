import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white w-full py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Footer Links */}
        <div className="f-links flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-center">
          <Link
            className="no-underline text-md uppercase font-thin leading-none tracking-tight text-black"
            to={"/work"}
          >
            Work
          </Link>
          <Link
            className="no-underline text-md uppercase font-thin leading-none tracking-tight text-black"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="no-underline text-md uppercase font-thin leading-none tracking-tight text-black"
            to={"/contact"}
          >
            Contact
          </Link>
        </div>

        {/* Logo */}
        <div className="f-logo">
          <h1 className="text-3xl font-bold text-black leading-none tracking-tight uppercase">
            <svg
              className="w-[180px] sm:w-[200px] h-auto"
              viewBox="0 0 320 120"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle cx="60" cy="60" r="45" stroke="black" strokeWidth="4" fill="white" />
              <circle cx="60" cy="60" r="20" fill="black" />
              <rect x="90" y="25" width="8" height="20" fill="black" rx="2" />
              <text
                x="130"
                y="65"
                fontFamily="Helvetica, Arial, sans-serif"
                fontSize="24"
                fontWeight="bold"
                fill="black"
              >
                TARUN KHIWAL
              </text>
              <text
                x="130"
                y="90"
                fontFamily="Helvetica, Arial, sans-serif"
                fontSize="14"
                fill="gray"
                letterSpacing="4"
              >
                PHOTOGRAPHY
              </text>
            </svg>
          </h1>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <h1 className="text-xs font-thin uppercase text-black">
            &copy; Tarun Khiwal Photography | all rights reserved | site credit Dhanraj Rathore
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
