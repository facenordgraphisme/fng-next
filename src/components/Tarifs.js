import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon2";
import AnimatedText from "./AnimatedText";
import { FcCheckmark } from "react-icons/fc";
import { BsSnow3, BsTsunami } from "react-icons/bs";
import { TbMountain } from "react-icons/tb";
import Link from "next/link";

const Details = ({
  icon,
  title,
  prix,
  feature1,
  feature2,
  feature3,
  month,
}) => {
  const ref = useRef(null);
  return (
    <motion.li
    whileHover={{ scale: 1.05 }}
    transition={{duration: 1.5, type: "spring"}}
    className="bg-light/60 my-8  w-[20%] min-w-[500px]  mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className=" p-5  rounded-xl shadow-xl dark:border-2 dark:border-light"
      >
        <div className="text-6xl justify-center flex dark:text-light">
          {icon}
        </div>
        <div className="h-auto">
          <div className="px-6 py-12 border-b-2 border-gray-200">
            <p className="text-5xl font-semibold text-center mb-4 dark:text-light md:text-3xl">
              {title}
            </p>
            <p className="text-3xl font-semibold text-center mb-4 dark:text-light md:text-xl">
              A PARTIR DE
            </p>
            <div className="flex justify-center items-center">
              <div className="flex items-start">
                <p className="text-4xl font-medium dark:text-light md:text-2xl">
                  €
                </p>
                <p className="text-7xl font-bold dark:text-light  md:text-5xl">
                  {prix}
                </p>
                <p className="text-3xl font-semibold dark:text-light  md:text-xl">
                  HT
                </p>
              </div>
              <p className="text-2xl text-gray-400">{month}</p>
            </div>
          </div>

          <div className="p-12 bg-light/80 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-center space-x-4">
                <FcCheckmark className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-xl md:text-md text-gray-600 ">{feature1}</p>
              </li>
              <li className="flex items-center space-x-4">
                <FcCheckmark className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-xl  md:text-md text-gray-600">{feature2}</p>
              </li>
              <li className="flex items-center space-x-4">
                <FcCheckmark className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-xl  md:text-md text-gray-600">{feature3}</p>
              </li>
            </ul>
          </div>
          <div className="justify-center items-center flex">
          <Link
                  smooth
                  href="#exp"
                  className="mt-5 group relative bg-transparent border-1 border-black rounded-lg overflow-hidden px-10 py-2.5 text-dark text-xl font-semibold hover:text-transparent"
                  page="exp"
                >
                  Faire un devis gratuit
                  <span className="absolute w-80 h-80 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-out duration-1000 bg-prim2 left-0 top-0"></span>
                  <span className="absolute right-12 top-2.5 text-transparent group-hover:text-light font-medium text-md">
                    Travaillons ensemble{" "}
                    <span className="absolute -right-5 bottom-0">&#10095;</span>
                  </span>
                </Link>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
};

const Tarifs = () => {
  //USESCROLL COMPONENT !!

  return (
    <div className="my-64">
      <AnimatedText
        text="Tarifs"
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <ul className="w-full h-auto flex items-start justify-between ml-4 xs:ml-2 gap-4 col-span-2 flex-wrap">
          <Details
            icon={<BsTsunami />}
            title="Infographies"
            prix="80"
            feature1="Réalisation et raffraichissement de logo"
            feature2="Création de charte graphique et d'identité visuelle"
            feature3="Réalisation de flyers, affiches, carte de restaurant..."
          />
          <Details
            icon={<BsSnow3 />}
            title="Création de site vitrine"
            prix="300"
            feature1="Création d'un site portfolio via Wordpress"
            feature2="Intégration de vos éléments, sections et textes"
            feature3="Optimisation de votre référencement"
          />
          <Details
            icon={<TbMountain />}
            title="Création de site Ecommerce"
            prix="800"
            feature1="Création de votre plateforme de vente via Shopify"
            feature2="Intégration de 10 produits"
            feature3="Optimisation de votre référencement"
          />
          <Details
            icon={<TbMountain />}
            title="Site sur mesure"
            prix="2000"
            feature1="Projet à partir de 0"
            feature2="Création de l'identité de votre marque, de vos visuels"
            feature3="Conception d'un site sur mesure"
          />
        </ul>
      </div>
    </div>
  );
};

export default Tarifs;
