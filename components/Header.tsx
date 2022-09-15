import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="medium logo"
          />
        </Link>
        <ul className="hidden md:inline-flex items-center space-x-5 list-none">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li className="text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer">
            <a href="/">Follow</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <button>Sign In</button>
        <button className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
