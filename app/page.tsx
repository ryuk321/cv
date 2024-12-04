import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Navigation,  } from "./components"
import { GlobalProvider } from "./context/GlobalContext";


export default function Portfolio() {
  return (
    <GlobalProvider>
      <NextUIProvider>
        <div className="bg-gray-900 text-white min-h-screen">

          {/* Navigation Bar */}
          <Navigation.InteractiveNavBar />

          {/* Hero Section */}
          <Navigation.Header />

          <section className="py-10 bg-gray-800">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-blue-400 mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I’m Bijay Shrestha, a passionate professional with expertise in counseling, business studies, accounting, and emerging technologies. I thrive on solving complex challenges and building impactful solutions. With a strong foundation in strategic thinking and problem-solving, I aim to bridge the gap between business and technology. My ability to adapt to dynamic environments and embrace innovation has helped me collaborate with diverse teams and drive results effectively. Beyond professional pursuits, I am deeply committed to continuous learning, mentorship, and empowering others to achieve their goals.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <div className = "container">
          <Navigation.Skills />

          </div>

          <div className = "py-10 bg-gray-800 text-center">
          <Navigation.ProfessionalSkills />

          </div>

          {/* Contact Section */}
          <footer id="contact" className="py-10 bg-gray-900 text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Get in Touch</h2>
              <p className="text-gray-400">
                Email: shrprince4321@gmail.com | LinkedIn: https://www.linkedin.com/in/prince-shrestha-b25565179/
              </p>
            </div>
          </footer>
        </div>

      </NextUIProvider>


    </GlobalProvider>


  );
}