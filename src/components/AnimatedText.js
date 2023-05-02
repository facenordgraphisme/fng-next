import React from "react";
import { motion } from "framer-motion";
//FONT
import { Pacifico, Playfair_Display } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-paci",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-play",
});

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 z-50">
      <motion.h1
        className={`${playfair.variable} font-play inline-block w-full text-dark font-bold text-8xl dark:text-light z-50 ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
        delay="3"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
