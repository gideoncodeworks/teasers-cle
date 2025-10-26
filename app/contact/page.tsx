"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import data from "@/context/teasersCLE.json";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Get in Touch"
        subtitle="Join Us"
        description="Whether you're seeking a reservation, partnership, or simply want to stay informed—we'd love to hear from you."
        height="medium"
      />

      {/* Contact Form */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-md text-gradient mb-6">
                  Let's Connect
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours. For immediate inquiries, feel free to call or email us
                  directly.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-gold hover:text-gold/80 transition-colors"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="text-gold hover:text-gold/80 transition-colors"
                    >
                      {data.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-white/80">{data.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-8 border-t border-gold/20">
                <h3 className="text-white font-semibold mb-4">Hours</h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(data.contact.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-white/60 capitalize">{day}</span>
                      <span className="text-white/80">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {!formSubmitted ? (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                  onSubmit={(e) => {
                    // Let Netlify handle the form submission
                    // After submission, show success message
                    setTimeout(() => setFormSubmitted(true), 100);
                  }}
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm uppercase tracking-wider text-gold mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border border-gold/40 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm uppercase tracking-wider text-gold mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border border-gold/40 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm uppercase tracking-wider text-gold mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-transparent border border-gold/40 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="(216) 555-0000"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm uppercase tracking-wider text-gold mb-2"
                    >
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      className="w-full bg-black border border-gold/40 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="reservation">Event Reservation</option>
                      <option value="private-event">Private Event</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm uppercase tracking-wider text-gold mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-transparent border border-gold/40 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-plum border border-gold p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-white/80 mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="section-padding bg-gradient-to-br from-plum via-plum-dark to-black">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-white mb-8">
              Stay Connected
            </h2>
            <p className="text-lg text-white/80 mb-12">
              Follow us on social media for behind-the-scenes moments, event
              announcements, and culinary inspiration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(data.socials).map(([platform, url]) => {
                if (platform === "email") return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary capitalize"
                  >
                    {platform}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
