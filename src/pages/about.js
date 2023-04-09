import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";

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
      <main className="flex w-full  flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Un peu de moi" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                -Je suis un webdesigner et infographiste situé dans les
                Hautes-Alpes, à proximité du lac de Serre-Ponçon. Je suis
                spécialisé dans la création de sites web et d'e-commerce, la
                conception d'identités visuelles et la création de designs
                graphiques pour des supports tels que des logos, des brochures,
                des flyers et des bannières publicitaires.
              </p>
              <p className="font-medium my-4">
                -Je suis passionné par mon travail et je suis déterminé à
                fournir à mes clients des designs créatifs et professionnels qui
                répondent à leurs besoins et qui reflètent parfaitement leur
                entreprise.
              </p>
              <p className="font-medium">
                -Je travaille en étroite collaboration avec mes clients tout au
                long du processus de création pour m'assurer que le résultat
                final est à la hauteur de leurs attentes. N'hésitez pas à me
                contacter si vous avez besoin de mes services pour votre
                entreprise.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="FNG"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Clients Heureux
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projets terminés
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Années d'expérience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
