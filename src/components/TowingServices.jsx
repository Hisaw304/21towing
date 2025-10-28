import React from "react";

const TowingServices = () => {
  return (
    <section id="services" className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
          Professional Towing Services You Can Rely On
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Whether you’ve been in an accident or need secure vehicle transport,
          <span className="text-red-500 font-semibold">
            {" "}
            21 Towing Inc{" "}
          </span>{" "}
          offers nationwide towing services with professionalism, care, and
          speed. Our experienced operators and state-of-the-art trucks are ready
          24/7.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Card 1 - Flatbed Towing */}
        <div className="border-b-4 border-r-4 border-blue-900 rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition transform hover:-translate-y-2">
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <img
              src="/truck-icon.png" // <-- Replace with your actual filename in /public
              alt="Flatbed Towing Icon"
              className="w-50 h-16 mb-4"
            />

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Reliable Flatbed Towing
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Ensure your vehicle’s safety with our professional flatbed towing
              services — available anywhere across the U.S. Whether you have a
              luxury car, motorcycle, or a damaged vehicle, our flatbed tow
              trucks provide secure, damage-free transportation. Our certified
              operators use top-tier equipment to guarantee a smooth and safe
              journey for your vehicle, no matter the distance.
            </p>

            <a
              href="tel:+15619736301"
              className="inline-block bg-blue-900 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              📞 Call (978) 672-6012
            </a>
          </div>
        </div>

        {/* Card 2 - Accident Emergency Towing */}
        <div className="border-b-4 border-r-4 border-blue-900 rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition transform hover:-translate-y-2">
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <img
              src="/truck-icon.png" // <-- Replace with your actual filename in /public
              alt="Accident Towing Icon"
              className="w-50 h-16 mb-4"
            />

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Accident Emergency Towing
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Accidents can happen anytime — and when they do,{" "}
              <span className="font-semibold text-red-500">21 Towing Inc</span>{" "}
              is here to respond immediately. Our 24/7 accident towing service
              ensures fast dispatch and expert handling of your vehicle. From
              minor collisions to major incidents, our experienced team provides
              safe recovery, clear communication, and dependable service across
              the nation.
            </p>

            <a
              href="tel:+15619736301"
              className="inline-block bg-blue-900 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              📞 Call (978) 672-6012
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TowingServices;
