import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";

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
      <motion.main
        initial={{ opacity: 0, x: "80%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={{
          ease: "linear",
          duration: 2,
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
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-4xl font-bold uppercase text-prim2 dark:text-light">
                Me découvrir
              </h2>

              <p className="font-medium text-lg pt-16">
                Je suis un webdesigner et infographiste situé dans les
                Hautes-Alpes, à proximité du lac de Serre-Ponçon. Je suis
                spécialisé dans la création de sites web et d'e-commerce, la
                conception d'identités visuelles et la création de designs
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
                spécialisé dans la création de sites web et d'e-commerce, la
                conception d'identités visuelles et la création de designs
                graphiques pour des supports tels que des logos, des brochures,
                des flyers et des bannières publicitaires.
              </p>
              <p className="font-medium text-lg pt-8">
                Je travaille en étroite collaboration avec mes clients tout au
                long du processus de création pour m'assurer que le résultat
                final est à la hauteur de leurs attentes. N'hésitez pas à me
                contacter si vous avez besoin de mes services pour votre
                entreprise.Je suis un webdesigner et infographiste situé dans
                les Hautes-Alpes, à proximité du lac de Serre-Ponçon. Je suis
                spécialisé dans la création de sites web et d'e-commerce, la
                conception d'identités visuelles et la création de designs
                graphiques pour des supports tels que des logos, des brochures,
                des flyers et des bannières publicitaires. Je suis passionné par
                mon travail et je suis déterminé à fournir à mes clients des
                designs créatifs et professionnels qui répondent à leurs besoins
                et qui reflètent parfaitement leur entreprise.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid  bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 shadow-xl  shadow-black/40">
              {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" /> */}
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

            {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 lg:pt-16 gap-8">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <div className="relative justify-center bg-light">
                  <div className="flex group h-48 w-48 md:hidden [perspective:1000px]">
                    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0">
                        <img
                          className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Mountains-By-The-Icon-Z-3322972.svg"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 h-full w-full rounded-xl bg-prim2/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                          <p className="text-md">
                            Création de Sites Vitrine, E-commerce
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <div className="relative justify-center bg-light">
                  <div className="flex group h-48 w-48 md:hidden [perspective:1000px]">
                    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0">
                        <img
                          className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Mountains-By-The-Icon-Z-3322972.svg"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 h-full w-full rounded-xl bg-prim2/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                          <p className="text-md">
                            Création de Logo, Flyers, Bannières, Menu
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <div className="relative justify-center bg-light">
                  <div className="flex group h-48 w-48 md:hidden [perspective:1000px]">
                    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0">
                        <img
                          className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Mountains-By-The-Icon-Z-3322972.svg"
                          alt=""
                        />
                      </div>
                      <div className="absolute inset-0 h-full w-full rounded-xl bg-prim2/50 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                          <p className="text-md">
                            Création de Logo, Flyers, Bannières, Menu
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="absolute w-full flex justify-center pt-10 items-center">
            <a href="#experience">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black dark:border-light flex justify-center items-start p-2">
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-black dark:bg-light mb-1"
                />
              </div>
            </a>
          </div>
          <Experience />
          <Education />
          <Skills />
        </Layout>
      </motion.main>
    </>
  );
};

export default about;
