'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Coffee, MapPin, Phone, Wifi, Armchair, Leaf, Palette } from 'lucide-react';
import Image from 'next/image';

export default function CoworkingPage() {
  return (
    <div className='min-h-screen bg-white text-black selection:bg-black selection:text-white'>
      
      {/* HERO BANNER */}
      <section className='relative h-[60vh] flex items-center justify-center overflow-hidden bg-emerald-950'>
        <div className='absolute inset-0 z-0'>
          <Image 
            src='/IMG_7964.JPG'
            alt='Coworking Hero'
            fill
            className='object-cover opacity-60'
            priority
          />
        </div>
        <div className='relative z-10 text-center px-4 text-white max-w-4xl mx-auto'>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl md:text-6xl font-serif font-bold mb-4 font-cinzel'
          >
            Co-working Space at <br/> Cafe VanaBella
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-xl md:text-2xl font-light italic mb-6'
          >
            Work. Sip. Connect.
          </motion.p>
           <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-emerald-100 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed'
          >
            Experience a unique co-working space surrounded by nature and the enchanting animal habitat
          </motion.p>
        </div>
      </section>

      {/* Jungle Office Section */}
      <section className='py-20 px-4 bg-emerald-50/50'>
        <div className='container mx-auto max-w-5xl'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <div className='md:w-1/2'>
                    <h2 className='text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-2'>Your New Nature Office</h2>
                    <p className='text-emerald-600 font-bold tracking-wider text-sm uppercase mb-6'>For Freelancers & Creators</p>
                    
                    <p className='text-gray-700 text-lg leading-relaxed mb-6'>
                        Bored of the same four walls? Swap your cubicle for our cafe. We offer high-speed WiFi, dedicated power sockets, and the calming background sound of running water and birds. 
                    </p>
                    <p className='text-gray-700 text-lg leading-relaxed'>
                        It&apos;s the perfect &apos;Work-from-Nature&apos; spot at Cafe VanaBella to recharge your creativity on weekdays.
                    </p>
                </div>
                <div className='md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl'>
                     <Image 
                        src='/NRD04399.JPG'
                        alt='Jungle Office'
                        fill
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
      </section>

      {/* What's Included */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h2 className='text-3xl font-serif font-bold mb-12'>What&apos;s Included in Every Pass</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { icon: Wifi, label: 'High-speed Wi-Fi' },
              { icon: Armchair, label: 'Comfortable seating' },
              { icon: Leaf, label: 'Nature-themed ambiance' },
              { icon: Palette, label: 'Peaceful, creative work vibes' },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='flex flex-col items-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all'
              >
                <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-800'>
                    <feature.icon size={24} /> 
                </div>
                <span className='font-medium text-gray-800'>{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className='py-20 px-4 bg-gray-50'>
        <div className='container mx-auto max-w-6xl'>
            <div className='text-center mb-16'>
                 <h2 className='text-3xl md:text-5xl font-serif font-bold mb-4 font-cinzel'>Choose Your Pass</h2>
                 <p className='text-gray-500'>Co-working Hours: 10:30 AM - 8:00 PM</p>
                 <p className='text-sm text-gray-400 mt-2'>Additional Hour: ₹57 per hour</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Day Pass */}
                <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col relative hover:shadow-xl transition-shadow'>
                    <h3 className='text-2xl font-serif font-bold text-gray-900 mb-2'>Day Pass</h3>
                    <div className='text-4xl font-bold text-emerald-600 mb-6'>₹399</div>
                    
                    <div className='space-y-4 flex-grow'>
                        <div className='flex items-center gap-3 text-gray-600'>
                            <Clock size={18} />
                            <span>7 hours access</span>
                        </div>
                        <div className='p-4 bg-orange-50 rounded-lg border border-orange-100'>
                            <span className='text-sm font-bold text-orange-800 block mb-2'>Choose one:</span>
                            <ul className='space-y-2 text-sm text-gray-700'>
                                <li className='flex items-center gap-2'>
                                    <Check size={14} className='text-emerald-500'/> 2 Coffee/Tea
                                </li>
                                <li className='text-center font-bold text-gray-400 text-xs'>OR</li>
                                <li className='flex items-center gap-2'>
                                    <Check size={14} className='text-emerald-500'/> ₹100 Food Coupon
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 1-Week Pass */}
                <div className='bg-emerald-900 text-white rounded-2xl p-8 shadow-xl transform md:-translate-y-4 flex flex-col relative'>
                     <div className='absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg'>
                        POPULAR
                    </div>
                    <h3 className='text-2xl font-serif font-bold mb-2'>1-Week Pass</h3>
                    <div className='text-4xl font-bold text-emerald-400 mb-1'>₹2,699</div>
                    <div className='text-emerald-200 text-sm mb-6'>Valid for 30 days</div>
                    
                    <div className='space-y-4 flex-grow'>
                         <div className='flex items-center gap-3 text-emerald-100'>
                            <Clock size={18} />
                            <span>8 hours/day</span>
                        </div>
                        <div className='border-t border-emerald-800 pt-4 mt-4'>
                            <span className='text-sm font-bold text-emerald-400 block mb-3'>Includes:</span>
                             <ul className='space-y-3 text-sm text-emerald-100'>
                                <li className='flex items-center gap-2'>
                                    <Check size={16} className='text-emerald-400'/> 2 Coffee/Tea per day
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Check size={16} className='text-emerald-400'/> 10% OFF on total food bill
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 1-Month Pass */}
                 <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col relative hover:shadow-xl transition-shadow'>
                    <h3 className='text-2xl font-serif font-bold text-gray-900 mb-2'>1-Month Pass</h3>
                    <div className='text-4xl font-bold text-emerald-600 mb-1'>₹7,999</div>
                    <div className='text-gray-500 text-sm mb-6'>22 flexi working days, valid for 60 days</div>
                    
                    <div className='space-y-4 flex-grow'>
                         <div className='flex items-center gap-3 text-gray-600'>
                            <Clock size={18} />
                            <span>8 hours/day</span>
                        </div>
                         <div className='border-t border-gray-100 pt-4 mt-4'>
                            <span className='text-sm font-bold text-gray-900 block mb-3'>Includes:</span>
                             <ul className='space-y-3 text-sm text-gray-700'>
                                <li className='flex items-center gap-2'>
                                    <Check size={16} className='text-emerald-500'/> 2 Coffee/Tea per day
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Check size={16} className='text-emerald-500'/> 10% OFF on total food bill
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Check size={16} className='text-emerald-500'/> 1 FREE Art Workshop
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Check size={16} className='text-emerald-500'/> 1 FREE Visit to Kraken Habitat
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='text-center mt-12 text-gray-500 font-serif italic text-lg'>
                Perfect for freelancers, students, remote workers, and creators!
            </div>
        </div>
      </section>

      {/* Terms & Conditions & Info */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-4xl'>
            <div className='bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100'>
                <div className='grid md:grid-cols-2 gap-12'>
                    <div>
                        <h3 className='text-xl font-serif font-bold mb-4 flex items-center gap-2'>
                            Terms & Conditions
                        </h3>
                        <ul className='space-y-3 list-disc list-inside text-gray-600 text-sm md:text-base'>
                            <li>Outside food is not allowed.</li>
                            <li>Groups of 10+ people can opt for a lunch meal at ₹350 per person (coupon applicable).</li>
                            <li>Lunch meal bookings must be informed 1 day in advance.</li>
                        </ul>
                    </div>

                    <div>
                         <h3 className='text-xl font-serif font-bold mb-4'>Contact & Location</h3>
                         <div className='space-y-4'>
                            <div className='flex items-start gap-3 text-gray-600'>
                                <MapPin className='flex-shrink-0 mt-1 text-emerald-600' size={20} />
                                <p className='text-sm md:text-base'>3, GK Lane, near Srimal Hospital, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Maharashtra 411027</p>
                            </div>
                             <div className='flex items-start gap-3 text-gray-600'>
                                <Phone className='flex-shrink-0 mt-1 text-emerald-600' size={20} />
                                <p className='text-sm md:text-base'>79724 93209 / 90746 27887 / 80979 91266</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
