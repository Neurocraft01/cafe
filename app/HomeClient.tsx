"use client";

import Link from "next/link";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Coffee, Wifi, Leaf, Utensils, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { WaveDividerBottom, OrganicTornTop } from "@/components/NatureDividers";

const heroImages = [
  { src: "/DSC_5179.JPG", alt: "Café VanaBella interior seating area in Pimple Nilakh, Pune" },
  { src: "/DSC_4076.JPG", alt: "Cozy café seating and ambiance at Café VanaBella Pune" },
  { src: "/DSC_5171.JPG", alt: "Lush botanical décor at Café VanaBella Pimple Nilakh" },
  { src: "/DSC_5299.JPG", alt: "Artisan dining and events space at Café VanaBella Pune" },
  { src: "/NRD04414.JPG", alt: "Signature vegetarian dishes and artisan coffee at Café VanaBella Pune" },
  { src: "/scroll.jpeg", alt: "Artisan menu and tranquil vibes at Café VanaBella Pune" },
];

export default function HomeClient() {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* HERO SECTION - MODERN SPLIT LAYOUT */}
      <section className="relative min-h-[65vh] lg:h-screen pt-20 grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
        
        {/* LEFT SIDE - Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 lg:space-y-6"
          >
            {/* Badge */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-400/30"
              >
                <Leaf className="w-4 h-4 text-emerald-300 fill-emerald-300" />
                <span className="text-emerald-100 text-sm font-bold tracking-wider">100% PURE VEG</span>
              </motion.div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cinzel font-bold text-white leading-tight tracking-tight"
              >
                Café VanaBella
                <span className="block text-xl md:text-2xl lg:text-3xl font-serif font-light text-emerald-200 mt-2 tracking-normal">
                  Pure Veg Café &amp; Coworking Space in Pimple Nilakh, Pune
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-16 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                <p className="text-emerald-100 text-sm md:text-base uppercase tracking-[0.3em] font-light">
                  Est. 2024
                </p>
              </motion.div>
            </div>

            {/* Quick Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <MapPin className="w-6 h-6 text-emerald-300 mb-2" />
                <p className="text-white text-sm font-bold">Pimple Nilakh</p>
                <p className="text-emerald-200 text-xs">Pune, Maharashtra</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <Clock className="w-6 h-6 text-emerald-300 mb-2" />
                <p className="text-white text-sm font-bold">Open Daily</p>
                <p className="text-emerald-200 text-xs">11:00 AM - 11:00 PM</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/reservations"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-950 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-emerald-50 transition-all shadow-2xl hover:shadow-emerald-500/20"
                >
                  <span>Book a Table</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-800/60 backdrop-blur-md text-white border border-emerald-400/30 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-emerald-800 transition-all"
                >
                  <Utensils className="w-5 h-5" />
                  <span>View Menu</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Image Slideshow */}
        <div className="relative h-[50vh] lg:h-full overflow-hidden lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={heroImages[currentImageIndex].src}
                alt={heroImages[currentImageIndex].alt}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-transparent to-emerald-900/30"></div>
              
              {/* Image Counter */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl"
              >
                <span className="text-emerald-900 font-bold text-sm">
                  {currentImageIndex + 1} / {heroImages.length}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-8 z-10 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? 'w-12 bg-white' 
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-8 right-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="absolute bottom-20 left-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-emerald-800 text-xs uppercase tracking-widest font-bold">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-600 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-12 px-4 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Coffee, title: "Artisan Coffee", desc: "Sourced from sustainable farms, roasted to perfection." },
            { icon: Leaf, title: "Organic Ingredients", desc: "Farm-to-table freshness in every single dish." },
            { icon: Wifi, title: "Coworking Space", desc: "High-speed fiber internet in a serene environment." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-10 bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 text-center cursor-pointer relative overflow-hidden border border-emerald-50"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex p-6 bg-emerald-50 text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500 rounded-full shadow-inner"
              >
                <feature.icon size={32} />
              </motion.div>
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-emerald-950">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed font-serif">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMAGE & TEXT SECTION */}
      <section className="py-16 bg-emerald-50 relative">
        <OrganicTornTop fill="#ffffff" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl lg:order-2"
          >
            <Image 
              src="/DSC_4079.JPG"
              alt="Green, nature-inspired café interior at Café VanaBella Pune"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-8 flex flex-col justify-center items-center text-center shadow-xl hidden md:flex rounded-tl-[3rem]">
              <span className="text-5xl font-cinzel font-bold text-emerald-900">4.9</span>
              <div className="flex gap-1 text-yellow-500 my-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Google Reviews</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:order-1"
          >
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight text-emerald-950">
              A Symphony of <br/> <span className="italic text-emerald-600 font-serif">Taste &amp; Tranquility</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-serif">
              At VanaBella, we believe that dining is not just about food—it's about the experience. 
              Our space is designed to be a sanctuary from the urban chaos, where the aroma of freshly 
              brewed coffee mingles with the scent of indoor greenery.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-serif">
              Whether you're here for a power breakfast, a lazy afternoon with a book, or a productive 
              coworking session, our doors are open to nourish both your body and soul.
            </p>
            <div className="pt-8">
              <Link href="/about" className="inline-block px-8 py-4 bg-emerald-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl rounded-full">
                Read Our Story
              </Link>
            </div>
          </motion.div>
        </div>
        
        <WaveDividerBottom fill="#ffffff" />
      </section>

      {/* MENU PREVIEW */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Culinary Delights</span>
          <h2 className="text-4xl font-serif font-bold mt-3">Chef Special Dishes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { name: "Vanabella Jungle Chaat", price: "₹289", desc: "Our signature street food fusion creation." },
            { name: "Chef Special Sandwich", price: "₹229", desc: "Chef's unique creation with premium ingredients." },
            { name: "Pesto Perfection", price: "₹349", desc: "Basil pesto sauce with pine nuts." },
            { name: "Chef Special Wrap", price: "₹399", desc: "Exclusive wrap with premium ingredients." }
          ].map((item, idx) => (
            <div key={idx} className="group flex justify-between items-baseline border-b border-gray-200 pb-4 hover:border-black transition-colors">
              <div className="flex-1">
                <h4 className="text-xl font-serif font-bold mb-1 group-hover:pl-2 transition-all">{item.name}</h4>
                <p className="text-sm text-gray-500 italic">{item.desc}</p>
              </div>
              <span className="text-lg font-bold ml-4">{item.price}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/menu" className="inline-block px-8 py-3 border border-black text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 bg-black text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready to Experience VanaBella?</h2>
          <p className="text-gray-400 text-lg font-light">
            Join us for an unforgettable dining experience or book your spot in our coworking space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/reservations" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors">
              Reserve Table
            </Link>
            <Link href="/coworking" className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
              Book Workspace
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
