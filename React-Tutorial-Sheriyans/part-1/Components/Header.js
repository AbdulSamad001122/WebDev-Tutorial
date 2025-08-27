import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-16 bg-green-600 flex items-center justify-between px-8">
      <h2 className="text-white font-bold text-lg">LOGO</h2>
      <div className="flex gap-4">
        <Link href="/About" className="text-2xl m-5 ">
          About
        </Link>
        <Link href="/Contact" className="text-2xl m-5 ">
          Contact
        </Link>
        <Link href="/Courses" className="text-2xl m-5 ">
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Header;
