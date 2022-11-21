import React, { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className="cursor-pointer bg-none border-none py-1 pl-1"
        onClick={handleMenu}
      >
        <div className="w-8 h-8 flex flex-col gap-y-[8px] items-center justify-center">
          <div className="h-1 w-full rounded-md bg-white-900 transition-all duration-200 ease-in-out" />
          <div className="h-1 w-full rounded-md bg-white-900 transition-all duration-200 ease-in-out" />
          <div className="h-1 w-full rounded-md bg-white-900 transition-all duration-200 ease-in-out" />
        </div>
      </button>
      {isMenuOpen && ""}
    </>
  );
}
