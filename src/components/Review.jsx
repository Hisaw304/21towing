import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Jason R.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "21 Towing Inc saved the day! My car broke down on the freeway and they arrived in less than 15 minutes. Super professional and kind driver!",
  },
  {
    name: "Michelle L.",
    location: "Austin, TX",
    rating: 4,
    text: "Great service and fair pricing. The driver was helpful and made a stressful situation easy to handle. Highly recommend their towing service!",
  },
  {
    name: "Derrick K.",
    location: "Chicago, IL",
    rating: 5,
    text: "Called them after an accident — they handled everything calmly and efficiently. My vehicle was loaded safely with a flatbed truck. Amazing experience!",
  },
  {
    name: "Sara P.",
    location: "Orlando, FL",
    rating: 5,
    text: "Very responsive and professional! The dispatcher was friendly and kept me updated the whole time. Great rates for same-day towing!",
  },
  {
    name: "Brian T.",
    location: "Los Angeles, CA",
    rating: 4,
    text: "Fast, reliable, and courteous service. They really care about customers. The best towing company I’ve dealt with so far.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Real reviews from satisfied drivers who trusted{" "}
          <span className="text-red-600 font-semibold">21 Towing Inc</span> to
          get them back on the road quickly and safely.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border-b-4 border-blue-900 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 p-8 text-center mx-auto max-w-md h-full flex flex-col justify-between">
              {/* Stars */}
              <div className="flex justify-center mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-gray-300" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                “{review.text}”
              </p>

              {/* Name + Location */}
              <div>
                <h4 className="text-blue-900 font-bold text-lg">
                  {review.name}
                </h4>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
