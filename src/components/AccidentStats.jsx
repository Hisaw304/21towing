import React from "react";
import { AlertTriangle, MapPin, Car, Activity, Calendar } from "lucide-react";

const AccidentStats = () => {
  return (
    <section id="accident" className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
          The Reality of Traffic Accidents Across the U.S.
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          With millions of drivers on the road every day, traffic accidents are
          an unfortunate reality across America. Understanding these patterns
          helps us provide faster, safer, and more reliable towing services when
          you need them most.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="border border-blue-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-2 bg-gray-50">
          <div className="flex items-center justify-center mb-4 text-blue-900">
            <AlertTriangle size={40} />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Annual Traffic Collisions
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Over <span className="font-semibold">6 million accidents</span> are
            reported every year in the U.S., resulting in millions of property
            damage claims and countless towing service calls.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-blue-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-2 bg-gray-50">
          <div className="flex items-center justify-center mb-4 text-blue-900">
            <MapPin size={40} />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            High-Risk Areas
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Busy interstates like I-5, I-10, I-95, and I-80 consistently rank
            among the most accident-prone highways, especially during rush hours
            and long-distance travel periods.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-blue-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-2 bg-gray-50">
          <div className="flex items-center justify-center mb-4 text-blue-900">
            <Car size={40} />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Alcohol-Related Crashes
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            More than{" "}
            <span className="font-semibold">10,000 DUI-related fatalities</span>{" "}
            occur each year in the U.S., emphasizing the need for safe,
            professional towing services that keep impaired drivers off the
            road.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-blue-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-2 bg-gray-50">
          <div className="flex items-center justify-center mb-4 text-blue-900">
            <Activity size={40} />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Pedestrian & Cyclist Involvement
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Pedestrians and cyclists account for around{" "}
            <span className="font-semibold">17% of all traffic deaths</span>{" "}
            nationwide, with urban centers seeing the highest risk areas.
          </p>
        </div>

        {/* Card 5 */}
        <div className="border border-blue-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-2 bg-gray-50">
          <div className="flex items-center justify-center mb-4 text-blue-900">
            <Calendar size={40} />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Seasonal Spikes
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Accident rates rise during the holidays and summer travel season,
            when more drivers hit the road for family trips and cross-country
            vacations.
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-3xl mx-auto text-center mt-16">
        <p className="text-lg text-gray-700 leading-relaxed">
          These numbers highlight the importance of having a{" "}
          <span className="font-semibold text-blue-900">
            trusted towing partner
          </span>{" "}
          available anytime, anywhere. At{" "}
          <span className="text-red-500 font-semibold">21 Towing Inc</span>, we
          take pride in providing fast, reliable, and professional towing
          services across the U.S. — keeping drivers safe one tow at a time.
        </p>
      </div>
    </section>
  );
};

export default AccidentStats;
