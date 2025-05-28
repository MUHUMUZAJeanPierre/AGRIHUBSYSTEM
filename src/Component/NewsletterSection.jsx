import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function NewsletterSection() {
  return (
    <section className="bg-[#fdfcf7] py-20 px-6 md:px-20 lg:px-11 font-[Raleway,sans-serif]">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl  text-gray-900 leading-tight mb-4">
            Subscribe To Our <br /> Newsletter
          </h2>
          <div className="w-16 h-[2px] bg-green-800 mt-2 mb-6"></div>
          <p className="text-gray-600 text-base leading-[32px] font-[400]">
            Stay updated with the latest agricultural news, tips, and special offers.
            Join our community of modern farmers and stakeholders.
          </p>
        </div>

        {/* Right Form */}
        <form className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none focus:border-green-800 text-[16px] text-gray-700"
            required
          />
          <textarea
            placeholder="Write your message (optional)"
            className="bg-transparent border-b border-gray-400 py-2 px-1 focus:outline-none focus:border-green-800 text-[16px] text-gray-700"
            rows={4}
          />
          <button
            type="submit"
            className="flex items-center gap-2 text-sm font-bold text-black hover:text-green-700 transition"
          >
            SEND <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
