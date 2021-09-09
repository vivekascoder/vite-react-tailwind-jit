import React from "react";

function Navbar() {
  return (
    <div className="h-14 bg-purple-700 shadow-md">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg text-white">
          🔄 StableSwap
        </h1>
        <div>
          {/* Links */}
          <button
            className="
              flex items-center space-x-1 px-3 py-1 text-sm font-semibold uppercase 
              border-2 rounded-sm text-white hover:text-purple-600 hover:bg-white 
              transition"
          >
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Connect</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
