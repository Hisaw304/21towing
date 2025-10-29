import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 mt-12">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <a
            href="#"
            className="text-xl font-bold hover:text-red-500 transition"
          >
            21 Towing Inc
          </a>
          <p className="mt-2 text-sm text-white-400 leading-relaxed">
            Your reliable partner for 24/7 towing, roadside assistance, and
            accident recovery. Fast, friendly, and always ready to help when you
            need us most.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>📍 45 Meadowcroft Street, STE 2 Lowell, MA 01852</p>
          <p>📞 +1 (978) 672-6012</p>
          <p>✉️ info@21towing.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-red-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-red-400">
                Towing Services
              </a>
            </li>
            <li>
              <a href="#accident" className="hover:text-red-400">
                Accident Towing
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-red-400">
                Our Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Socials + Bottom Bar */}
      <div className="border-t border-blue-800 py-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} 21 Towing Inc. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-red-400 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-red-400 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-red-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
