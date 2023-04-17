import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";

const Details = ({ postion, company, companyLink, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]  "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.75, type: "spring" }}
        className=" p-5  rounded-xl shadow-xl"
      >
        <h3 className="capitalize font-bold text-5xl sm:text-2xl xs:text-lg p-5">
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
        <p className="font-medium w-full text-lg md:text-sm p-5 ">{work}</p>
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
    <div className="my-64">
      <AnimatedText
        text="Ce que je peux faire pour vous."
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
            postion="Création de site Vitrine"
            company="A partir de 900€ HT"
            companyLink="www.google.com"
            address="Mountain View, CA"
            work="En tant que webdesigner, je suis spécialisé dans la création de designs de sites web modernes et professionnels. Je suis capable de concevoir des maquettes de sites web personnalisées qui reflètent l'image de marque de votre entreprise et répondent aux besoins de vos utilisateurs.

            Je suis attentif aux détails et je travaille avec vous pour créer un design qui est à la fois esthétique et fonctionnel. Je suis compétent dans l'utilisation de différents outils et technologies de conception, y compris les logiciels de design graphique, les éditeurs de code et les frameworks de conception de sites web."
          />
          <Details
            postion="Création de site Ecommerce"
            company="A partir de 1500€ HT"
            companyLink="www.google.com"
            address="Mountain View, CA"
            work="En plus de la conception de sites web, je suis également compétent dans le développement de sites web dynamiques et interactifs. Je peux travailler avec différentes plateformes de développement web pour créer des sites web performants et fonctionnels.

            Je suis compétent dans la programmation web, y compris les langages de programmation tels que HTML, CSS, JavaScript et PHP.
            
            Je suis également capable de travailler avec des systèmes de gestion de contenu (CMS) tels que WordPress pour créer des sites web faciles à gérer."
          />
          <Details
            postion="Infographies"
            company="A partir de 80€ HT"
            companyLink="www.google.com"
            address="Mountain View, CA"
            work="En tant qu'infographiste, je suis capable de concevoir des graphiques, des illustrations, des logos, des brochures, des flyers, des bannières publicitaires et d'autres éléments visuels pour votre entreprise. Je suis capable de travailler avec différents logiciels de design graphique tels que Photoshop, Illustrator et InDesign pour créer des designs créatifs et attractifs.

            Je suis attentif aux détails et je travaille avec vous pour créer des designs qui reflètent l'image de marque de votre entreprise."
          />
          <Details
            postion="Refonte de site web"
            company="A partir de 500€ HT"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Je suis compétent dans la création d'identités visuelles pour les entreprises. Je peux travailler avec vous pour créer un logo, choisir des couleurs, des polices et d'autres éléments visuels qui reflètent l'image de marque de votre entreprise.

            Je suis attentif aux détails et je travaille avec vous pour créer une identité visuelle qui est cohérente avec l'image de votre entreprise."
          />
          <Details
            postion="Maintenance"
            company="A partir de 150€/An HT"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="En tant que webdesigner, je suis également compétent dans l'optimisation des sites web pour les moteurs de recherche. Je peux travailler avec vous pour améliorer votre référencement naturel en utilisant les bonnes pratiques en matière de SEO.

            Je suis capable de travailler avec des outils d'analyse de site web pour identifier les domaines qui nécessitent une amélioration et pour mettre en œuvre des stratégies efficaces pour améliorer votre référencement naturel."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
