"use client";

import { motion } from "framer-motion";

export default function TickerTape() {
  const marqueeItems = [
    "Available for Freelance",
    "Open to Collaborations",
    "Frontend Architecture",
    "Creative Development",
    "Available for Freelance",
    "Open to Collaborations",
    "Frontend Architecture",
    "Creative Development",
  ];

  return (
    <div className="w-full border-t border-b border-white/10 py-4 overflow-hidden bg-white/5 backdrop-blur-sm">
      <motion.div
        className="flex items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {marqueeItems.map((item, index) => (
              <div
                key={`${i}-${index}`}
                className="flex items-center gap-8 px-8 text-sm font-mono tracking-[0.2em] text-primary/80 uppercase whitespace-nowrap"
              >
                <span>{item}</span>
                <span className="text-primary">•</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
