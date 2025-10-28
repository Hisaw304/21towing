import React, { useState } from "react";

const ScheduleTow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-blue-900">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
            Thanks for reaching out!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We’ve received your request and will get back to you shortly.
          </p>
          <p className="text-red-600 font-bold text-lg mb-2">
            Same-Day Towing Service — Quality Service, Great Rates!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Experience the convenience of our same-day towing service — ensuring
            your peace of mind. With our commitment to efficiency and quality,
            we prioritize your schedule and safety. Our skilled tow drivers are
            equipped to handle your towing needs promptly. Say goodbye to delays
            and inconvenience — schedule your same-day towing now!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="schedule-tow"
      className="bg-white py-20 px-6 md:px-12 lg:px-20"
    >
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Same-Day Towing Service.{" "}
          <span className="text-red-600">Quality Service, Great Rates!</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Experience the convenience of our same-day towing service, ensuring
          you peace of mind. With our commitment to efficiency and quality, we
          prioritize your schedule and safety. Our skilled tow drivers are
          equipped to handle your towing needs promptly. Say goodbye to delays
          and inconvenience — schedule your same-day towing now!
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-gray-50 shadow-md rounded-2xl p-10 border border-blue-900">
        <h3 className="text-2xl font-extrabold text-blue-900 mb-3 text-center">
          Schedule Your Tow
        </h3>
        <p className="text-gray-700 text-center mb-8">
          We'll review your request and send a quote as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-900"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-900"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-900"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Add your pick-up and drop-off address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-900"
            ></textarea>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="mt-1 accent-blue-900"
            />
            <label className="text-sm text-gray-700">
              I agree to{" "}
              <a href="#" className="text-blue-900 font-semibold underline">
                terms & conditions
              </a>{" "}
              provided by the company. By providing my phone number, I agree to
              receive text messages from the business.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-red-600 text-white font-semibold py-3 rounded-full transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ScheduleTow;
