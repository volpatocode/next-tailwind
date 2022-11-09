import React from "react";
import Logo from "../Logo";

export default function index() {
  return (
    <div className="container bg-transparent m-auto flex flex-row justify-between items-center py-2">
      <Logo />
      <div className="flex flex-row gap-6">
        <a className="text-lg text-center text-slate-200 font-semibold cursor-pointer hover:text-slate-100 transition-all duration-200">
          Home
        </a>
        <a className="text-lg text-center text-slate-200 font-semibold cursor-pointer hover:text-slate-100 transition-all duration-200">
          How it work
        </a>
        <a className="text-lg text-center text-slate-200 font-semibold cursor-pointer hover:text-slate-100 transition-all duration-200">
          Marketplace
        </a>
        <a className="text-lg text-center text-slate-200 font-semibold cursor-pointer hover:text-slate-100 transition-all duration-200">
          About
        </a>
      </div>
    </div>
  );
}
