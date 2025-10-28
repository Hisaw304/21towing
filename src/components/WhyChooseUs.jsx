import React from "react";
import { Clock, Truck, ShieldCheck, Users } from "lucide-react"; // optional icons

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-12">
          Why Choose <span className="text-red-500">21 Towing Inc</span> for
          Accident Towing?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="border-2 border-blue-900 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4 text-blue-900">
              <Clock size={40} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              24/7 Emergency Assistance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Accidents don’t follow a schedule, and neither do we. Our dispatch
              team is ready around the clock to send help wherever you need it.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-blue-900 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4 text-blue-900">
              <Truck size={40} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Fast Response Times
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We know time is critical after an accident. With strategically
              located trucks, we guarantee quick arrival to minimize your wait.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-blue-900 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4 text-blue-900">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Specialized Recovery Equipment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From fender-benders to major collisions, our modern tow trucks are
              equipped with advanced gear for safe and efficient recovery.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border-2 border-blue-900 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4 text-blue-900">
              <Users size={40} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Experienced & Certified Operators
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our licensed professionals have years of hands-on experience,
              ensuring your vehicle is handled with care, precision, and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
