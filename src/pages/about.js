import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/11.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import bg from "../../public/images/bg/bg1.jpg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Face Nord Graphisme | A Propos</title>
        <meta name="description" content="ICI TU RENTRE LE SEO" />
      </Head>
      <div className="fixed top-0 w-full h-full">
        <Image
          src={bg}
          alt="casseCouilles"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <motion.main
        initial={{ opacity: 0, x: "80%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 },
        }}
        className="flex w-full  flex-col items-center justify-center dark:text-light"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Un Peu De Moi"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 rounded-2xl border-2 border-solid  bg-light p-8 dark:bg-dark dark:border-light shadow-xl">
              <h2 className="mb-4 text-4xl font-bold uppercase text-prim2 dark:text-light">
                Me découvrir
              </h2>

              <p className="font-medium text-lg pt-16">
                Je suis un webdesigner et infographiste situé dans les
                Hautes-Alpes, à proximité du lac de Serre-Ponçon. Je suis
                spécialisé dans la création de sites web et d{"'"}e-commerce, la
                conception d{"'"}identités visuelles et la création de designs
                graphiques pour des supports tels que des logos, des brochures,
                des flyers et des bannières publicitaires. Je suis passionné par
                mon travail et je suis déterminé à fournir à mes clients des
                designs créatifs et professionnels qui répondent à leurs besoins
                et qui reflètent parfaitement leur entreprise.
              </p>
              <p className="font-medium my-4 text-lg pt-8">
                Je suis passionné par mon travail et je suis déterminé à fournir
                à mes clients des designs créatifs et professionnels qui
                répondent à leurs besoins et qui reflètent parfaitement leur
                entreprise. Je suis un webdesigner et infographiste situé dans
                les Hautes-Alpes, à proximité du lac de Serre-Ponçon. Je suis
                spécialisé dans la création de sites web et d{"'"}e-commerce, la
                conception d{"'"}identités visuelles et la création de designs
                graphiques pour des supports tels que des logos, des brochures,
                des flyers et des bannières publicitaires.
              </p>
              <p className="font-medium text-lg pt-8">
                Je travaille en étroite collaboration avec mes clients tout au
                long du processus de création pour m{"'"}assurer que le résultat
                final est à la hauteur de leurs attentes. N{"'"}hésitez pas à me
                contacter si vous avez besoin de mes services pour votre
                entreprise.Je suis un webdesigner et infographiste situé dans
                les Hautes-Alpes, à proximité du lac de Serre-Ponçon. Je suis
                spécialisé dans la création de sites web et d{"'"}e-commerce, la
                conception d{"'"}identités visuelles et la création de designs
                graphiques pour des supports tels que des logos, des brochures,
                des flyers et des bannières publicitaires. Je suis passionné par
                mon travail et je suis déterminé à fournir à mes clients des
                designs créatifs et professionnels qui répondent à leurs besoins
                et qui reflètent parfaitement leur entreprise.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid  bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 shadow-xl  shadow-black/40">
              <Image
                src={profilePic}
                alt="FNG"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              <Image
                src={profilePic}
                alt="FNG"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              <Image
                src={profilePic}
                alt="FNG"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
          </div>
        </Layout>
      </motion.main>
    </>
  );
};

export default about;
