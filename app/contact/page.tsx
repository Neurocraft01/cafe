"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Send to API (Resend)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("API Error:", text);
        throw new Error('Failed to send message');
      }

      // 2. Send Auto-reply via EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              to_name: formData.name,
              to_email: formData.email,
              email: formData.email, // Redundant field for compatibility
              reply_to: formData.email, // Redundant field for compatibility
              subject: formData.subject,
              message: formData.message,
            },
            {
              publicKey: publicKey,
            }
          );
        } catch (emailError: any) {
          console.error("EmailJS Auto-reply failed:", JSON.stringify(emailError));
        }
      } else {
        console.warn("EmailJS credentials missing. Check .env.local");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error: any) {
      console.error("Contact Error:", error);
      let message = "Failed to send message. Please try again.";
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'object' && error !== null) {
        message = JSON.stringify(error);
      }
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors"
                  >
                    <option>General Inquiry</option>
                    <option>Private Events</option>
                    <option>Press & Media</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4} 
                    className="w-full bg-white border-b border-gray-200 p-3 focus:border-black focus:outline-none transition-colors resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={14} />
                </button>
              </form>
            )}
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
                      <a href="https://maps.app.goo.gl/Q1xMhJLM5V2K2ZCM8" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-black transition-colors">
                        3, GK Lane, near Stimal Hospital,<br />Vishal Nagar, Pimple Nilakh,<br />Pimpri-Chinchwad, Maharashtra 411027
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 text-gray-400" />
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">8972493209 / 9074627887 / 8097991266</p>
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
