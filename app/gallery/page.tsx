"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/DSC_3712.JPG", category: "Dishes" },
  { src: "/DSC_3767.JPG", category: "Dishes" },
  { src: "/DSC_3829.JPG", category: "Coolers" },
  { src: "/DSC_3867.JPG", category: "Cafe" },
  { src: "/DSC_4076.JPG", category: "Cafe" },
  { src: "/DSC_4079.JPG", category: "Cafe" },
  { src: "/DSC_4135.JPG", category: "Cafe" },
  { src: "/DSC_4313.JPG", category: "Celebration" },
  { src: "/DSC_5171.JPG", category: "Celebration" },
  { src: "/DSC_5179.JPG", category: "Cafe" },
  { src: "/image 3.jpg", category: "Cafe" },
  { src: "/DSC_5205.JPG", category: "Workshops" },
  { src: "/DSC_5299.JPG", category: "Workshops" },
  { src: "/IMG_7961.JPG", category: "Co-working" },
  { src: "/IMG_7962.JPG", category: "Co-working" },
  { src: "/IMG_7963.JPG", category: "Dishes" },
  { src: "/IMG_7964.JPG", category: "Co-working" },
  { src: "/NRD04393.JPG", category: "Dishes" },
  { src: "/NRD04399.JPG", category: "Dishes" },
  { src: "/NRD04413.JPG", category: "Coolers" },
  { src: "/NRD04368.JPG", category: "Dishes" },
  { src: "/NRD04414.JPG", category: "Dishes" },
  { src: "/image 1.jpg", category: "Cafe" },
  { src: "/image 2.jpg", category: "Cafe" },
  { src: "/image 4.jpg", category: "Dishes" },
];

const categories = ["All", "Celebration", "Cafe", "Co-working", "Dishes", "Coolers","Workshops"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/DSC_3767.JPG"
            alt="Gallery Hero"
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
            Our <span className="italic font-light font-serif">Gallery</span>
          </motion.h1>
          <p className="text-emerald-100 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
            A visual journey through our space and flavors
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="pt-16 pb-8 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-black text-white" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((img, index) => (
              <motion.div 
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square group cursor-pointer overflow-hidden bg-gray-100 rounded-2xl"
                onClick={() => setSelectedImage(index)}
              >
                <Image 
                  src={img.src}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/50 backdrop-blur px-3 py-1">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={galleryImages[selectedImage].src}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </div>

          <button 
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-8 left-0 right-0 text-center text-white/50 text-sm tracking-widest">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}

    </div>
  );
}
