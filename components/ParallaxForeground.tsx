"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ParallaxForeground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Top Right Branch */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-20 -right-20 w-96 h-96 opacity-80 blur-[2px]"
      >
        <Image 
          src="/DSC_3712.JPG" 
          alt="Leaves" 
          fill 
          className="object-contain rotate-180"
        />
      </motion.div>

      {/* Bottom Left Bush */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] opacity-90 blur-[3px]"
      >
        <Image 
          src="/DSC_3712.JPG" 
          alt="Leaves" 
          fill 
          className="object-contain"
        />
      </motion.div>

      {/* Middle Right Floating Leaf */}
      <motion.div 
        style={{ y: y3, rotate: 45 }}
        className="absolute top-1/2 -right-10 w-40 h-40 opacity-60 blur-[1px]"
      >
        <Image 
          src="/DSC_3712.JPG" 
          alt="Leaf" 
          fill 
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
