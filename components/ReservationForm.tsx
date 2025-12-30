"use client";

import { useState } from "react";
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      // 1. Send data to our API (Resend + Google Calendar)
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit reservation');
      } else {
        console.log("Reservation API Success:", data);
      }

      // 2. Send Auto-reply via EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        try {
          // Using object syntax for options in EmailJS v4
          await emailjs.send(
            serviceId,
            templateId,
            {
              to_name: formData.name,
              to_email: formData.email,
              email: formData.email, // Redundant field for compatibility
              reply_to: formData.email, // Redundant field for compatibility
              reservation_date: formData.date,
              reservation_time: formData.time,
              guests: formData.guests,
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
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          specialRequests: "",
        });
      }, 5000);

    } catch (error: any) {
      console.error("Submission Error:", error);
      let message = "Something went wrong. Please try again.";
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'object' && error !== null) {
        // Handle EmailJS error object or other non-Error objects
        message = JSON.stringify(error);
      }
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-black">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="py-24 px-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h3 className="text-3xl font-serif font-bold mb-4">Reservation Confirmed!</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-2">
              Thank you for choosing VanaBella. We've received your reservation request.
            </p>
            <p className="text-sm text-gray-500">
              You'll receive a confirmation call shortly at <span className="font-semibold">{formData.phone}</span>
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {errorMessage && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                {errorMessage}
              </div>
            )}

            {/* Personal Information Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-2"
              >
                <label className="text-sm font-semibold text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
                />
              </motion.div>
            </div>

            {/* Email Field */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
              />
            </motion.div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                <label className="text-sm font-semibold text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all text-gray-800"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <label className="text-sm font-semibold text-gray-700">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all text-gray-800"
                />
              </motion.div>
            </div>

            {/* Number of Guests */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-gray-700">Number of Guests</label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                min="1"
                max="20"
                placeholder="2"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
              />
            </motion.div>

            {/* Special Requests */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-gray-700">Special Requests (Optional)</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                placeholder="Any special occasions or dietary requirements?"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3.5 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all resize-none text-gray-800 placeholder-gray-400"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="pt-4"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 px-8 rounded-lg font-bold text-base hover:from-black hover:to-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Reserve Table
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
