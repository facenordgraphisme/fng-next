import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";
import mountain from "../../public/images/profile/developer-pic-1.png";
import Image from "next/image";

const Details = ({
  postion,
  company,
  companyLink,
  address,
  work,
  work2,
  work3,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="bg-light/60 my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]  "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className=" p-5  rounded-xl shadow-xl relative"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={mountain}
          alt="mountain"
          className="absolute w-[80px] md:w-[60px] h-auto right-2 top-2"
        />
        <h3 className="font-bold text-5xl sm:text-2xl xs:text-lg p-5 dark:text-light px-10">
          {postion}&nbsp;
        </h3>
        <a
          href={companyLink}
          taget="_blank"
          className="text-prim2 dark:text-primaryDark font-bold text-4xl sm:text-2xl xs:text-lg "
        >
          {company}
        </a>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {address}
        </span>
        <p className="font-semibold w-full text-lg md:text-sm p-5 dark:text-light">
          {work}
        </p>
        <p className="font-semibold w-full text-lg md:text-sm p-5 dark:text-light">
          {work2}
        </p>
        <p className="font-semibold w-full text-lg md:text-sm p-5 dark:text-light">
          {work3}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  //USESCROLL COMPONENT !!
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32" id="exp">
      <AnimatedText
        text="Mes prestations."
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* //ici on a une self closing div qui permet de faire un before /after tellement plus facilement <3  */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-prim2 origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            postion="Création de site vitrine"
            company=""
            companyLink=""
            address=""
            work="Si vous avez besoin d'un site web simple mais efficace pour mettre en valeur votre entreprise ou votre marque en ligne, je peux vous aider à créer un site vitrine en fonction de vos exigences."
            work2="Un site vitrine est une plateforme qui permet de présenter votre entreprise et vos produits ou services de manière professionnelle et élégante. Il peut contenir des informations sur votre entreprise, vos produits, vos services, des témoignages de clients et des coordonnées."
          />
          <Details
            postion="Création de site e-commerce"
            company=""
            companyLink=""
            address=""
            work="Si vous souhaitez vendre des produits en ligne, je peux vous aider à créer, développer et sécuriser votre boutique numérique."
            work2="Un site Ecommerce est une plateforme qui permet de vendre des produits en ligne. Il peut contenir des informations sur vos produits, des photos, des descriptions et des prix. Vous pouvez également y ajouter des options de paiement en ligne pour faciliter les transactions."
          />
          <Details
            postion="Infographies"
            company=""
            companyLink=""
            address=""
            work="Si vous avez besoin de créer des logos, flyers ou d'autres supports visuels pour votre entreprise ou votre marque, je peux vous aider à créer des designs créatifs et professionnels."
            work2="La création de logos est importante pour donner une identité visuelle à votre entreprise ou votre produit, et les flyers sont un moyen efficace de communiquer des offres spéciales ou des événements à vos clients potentiels."
            work3="Je suis capable de créer des designs personnalisés pour répondre à vos besoins spécifiques. Nous pouvons travailler ensemble pour développer un design qui reflète l'image de votre entreprise ou produit et qui attire l'attention de votre audience."
          />
          <Details
            postion="Refonte de site web"
            company=""
            companyLink=""
            time=""
            address=""
            work="Si votre site web est obsolète ou s'il ne correspond plus à vos besoins, je peux vous aider à le remettre à jour. "
            work2="Une refonte de site web implique la mise à jour de la conception et des fonctionnalités de votre site pour le rendre plus moderne et plus fonctionnel. Cela peut inclure la mise à jour de l'apparence du site, l'ajout de nouvelles fonctionnalités ou la simplification de la navigation."
          />
          <Details
            postion="Maintenance"
            company=""
            companyLink=""
            time=""
            address=""
            work="Si vous avez besoin d'une aide pour maintenir votre site web à jour, je peux vous aider à gérer les mises à jour régulières et les corrections de bugs."
            work2=" La maintenance de site web est importante pour garantir que votre site fonctionne de manière optimale, qu'il soit à jour sur les dernières normes de sécurité et qu'il offre une expérience utilisateur fluide."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
