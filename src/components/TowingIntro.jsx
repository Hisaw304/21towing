import React from "react";
import { Star } from "lucide-react";
import towingImage from "../assets/towing-team.jpg"; // change this to your actual image path

const TowingIntro = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-20"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-red-500 text-lg font-semibold uppercase tracking-wide mb-2">
          Your Reliable Towing Company
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
          21 Towing Inc – <br className="hidden md:block" />
          Professional Towing Near You
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          When accidents happen,{" "}
          <span className="font-semibold text-blue-900">21 Towing Inc</span> is
          here to help you get back on track quickly, safely, and stress-free.
          As your trusted towing provider, we specialize in fast, reliable, and
          professional towing services that prioritize your safety and
          convenience.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          Our skilled team is available{" "}
          <span className="font-semibold">24/7</span> for emergency assistance,
          ensuring you’re never left stranded. Whether it’s an accident,
          breakdown, or roadside issue — we’ve got you covered.
        </p>

        {/* Call Button + Rating */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <a
            href="tel:+15619736301"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-md transition"
          >
            📞 Call (978) 672-6012
          </a>

          <div className="flex items-center space-x-2 text-yellow-500 text-lg font-medium">
            <Star className="fill-yellow-500" size={22} />
            <span className="text-gray-800">
              Rated 4.9 Stars on All Platforms
            </span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={towingImage}
          alt="21 Towing team assisting with a tow"
          className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-blue-900"
        />
      </div>
    </section>
  );
};

export default TowingIntro;
