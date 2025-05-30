"use client";
import React from "react";
import logo from "./assets/mr-waffle-logo.png";
import Image from "next/image"; 
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const Footer: React.FC = () => {
  const [, setActiveSection] = useState("home");
  const [, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 p-4">
              {/* Logo */}
              <Image
                src={logo}
                alt="Mr. Waffles Nepal Logo"
                width={64}
                height={64}
                className="rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-sm mx-auto lg:mx-0">
              Experience authentic Belgian waffles with a Himalayan twist.
              Fresh, crispy, and made with love.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mr.waffles.np/?locale=kk-KZ&hl=af"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition cursor-pointer"
              >
                <Facebook className="text-amber-600" size={20} />
              </a>
              <a
                href="https://www.instagram.com/mr.waffles.np/?locale=kk-KZ&hl=af"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition cursor-pointer"
              >
                <Instagram className="text-amber-600" size={20} />
              </a>
              <a
                href="https://www.instagram.com/mr.waffles.np/?locale=kk-KZ&hl=af"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-100 p-3 rounded-full hover:bg-amber-200 transition cursor-pointer"
              >
                <Twitter className="text-amber-600" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-amber-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="hover:text-amber-400 transition"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-amber-400 transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <span>+977-9800010000</span>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <span className="break-all">info@mrwafflesnepal.com</span>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin size={16} className="text-amber-400 flex-shrink-0" />
                <span>Jor Ganesh Galli, Kathmandu 44600</span>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <Clock size={16} className="text-amber-400 flex-shrink-0" />
                <span>Daily: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col items-center text-center gap-6 sm:flex-row sm:justify-between sm:text-left">
          <p className="text-gray-400 text-sm">
            © Copyright 2025. Mr. Waffles Nepal. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 justify-center">
            <button className="hover:text-amber-400 transition">
              Terms & Conditions
            </button>
            <button className="hover:text-amber-400 transition">
              Privacy Policy
            </button>
            <button className="hover:text-amber-400 transition">Careers</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;