import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const { rotate } = motion;

const Skill = ({ name, x, y, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-prim2 text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold"
        whileHover={{ scale: 1.05, rotate: [0, 10, -10, 0] }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
        onClick={handleClick}
      >
        {name}
      </motion.div>
      {isOpen && (
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 flex items-center justify-center z-30"
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
        >
          {/* LA BOX QUI S'OUVRE QUAND ON CLIQUE SUR UN SKILL */}
          <motion.div
            className="min-w-[60vw] flex flex-col justify-between z-30 items-center bg-light/90 dark:bg-light/75 border border-solid border-dark rounded-xl backdrop-blur-md py-32 shadow-2xl"
            animate={{
              y: 0,
              opacity: 1,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
            initial={{ y: 100, opacity: 0, rotate: [0, -10, 10, 0] }}
          >
            <h3 className="capitalize text-4xl font-bold my-2 mt-4 xs:text-lg text-dark">
              {name}
            </h3>
            <p className="text-md mx-8 text-dark p-10">{details}</p>
            <button
              className="bg-prim2 text-light p-5 px-10 rounded-lg text-lg "
              onClick={handleClose}
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const Skills = () => {
  return (
    <>
      <AnimatedText
        text="Compétences."
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
      />
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-prim2 text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill
          name="HTML"
          x="-25vw"
          y="2vw"
          details="L'HTML est un langage informatique utilisé sur l'internet. Ce langage est utilisé pour créer des pages web. L'acronyme signifie HyperText Markup Language, ce qui signifie en français 'langage de balisage d'hypertexte'. Cette signification porte bien son nom puisqu'effectivement ce langage permet de réaliser de l'hypertexte à base d'une structure de balisage."
        />
        <Skill
          name="CSS"
          x="-5vw"
          y="-10vw"
          details="Le CSS est un langage informatique permettant de définir l’apparence d’un site Internet. Acronyme de « Cascading Style Sheets », il se traduit en français par « Feuilles de style en cascade ».

        Grâce à lui, il est possible d’attribuer une couleur d’arrière-plan, de positionner un texte, de diminuer la taille d’un titre, d’ajuster les marges, etc."
        />
        <Skill
          name="Javascript"
          x="20vw"
          y="6vw"
          details="JavaScript désigne un langage de développement informatique, et plus précisément un langage de script orienté objet. On le retrouve principalement dans les pages Internet. Il permet, entre autres, d'introduire sur une page web ou HTML des petites animations ou des effets.

        Créé en 1995 par Brendan Eich, en même temps que la technologie Java, le langage JavaScript se distingue des langages serveurs par le fait que l'exécution des tâches est opérée par le navigateur lui-même, sur l'ordinateur de l'utilisateur, et non sur le serveur web. Il s'active donc généralement sur le poste client plutôt que côté serveur."
        />
        <Skill
          name="ReactJS"
          x="0vw"
          y="12vw"
          details="React (également connu sous le nom de React.js ou ReactJS) est une bibliothèque JavaScript frontale à code source ouvert permettant de créer des interfaces utilisateur ou des composants d'interface utilisateur. Elle est maintenue par Facebook et une communauté de développeurs individuels et d'entreprises. React peut être utilisé comme base dans le développement d'applications monopages ou mobiles. Cependant, React ne s'occupe que de la gestion de l'état et du rendu de cet état dans le DOM (Document Object Model), de sorte que la création d'applications React nécessite généralement l'utilisation de bibliothèques supplémentaires pour le routage, ainsi que certaines fonctionnalités côté client."
        />
        <Skill
          name="NextJS"
          x="-20vw"
          y="-15vw"
          details="Next.js est un framework React qui vous permet de créer des sites web statiques et des applications web surpuissantes, adaptés au référencement et extrêmement conviviaux à l'aide du framework React. Next.js est connu pour offrir la meilleure expérience aux développeurs lors de la création d'applications prêtes pour la production avec toutes les fonctionnalités dont vous avez besoin.

        Il dispose d'un rendu hybride statique et serveur, d'une prise en charge de TypeScript, d'un regroupement intelligent, dune pré-lecture de route, et plus encore, sans aucune configuration supplémentaire."
        />
        <Skill
          name="PHP"
          x="15vw"
          y="-12vw"
          details="Le PHP, pour Hypertext Preprocessor, désigne un langage informatique, ou un langage de script, utilisé principalement pour la conception de sites web dynamiques. Il s'agit d'un langage de programmation sous licence libre qui peut donc être utilisé par n'importe qui de façon totalement gratuite."
        />
        <Skill
          name="Photoshop"
          x="32vw"
          y="-5vw"
          details=" Photoshop est l'outil le plus utilisé actuellement pour la retouche d'images de qualité professionnelle. Ses nombreux outils lui permettent d'effectuer quasiment tout ce qui est possible de faire sur une image.
        La richesse de ses fonctionnalités le rend un peu difficile à maîtriser et nécessite quelques jours de formation.
        Ses principales fonctionnalités sont :
        - la conception de sélections dans différents modes qui permet de choisir avec une grande précision les partie de l'image devant subir des modifications.
        - les nombreux outils permettant de détourer tout ou partie d'une image afin d'effectuer des montages.
        - la création de masques divers permettant d'effectuer des montages entre différents visuels.
        - de nombreux filtres permettant des effets spéciaux"
        />
        <Skill
          name="Indesign"
          x="0vw"
          y="-20vw"
          details="Adobe InDesign est un logiciel de mise en page, de
publication assistée par ordinateur [PAO] […] (et) il est utilisé pour créer des
magazines, des journaux, des livres, des plaquettes… […] il est axé sur la
forme et permet d'appliquer des mises en page beaucoup plus complexes et
créatives qu'un logiciel de traitement de texte, qui est axé, lui, sur le
contenu"
        />
        <Skill
          name="Illustrator"
          x="-25vw"
          y="18vw"
          details="Adobe Illustrator est un logiciel de création graphique vectorielle. Il fait partie de la gamme Adobe, peut être utilisé indépendamment ou en complément de Photoshop, et offre des outils de dessin vectoriel puissants. Les images vectorielles sont constituées de courbes générées par des formules mathématiques."
        />
        <Skill
          name="Wordpress"
          x="18vw"
          y="18vw"
          details="WordPress est un Système de gestion de contenu (SGC) gratuit et open source. Il permet de créer des sites Internet complets et variés, reposant sur une base de données MySQL. WordPress est le leader incontesté des SGC, il propulse un très grand nombre de blogs et de sites de e-commerce."
        />
      </div>
    </>
  );
};

export default Skills;
