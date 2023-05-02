import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-transparent text-dark dark:text-white flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light bg-prim2"
        whileHover={{
          backgroundColor: [
            "#1A5F7A",
            "#B9EDDD",
            "#87CBB9",
            "#569DAA",
            "#577D86",
            "#1A5F7A",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        FNG
      </MotionLink>
    </div>
  );
};

export default Logo;
