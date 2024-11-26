import React from "react";
import ProfilePicture from "../src/components/ProfilePicture"

import Image from 'next/image'
export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center align-center">
            <div className=" w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4  ">
              <Image
                src="/profile.jpg" // Path to the image in the public folder
                alt="My Profile Picture"
                width={160} // Adjust width
                height={160} // Adjust height
                objectFit="cover" // Ensures the image fits well
              />
            </div>


          </div>

          <h1 className="text-5xl font-extrabold text-white ">Bijay Shrestha</h1>
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

      {/* About Me Section */}
      <section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m Bijay Shrestha, a passionate professional with expertise in
            counseling, business studies, Accounting and emerging technologies. I thrive
            on solving complex challenges and building impactful solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="block text-xl font-bold">Python</span>
              <p className="text-gray-400 text-sm">Moderate</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="block text-xl font-bold">React</span>
              <p className="text-gray-400 text-sm">Moderate</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="block text-xl font-bold">PHP</span>
              <p className="text-gray-400 text-sm">Moderate</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="block text-xl font-bold">Microsoft Office</span>
              <p className="text-gray-400 text-sm">Proficient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-10 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Email: shrprince4321@gmail.com | LinkedIn: https://www.linkedin.com/in/prince-shrestha-b25565179/
          </p>
        </div>
      </footer>
    </div>
  );
}
