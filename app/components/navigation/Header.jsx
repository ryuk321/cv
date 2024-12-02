"use client";

import { useGlobalContext } from "@/app/context/GlobalContext";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { menuOpen } = useGlobalContext()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 relative">
      <div
        className={`fixed transition-all duration-300  
          ${isScrolled
            ? "top-[0.5%]  left-6    w-12 h-12 "
            : "my-10 top-[10%] left-1/2 w-30 h-30   transform -translate-x-1/2 -translate-y-1/2"
          } ${menuOpen 
            ? " top-2/2 left-1/4 w-30 h-30 transition-all duration-300" 
            : "my-10 top-[10%] left-1/2 w-30 h-30   transform -translate-x-1/2 -translate-y-1/2"}
           rounded-full overflow-hidden shadow-lg mt-9 z-50 
          
           `}
      >
        <Image
          src="/profile.jpg"
          alt="My Profile Picture"
          width={140}
          height={140}
          className="object-cover  "
        />
      </div>
      <div className="container mx-auto my-10 px-20 py-35 pt-10 text-center" >
        <h1 className="mt-20 text-5xl font-extrabold text-white">Bijay Shrestha</h1>
        <p className="text-lg mt-4">Aspiring Professional | Tech Enthusiast</p>
        <div className="mt-6">
          <a
            href="#contact"
            className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

