import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jason R.",
    location: "Phoenix, AZ",
    rating: 5,
    feedback:
      "21 Towing Inc saved the day! My car broke down on the freeway and they arrived in less than 15 minutes. Super professional and kind driver!",
  },
  {
    name: "Michelle L.",
    location: "Austin, TX",
    rating: 4,
    feedback:
      "Great service and fair pricing. The driver was helpful and made a stressful situation easy to handle. Highly recommend their towing service!",
  },
  {
    name: "Derrick K.",
    location: "Chicago, IL",
    rating: 5,
    feedback:
      "Called them after an accident — they handled everything calmly and efficiently. My vehicle was loaded safely with a flatbed truck. Amazing experience!",
  },
  {
    name: "Sara P.",
    location: "Orlando, FL",
    rating: 5,
    feedback:
      "Very responsive and professional! The dispatcher was friendly and kept me updated the whole time. Great rates for same-day towing!",
  },
  {
    name: "Brian T.",
    location: "Los Angeles, CA",
    rating: 4,
    feedback:
      "Fast, reliable, and courteous service. They really care about customers. The best towing company I’ve dealt with so far.",
  },
];

// helper → initials for avatar
const getInitials = (name) => {
  const parts = name.split(" ");
  return (parts[0][0] + (parts[1]?.[0] || "")).toUpperCase();
};

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Hear from drivers who trusted{" "}
          <span className="text-red-600 font-semibold">21 Towing Inc</span> to
          get them back on the road quickly and safely.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-between h-full mx-auto max-w-md">
                {/* Avatar initials */}
                <div className="w-16 h-16 flex items-center justify-center bg-blue-900 text-white font-bold text-xl rounded-full mb-6">
                  {getInitials(review.name)}
                </div>

                {/* Stars */}
                <div className="flex mb-4 text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  “{review.feedback}”
                </p>

                {/* Name + Location */}
                <h4 className="font-bold text-lg text-blue-900">
                  {review.name}
                </h4>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
