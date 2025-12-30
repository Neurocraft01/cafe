"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/NRD04368.JPG"
            alt="Contact Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 font-cinzel"
          >
            Get in <span className="italic font-light font-serif">Touch</span>
          </motion.h1>
          <p className="text-emerald-100 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
            We'd love to hear from you
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-8 md:p-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                  <input type="email" className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                <select className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors">
                  <option>General Inquiry</option>
                  <option>Private Events</option>
                  <option>Press & Media</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="bg-black text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                Send Message <Send size={14} />
              </button>
            </form>
          </motion.div>

          {/* INFO & MAP */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Visit Us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Located in Pimple Nilakh, Pune, VanaBella offers a green, plant-filled oasis where nature meets flavor. With 200+ plants and garden seating, join us for an unforgettable dining experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 text-gray-400" />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Address</h4>
                      <a href="https://maps.app.goo.gl/HwckxhpnaBzbqRzN8" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-black transition-colors">
                        3, GK Lane, near Stimal Hospital,<br />Vishal Nagar, Pimple Nilakh,<br />Pimpri-Chinchwad, Maharashtra 411027
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 text-gray-400" />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">8972493209 / 90746 27887 / 80975 91266</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 text-gray-400" />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">hello@cafevanabella.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 text-gray-400" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Hours</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between gap-8">
                        <span>Monday - Sunday</span>
                        <span>11:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-green-600 font-semibold">⭐ Rated 4.8/5</span>
                        <span className="text-gray-500">55+ Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP EMBED */}
            <div className="h-[300px] w-full bg-gray-100 relative overflow-hidden">
               <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Cafe%20VanaBella%2C%20Pimple%20Nilakh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="grayscale hover:grayscale-0 transition-all duration-500"
               ></iframe>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
