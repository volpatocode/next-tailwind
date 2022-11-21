import React, { useState } from "react";
import Logo from "../Logo";
import useWindowSize from "../../hooks/useWindowSize";
import Menu from "../Menu";

export default function Navbar() {
  const { width } = useWindowSize();

  return (
    <div className="container bg-transparent mx-auto flex flex-row justify-between items-center py-4">
      <Logo />
      {width < 600 ? (
        <Menu/>
      ) : (
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
      )}
    </div>
  );
}
