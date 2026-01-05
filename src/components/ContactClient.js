"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactClient() {
  return (
    <div className="pt-32 pb-24">
      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Contact Us
        </motion.h1>

        <div className="h-1 w-20 bg-red-500 mx-auto mb-6" />

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We’re here to guide you every step of your study abroad journey.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-28">
        {[
          {
            icon: Phone,
            title: "Call Us",
            value: "+977 1 5445099",
            hint: "Sun–Fri, 10AM–6PM",
          },
          {
            icon: Mail,
            title: "Email",
            value: "info@suyan.com.np",
            hint: "We reply within 24 hours",
          },
          {
            icon: MapPin,
            title: "Visit Office",
            value: "Kumaripati, Lalitpur",
            hint: "Nepal",
          },
        ].map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                group relative rounded-3xl p-8
                bg-white
                border border-gray-200
                shadow-sm hover:shadow-lg
                transition
              "
            >
              {/* Accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-red-500 opacity-0 group-hover:opacity-100 transition" />

              <div className="text-center relative z-10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition">
                  <Icon size={26} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-700 font-medium">{item.value}</p>
                <p className="text-sm text-gray-500 mt-2">{item.hint}</p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* SOCIAL MEDIA */}
      <section className="max-w-5xl mx-auto px-6 mb-28 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Connect With Us
        </h2>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/suyancons07"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center justify-center
              h-14 w-14 rounded-full
              border border-gray-300
              text-gray-600
              hover:bg-red-500 hover:border-red-500 hover:text-white
              transition
            "
          >
            <Facebook size={24} />
          </a>

          <a
            href="https://www.instagram.com/suyancons07"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center justify-center
              h-14 w-14 rounded-full
              border border-gray-300
              text-gray-600
              hover:bg-red-500 hover:border-red-500 hover:text-white
              transition
            "
          >
            <Instagram size={24} />
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section className="max-w-6xl mx-auto px-6 mb-28">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Location
        </h2>

        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white">
          <iframe
            title="Suyan Education Pvt. Ltd."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.019390480651!2d85.3192551!3d27.6716318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f116f1ae53%3A0x4a445bf972ec2196!2sSuyan%20Education%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1736400000000"
            className="w-full h-[450px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* QR */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Quick Contact
        </h2>

        <p className="text-gray-600 mb-8">
          Scan the QR code to quickly reach us.
        </p>

        <div className="flex justify-center">
          <Image
            src="/Pin point Location.png"
            alt="Contact QR Code"
            width={260}
            height={260}
            className="rounded-2xl border border-gray-200 shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
