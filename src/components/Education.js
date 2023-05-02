import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon2";
import AnimatedText from "./AnimatedText";

const Details = ({ type, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] bg-light/60"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.75, type: "spring" }}
        className=" p-5  rounded-xl shadow-xl dark:border-2 dark:border-light"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light">
          {type}
        </h3>
        <p className="font-medium w-full md:text-sm dark:text-light mt-8">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  //USESCROLL COMPONENT !!
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" my-64">
      <AnimatedText
        text="Pourquoi créer un site web?"
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* //ici on a une self closing div qui permet de faire un before /after tellement plus facilement <3  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute right-9 top-0 w-[4px] h-full bg-prim2 origin-top dark:bg-light md:w-[2px] md:right-[30px] xs:right-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Augmenter considérablement sa visibilité"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          <Details
            type="Multiplier ses ventes"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          <Details
            type="Etre présent sur tous les fronts"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
