"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, Music, Gift, Cake, Star } from "lucide-react";

const celebrationMoments = [
  { src: "/celebration1.JPG.jpeg", alt: "Birthday party celebration at Café VanaBella Pune" },
  { src: "/celebration2.JPG.jpeg", alt: "Event decoration and dining at Café VanaBella Pune" },
  { src: "/celebration3.png", alt: "Private celebration moments at Café VanaBella Pune" },
  { src: "/celebration4.png", alt: "Anniversary celebration gathering at Café VanaBella Pune" },
  { src: "/celebration5.png", alt: "Festive gathering and party decor at Café VanaBella Pune" },
  { src: "/celebration6.png", alt: "Group celebration at Café VanaBella Pune" }
];

export default function CelebrationClient() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/DSC_4076.JPG"
            alt="Private celebrations and events venue at Café VanaBella Pune"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 py-12 md:py-16 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 font-cinzel leading-tight"
          >
            Host Your Celebration at <span className="italic font-light font-serif text-emerald-200">Café VanaBella</span>
          </motion.h1>
          <p className="text-emerald-100 font-light tracking-widest uppercase text-sm md:text-base max-w-2xl mx-auto">
            Make your birthdays, anniversaries, and special moments unforgettable
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Your Perfect <span className="italic text-gray-500">Celebration Spot</span></h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Whether it's a birthday bash, an anniversary dinner, or a corporate gathering, VanaBella offers the perfect blend of ambiance, culinary delight, and impeccable service. Let us handle the details while you make memories.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: Users, label: "Private Areas" },
              { icon: Music, label: "Music System" },
              { icon: Gift, label: "Decorations" },
              { icon: Star, label: "Dedicated Staff" },
              { icon: Calendar, label: "Flexible Booking" },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 border border-gray-100 hover:border-black transition-colors"
              >
                <feature.icon size={24} className="mb-4 text-gray-400" />
                <span className="text-sm font-bold uppercase tracking-widest">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VANABELLA */}
      <section className="py-24 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-emerald-950">Why Choose <span className="italic text-emerald-600">VanaBella</span>?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the perfect blend of celebration and nature in our thoughtfully designed space.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Star size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Exquisite Ambiance</h3>
              <p className="text-gray-600 leading-relaxed">A nature-inspired setting that provides the perfect backdrop for your photos and memories.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Cake size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Gourmet Catering</h3>
              <p className="text-gray-600 leading-relaxed">Customizable menus featuring our signature dishes and beverages to delight your guests.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Gift size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Personalized Decor</h3>
              <p className="text-gray-600 leading-relaxed">From balloons to floral arrangements, we tailor the decor to match your theme perfectly.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Users size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Dedicated Team</h3>
              <p className="text-gray-600 leading-relaxed">Our experienced staff will handle everything from planning to execution, so you can enjoy.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Music size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Entertainment</h3>
              <p className="text-gray-600 leading-relaxed">Music systems are available to keep the party going all night long.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 border border-emerald-100 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center mb-6 rounded-full">
                <Calendar size={24} className="text-emerald-800" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-emerald-950">Flexible Booking</h3>
              <p className="text-gray-600 leading-relaxed">Easy reservation process with flexible slots to suit your schedule and requirements.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPTURED MOMENTS */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4 text-emerald-950">Captured <span className="italic text-emerald-600">Moments</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Glimpses of joy and celebration at VanaBella.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {celebrationMoments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden group rounded-lg"
              >
                <Image 
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL SPACE */}
      <section className="py-24 px-4 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/personalspace.png"
                alt="Romantic private dining space at Café VanaBella Pune"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-rose-500"> Exclusive</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                Your <span className="italic text-rose-400">Personal Space</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Looking for an intimate setting for a special date night, anniversary, or a quiet celebration for two? VanaBella offers cozy, private corners surrounded by lush greenery — the perfect backdrop for your most cherished moments.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  Private seating amidst 20+ plants
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  Customized table setup &amp; decor on request
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  Curated menu for couples &amp; small groups
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  Ambient lighting &amp; soothing background music
                </li>
              </ul>
              <Link
                href="/reservations"
                className="inline-block mt-4 px-8 py-4 bg-rose-500 text-white font-bold uppercase tracking-widest text-sm hover:bg-rose-600 transition-colors rounded-lg shadow-lg"
              >
                Reserve Your Spot
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Celebration Packages</h2>
            <p className="text-gray-500">Create unforgettable memories with our curated celebration packages.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Package",
                description: "Perfect for intimate gatherings and casual celebrations.",
                features: [
                  "Reserved seating in the main dining area",
                  "3-Course Meal (1 Starter, 1 Main Course, 1 Coolers)",
                  "Basic decoration setup",
                  "Smooth background music system",
                  "2.5 Hour Event Window",
                  "Standard service"
                ],
                highlight: false
              },
              {
                name: "Medium Package",
                description: "Elevated privacy and service for special occasions.",
                features: [
                  "Exclusive access to a Private Area",
                  "3-Course Meal (1 Starter, 1 Main Course, 1 Dessert)",
                  "Complimentary Welcome Drink",
                  "Dedicated Server for your group",
                  "Enhanced decoration setup",
                  "3 Hour Window"
                ],
                highlight: true
              },
              {
                name: "Premium Package",
                description: "The ultimate experience with full exclusivity and customization.",
                features: [
                  "Full Venue Access (including Kraken Habitat)",
                  "Expanded 3-Course Meal (2 Starters, 1 Main Course, 1 Dessert)",
                  "Complimentary Welcome Drink",
                  "Dedicated Server and event support",
                  "Full, immersive decoration package",
                  "Branding Space available within the cafe",
                  "Option to add activities (e.g., Workshops)",
                  "3.5 Hour Window"
                ],
                highlight: false
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 border ${plan.highlight ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-black'} flex flex-col`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${plan.highlight ? 'bg-white' : 'bg-black'}`}></span>
                      <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/reservations" 
                  className={`w-full py-4 text-center text-sm font-bold uppercase tracking-widest border-2 transition-all ${
                    plan.highlight 
                      ? 'border-white text-white hover:bg-white hover:text-black' 
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to Celebrate?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Book your spot now and let us make your special day truly magical.
          </p>
          <Link 
            href="/reservations" 
            className="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Reserve Your Date
          </Link>
        </div>
      </section>

    </div>
  );
}
