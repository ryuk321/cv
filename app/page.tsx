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
          <div className = "Container">
          <Navigation.Skills />

          </div>
        
          {/* <div className="Container">
            <h2 className="text-3xl font-bold text-center text-blue-400 mb-6 mt-6">
              My Skills
            </h2>
            <div className="flex flex-wrap items-center justify-center">
              <UI.cards title="Python" secodaryTitle="8 Projects" img_source="./python.png" />
              <UI.cards title="Next JS" secodaryTitle="5 Projects" img_source="./next.svg" />
              <UI.cards title="Php" secodaryTitle="3 Projects" img_source="./php1.png" />
              <UI.cards title="Wordpress" secodaryTitle="5 Projects" img_source="./wordpress1.png" />
              <UI.cards title="Microsoft Office" secodaryTitle="Pro" img_source="./office.png" />
            </div>
          </div> */}


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

      </NextUIProvider>


    </GlobalProvider>


  );
}