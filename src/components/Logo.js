import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-transparent text-dark dark:text-white flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#fff",
            "#B9EDDD",
            "#87CBB9",
            "#569DAA",
            "#577D86",
            "#fff",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Face Nord <br /> Graphisme
      </MotionLink>
    </div>
  );
};

export default Logo;
