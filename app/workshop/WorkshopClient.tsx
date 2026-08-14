"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChefHat, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const workshopGallery = [
  { src: "/workshop1.jpg.jpeg", alt: "Pottery and art crafting session at Café VanaBella Pune" },
  { src: "/workshop2.jpeg", alt: "Hands-on pottery workshop at Café VanaBella Pune" },
  { src: "/workshop3.jpeg", alt: "Interactive board game workshop at Café VanaBella Pune" },
  { src: "/workshop4.jpeg", alt: "Perfume crafting masterclass at Café VanaBella Pune" },
  { src: "/workshop5.jpeg", alt: "Artisan chocolate making at Café VanaBella Pune" },
  { src: "/workshop6.jpeg", alt: "Community creative workshop at Café VanaBella Pune" }
];

export default function WorkshopClient() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/DSC_5171.JPG"
            alt="Creative community workshops at Café VanaBella Pune"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 py-12 md:py-16 text-white max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm uppercase tracking-[0.3em] font-bold">
              <ChefHat size={20} className="text-emerald-300" />
              Learn • Create • Celebrate
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight font-cinzel"
          >
            Workshops
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-emerald-100 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Explore art, games &amp; hands-on making sessions • Celebrate creativity in our beautiful space
          </motion.p>
        </div>
      </section>

      {/* WORKSHOPS LIST */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Creative &amp; Culinary <span className="italic text-gray-500">Workshops</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore creativity, fun and hands-on experiences at VanaBella</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {[
              {
                title: "Art Workshop",
                date: "Every Saturday",
                time: "11:00 AM - 2:00 PM",
                image: "/DSC_5179.JPG",
                imageAlt: "Art and canvas painting workshop session at Café VanaBella Pune",
                description: "Unleash your creativity with canvas painting, clay art, pottery and many more — all surrounded by nature's calm at VanaBella.",
                level: ""
              },
              {
                title: "Game Workshop",
                date: "Every Sunday",
                time: "11:00 AM - 3:00 PM",
                image: "/DSC_5205.JPG",
                imageAlt: "Board games and community social workshop at Café VanaBella Pune",
                description: "Gather your crew for board games, housie, fun learning activities and many more — perfect for bonding over good vibes and great food.",
                level: ""
              },
              {
                title: "Making Workshop",
                date: "Bi-weekly",
                time: "11:00 AM - 2:00 PM",
                image: "/DSC_5299.JPG",
                imageAlt: "Perfume and chocolate making workshop at Café VanaBella Pune",
                description: "Craft your own signature perfume, handmade chocolates and many more in our guided making sessions at VanaBella.",
                level: ""
              }
            ].map((workshop, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row bg-white border border-gray-100 hover:border-black transition-all duration-300"
              >
                <div className="relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden bg-gray-100">
                  <Image 
                    src={workshop.image}
                    alt={workshop.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {workshop.level && (
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                      {workshop.level}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-gray-600 transition-colors">{workshop.title}</h3>
                    <p className="text-gray-500 leading-relaxed max-w-xl">{workshop.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Clock size={16} />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <ChefHat size={16} />
                      <span>Expert Instructor</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="self-start px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    Reserve Spot <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP GALLERY */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Workshop <span className="italic text-gray-500">Gallery</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Moments captured from our hands-on workshops and creative sessions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {workshopGallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <Image 
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Private Workshops</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Looking for a unique team building event or private celebration? We offer customized private workshops for groups of 8-20 people.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            Inquire Now
          </Link>
        </div>
      </section>

    </div>
  );
}
