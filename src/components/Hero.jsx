import React from "react";
import heroBg from "../assets/tow-truck.jpg"; // adjust path if needed

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-lg">
          24/7 Reliable Towing Services
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          Fast, friendly, and professional towing — always ready when you need
          us most. From roadside assistance to accident recovery, we’ve got you
          covered day and night.
        </p>

        {/* Call Now Button */}
        <a
          href="tel:+15619736301"
          className="inline-block bg-blue-900 hover:bg-red-600 text-white font-semibold px-10 py-5 rounded-full text-xl shadow-xl transition duration-300"
        >
          📞 Call Now: (978) 672-6012
        </a>
      </div>
    </section>
  );
};

export default Hero;
