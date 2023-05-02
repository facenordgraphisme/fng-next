import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../public/images/projects/patoch.jpg";
import ash from "../../public/images/projects/ash.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import bg from "../../public/images/bg/bg1.jpg";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light/60 shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6  text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Voir le Site
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light/60 p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Voir
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Face Nord Graphisme | Porfolio</title>
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
          duration: 2,
          x: { duration: 1 },
        }}
        className="w-full mb-16 flex flex-col items-center justify-center dark:text-light"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Mes Derniers Projets"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Restaurant Gaudineto"
                img={project1}
                summary="Création du site web du restaurant Gaudineto situé à Moustiers-Sainte-Marie"
                link="https://www.gaudineto.fr"
                github="https://www.gaudineto.fr"
                type="Site Internet"
                rel="noopener noreferrer"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ASH Rédaction Web"
                img={ash}
                summary="Création du site web d'une talentueuse rédactrice web Freelance."
                link="/"
                github="https://github.com/facenordgraphisme/AnneSoIndustry"
                type="Site Vitrine"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Patiss & Cuisine"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="https://www.patissetcuisine.fr"
                github="https://www.patissetcuisine.fr"
                type="Site Internet"
              />
            </div>
            {/* <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div> */}
          </div>
        </Layout>
      </motion.main>
    </>
  );
};

export default projects;
