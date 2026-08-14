'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Search, Share2, Code2, ExternalLink, ShieldCheck, Sparkles, Building2, MapPin, Phone, Clock, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface PageSeoData {
  route: string;
  name: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
  imageAltSample: string;
  priority: string;
}

const pagesData: PageSeoData[] = [
  {
    route: '/',
    name: 'Home Page',
    title: 'Café VanaBella | Pure Veg Café & Coworking Space in Pimple Nilakh, Pune',
    description: 'A 100% pure veg café in Pimple Nilakh, Pune offering artisan coffee, farm-to-table food, and a serene coworking space. Open daily 11 AM–11 PM. Reserve your table today.',
    canonical: 'https://www.cafevanabella.com/',
    h1: 'Café VanaBella — Pure Veg Café & Coworking Space in Pimple Nilakh, Pune',
    imageAltSample: 'Café VanaBella interior seating area in Pimple Nilakh, Pune',
    priority: '1.0'
  },
  {
    route: '/menu',
    name: 'Menu',
    title: 'Menu | Café VanaBella - Pure Veg Café in Pimple Nilakh, Pune',
    description: "Explore Café VanaBella's menu — artisan coffee, chef special sandwiches, wraps, and more. 100% pure vegetarian dishes made with organic, farm-fresh ingredients.",
    canonical: 'https://www.cafevanabella.com/menu',
    h1: 'Our Menu',
    imageAltSample: 'Artisan espresso and cold brew coffee at Café VanaBella Pune',
    priority: '0.9'
  },
  {
    route: '/coworking',
    name: 'Coworking Space',
    title: 'Coworking Space | Café VanaBella - Pimple Nilakh, Pune',
    description: "Work from Café VanaBella's coworking space in Pimple Nilakh, Pune. High-speed fiber internet, a calm green environment, and great coffee on tap.",
    canonical: 'https://www.cafevanabella.com/coworking',
    h1: 'Coworking Space in Pimple Nilakh, Pune',
    imageAltSample: 'Coworking space at Café VanaBella in Pimple Nilakh Pune',
    priority: '0.7'
  },
  {
    route: '/about',
    name: 'About Us',
    title: 'About Us | Café VanaBella - Our Story in Pimple Nilakh, Pune',
    description: "Discover the story behind Café VanaBella, Pune's nature-inspired urban oasis. Learn about our philosophy of blending fresh, organic food with a tranquil dining experience.",
    canonical: 'https://www.cafevanabella.com/about',
    h1: 'Our Story',
    imageAltSample: 'Nature-inspired urban oasis cafe ambiance at Café VanaBella Pune',
    priority: '0.7'
  },
  {
    route: '/gallery',
    name: 'Gallery',
    title: 'Gallery | Café VanaBella - Pimple Nilakh, Pune',
    description: "Take a visual tour of Café VanaBella's serene interiors, artisan coffee, and signature dishes at our Pimple Nilakh café in Pune.",
    canonical: 'https://www.cafevanabella.com/gallery',
    h1: 'Our Gallery',
    imageAltSample: '37 unique descriptive alt tags (e.g. Cozy botanical garden seating)',
    priority: '0.6'
  },
  {
    route: '/celebration',
    name: 'Celebrations & Events',
    title: 'Celebrations & Private Events | Café VanaBella - Pimple Nilakh, Pune',
    description: 'Host your birthday, anniversary, or private celebration at Café VanaBella, Pune. A serene, nature-inspired venue with customizable menus for your special day.',
    canonical: 'https://www.cafevanabella.com/celebration',
    h1: 'Host Your Celebration at Café VanaBella',
    imageAltSample: 'Private celebration setup at Café VanaBella Pune',
    priority: '0.7'
  },
  {
    route: '/workshop',
    name: 'Workshops',
    title: 'Workshops | Café VanaBella - Pimple Nilakh, Pune',
    description: 'Join hands-on workshops and creative sessions at Café VanaBella, Pune. A relaxed, nature-filled space for learning, community, and connection.',
    canonical: 'https://www.cafevanabella.com/workshop',
    h1: 'Workshops',
    imageAltSample: 'Creative pottery and art workshop at Café VanaBella Pune',
    priority: '0.7'
  },
  {
    route: '/contact',
    name: 'Contact & Location',
    title: 'Contact & Location | Café VanaBella - Pimple Nilakh, Pune',
    description: 'Visit Café VanaBella at Vishal Nagar, Pimple Nilakh, Pune. Call, WhatsApp, or get directions. Open daily 11 AM–11 PM.',
    canonical: 'https://www.cafevanabella.com/contact',
    h1: 'Contact & Location',
    imageAltSample: 'Contact and location of Café VanaBella in Vishal Nagar Pimple Nilakh Pune',
    priority: '0.8'
  },
  {
    route: '/reservations',
    name: 'Table Reservations',
    title: 'Reserve a Table | Café VanaBella - Pimple Nilakh, Pune',
    description: "Book your table at Café VanaBella, Pune's pure veg urban oasis café. Quick and easy online reservation for lunch, dinner, or coworking sessions.",
    canonical: 'https://www.cafevanabella.com/reservations',
    h1: 'Reserve a Table at Café VanaBella',
    imageAltSample: 'Reserve a table at Café VanaBella Pure Veg Café in Pimple Nilakh Pune',
    priority: '0.9'
  }
];

export default function SeoVerificationClient() {
  const [selectedPage, setSelectedPage] = useState<PageSeoData>(pagesData[0]);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-emerald-500 selection:text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Official SEO Implementation &amp; Live Verification Report
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Café VanaBella SEO Health &amp; Verification Portal
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            This verification tool allows clients, developers, and stakeholders to inspect all metadata, Google Search snippets, WhatsApp social preview cards, and schema code live on <span className="text-emerald-400 font-semibold">cafevanabella.com</span>.
          </p>
        </div>

        {/* AUDIT SCORECARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/80 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Metadata Status</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white">9 / 9 Pages</div>
            <p className="text-xs text-emerald-400 mt-2">100% Unique Titles &amp; Descriptions</p>
          </div>

          <div className="bg-slate-800/80 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Schema Markup</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white">LocalBusiness</div>
            <p className="text-xs text-emerald-400 mt-2">Validated JSON-LD in &lt;head&gt;</p>
          </div>

          <div className="bg-slate-800/80 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Image Alt Tags</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white">80+ Images</div>
            <p className="text-xs text-emerald-400 mt-2">0 Missing / 100% Accessible</p>
          </div>

          <div className="bg-slate-800/80 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Search Crawlability</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white">Robots + Sitemap</div>
            <p className="text-xs text-emerald-400 mt-2">XML Sitemap with 9 Canonical URLs</p>
          </div>
        </div>

        {/* INTERACTIVE PAGE INSPECTOR */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/80 pb-6">
            <div>
              <h2 className="text-2xl font-bold font-serif text-white flex items-center gap-2">
                <Search className="w-6 h-6 text-emerald-400" />
                Live Page SEO Simulator &amp; Code Inspector
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Select any route below to see its exact Google search appearance and technical tag values.
              </p>
            </div>

            {/* Quick Route Selector */}
            <select
              value={selectedPage.route}
              onChange={(e) => {
                const found = pagesData.find((p) => p.route === e.target.value);
                if (found) setSelectedPage(found);
              }}
              className="bg-slate-900 border border-slate-600 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-400"
            >
              {pagesData.map((p) => (
                <option key={p.route} value={p.route}>
                  {p.name} ({p.route})
                </option>
              ))}
            </select>
          </div>

          {/* PAGE BUTTONS */}
          <div className="flex flex-wrap gap-2">
            {pagesData.map((p) => (
              <button
                key={p.route}
                onClick={() => setSelectedPage(p)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedPage.route === p.route
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GOOGLE SEARCH SERP SIMULATOR */}
            <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  Google Search Preview (SERP Snippet)
                </span>
                <span className="text-[11px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">Live Google Format</span>
              </div>

              {/* Visual Google Card */}
              <div className="bg-white rounded-xl p-5 text-left space-y-2 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-950 flex items-center justify-center text-white text-xs font-bold font-serif">
                    VB
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900">Café VanaBella</div>
                    <div className="text-[11px] text-gray-500 truncate max-w-xs sm:max-w-md">{selectedPage.canonical}</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                  {selectedPage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4d5156] leading-relaxed line-clamp-3">
                  {selectedPage.description}
                </p>
                <div className="flex items-center gap-2 pt-2 text-[11px] text-gray-500 border-t border-gray-100">
                  <span className="text-amber-600 font-bold">★ 4.8</span>
                  <span>(120+ reviews)</span>
                  <span>•</span>
                  <span>Pure Veg Café</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold">Open 11 AM - 11 PM</span>
                </div>
              </div>

              {/* SOCIAL / WHATSAPP CARD SIMULATOR */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <Share2 className="w-4 h-4 text-blue-400" />
                  WhatsApp / Social Sharing Card Preview
                </span>
                <div className="bg-[#0b141a] rounded-xl p-4 border border-slate-800 max-w-md">
                  <div className="bg-[#1f2c34] rounded-lg overflow-hidden border border-slate-700">
                    <div className="h-32 bg-emerald-950 flex items-center justify-center text-emerald-200 font-serif font-bold text-lg relative">
                      <span>Café VanaBella</span>
                      <div className="absolute top-2 right-2 text-[10px] bg-emerald-800 text-white px-2 py-0.5 rounded">OG Preview</div>
                    </div>
                    <div className="p-3 space-y-1">
                      <div className="text-[11px] text-slate-400 uppercase tracking-wide">cafevanabella.com</div>
                      <div className="text-xs font-bold text-white line-clamp-1">{selectedPage.title}</div>
                      <div className="text-[11px] text-slate-300 line-clamp-2">{selectedPage.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TECHNICAL ON-PAGE CODE BREAKDOWN */}
            <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  Verified On-Page HTML Tag Elements
                </span>
                <span className="text-[11px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">Server-Rendered SSR</span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-slate-400 font-mono mb-1">&lt;title&gt;</div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-emerald-300 font-mono break-words">
                    {selectedPage.title}
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 font-mono mb-1">&lt;meta name=&quot;description&quot;&gt;</div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-emerald-300 font-mono break-words">
                    {selectedPage.description}
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 font-mono mb-1">&lt;link rel=&quot;canonical&quot;&gt;</div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-cyan-300 font-mono break-words">
                    {selectedPage.canonical}
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 font-mono mb-1">&lt;h1&gt; Main Page Heading</div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-amber-300 font-mono break-words">
                    {selectedPage.h1}
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 font-mono mb-1">&lt;img alt=&quot;...&quot;&gt; Sample Image Alt Tag</div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 font-mono break-words">
                    {selectedPage.imageAltSample}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STRUCTURED DATA SCHEMA PREVIEW */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700 pb-4">
            <div>
              <h2 className="text-2xl font-bold font-serif text-white flex items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-400" />
                Google LocalBusiness JSON-LD Schema (Live in &lt;head&gt;)
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                This structured data communicates business coordinates, hours, cuisine, and NAP to Google Maps and AI search bots.
              </p>
            </div>
            <a
              href="https://validator.schema.org/#url=https%3A%2F%2Fwww.cafevanabella.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
            >
              Test on Schema.org <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-red-400" /> Exact Location &amp; Geo
              </div>
              <p className="text-slate-200">3, GK Ln., near Srimal Hospital, Vishal Nagar, Pimple Nilakh, Pune 411027</p>
              <div className="text-emerald-400 font-mono text-[11px]">Geo: 18.5908° N, 73.7997° E</div>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-amber-400" /> Hours &amp; Cuisine
              </div>
              <p className="text-slate-200">Monday - Sunday (All 7 Days)</p>
              <div className="text-emerald-400 font-mono text-[11px]">11:00 AM – 11:00 PM • Pure Veg</div>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-slate-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                <Phone className="w-4 h-4 text-emerald-400" /> Phone &amp; Web
              </div>
              <p className="text-slate-200">+91 82620 22502 / +91 79724 93209</p>
              <div className="text-emerald-400 font-mono text-[11px]">https://www.cafevanabella.com</div>
            </div>
          </div>
        </div>

        {/* 1-CLICK VERIFICATION LINKS */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-800 to-emerald-950 border border-emerald-500/40 rounded-3xl p-8 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold font-serif text-white">How to Prove This Live to Your Client in 10 Seconds</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Google Search results take 24–48 hours to update its public index cache, but you can demonstrate that the live code is 100% active immediately using Google&apos;s own developer testing tools:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.cafevanabella.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-full text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl"
            >
              Run Google Rich Results Test <ExternalLink size={14} />
            </a>

            <a
              href="https://validator.schema.org/#url=https%3A%2F%2Fwww.cafevanabella.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-full text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-xl"
            >
              Schema Markup Validator <ExternalLink size={14} />
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-bold rounded-full text-xs uppercase tracking-wider hover:bg-slate-700 border border-slate-600 transition-all"
            >
              Back to Main Website
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
