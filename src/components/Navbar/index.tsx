import React from "react";
import Logo from "../Logo";

export default function index() {
  return (
    <div className="container bg-transparent mx-auto flex flex-row justify-between items-center py-4">
      <Logo />
      <div className="flex flex-row gap-6">
        <a className="text-lg text-center text-white-900 font-semibold cursor-pointer hover:text-white-800 transition-all duration-200">
          Home
        </a>
        <a className="text-lg text-center text-white-800 font-semibold cursor-pointer hover:text-white-800 transition-all duration-200">
          How it work
        </a>
        <a className="text-lg text-center text-white-800 font-semibold cursor-pointer hover:text-white-800 transition-all duration-200">
          Marketplace
        </a>
        <a className="text-lg text-center text-white-800 font-semibold cursor-pointer hover:text-white-800 transition-all duration-200">
          About
        </a>
      </div>
    </div>
  );
}
