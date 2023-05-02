import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import bg from "../../public/images/bg/bg1.jpg";
import Link from "next/link";
init(process.env.ID);

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        /*CLEFS PUBLIC A CACHER,REVOIR COURS (FICHIER .env)*/
        "service_za8lhnm",
        "template_518pzvq",
        form.current,
        "l8rH_GlhLiYZRnKbi"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message Envoyé!</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },

        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez ressayer</p>";
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Face Nord Graphisme | Contact</title>
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
      <motion.section
        initial={{ opacity: 0, x: "80%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 1 },
        }}
        className="section bg-light/60 overflow-hidden m-16 rounded-xl"
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-row md:flex-col h-full  justify-start pt-16 gap-x-8 text-center lg:text-left">
            {/* bg */}
            <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"></div>
            {/* text & form */}
            <div className="flex-1 lg:pt-16 px-10">
              <AnimatedText
                text="Contact"
                className="mb-12 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
              />
              <p className="mb-12 text-center text-xl font-semibold">
                Créons ensemble un projet unique
              </p>
              {/* form */}
              <form
                className="flex flex-col gap-y-4"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="flex gap-x-10">
                  <input
                    className="outline-none border-b border-b-prim2 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Votre nom "
                    name="name"
                    required
                    autoComplete="off"
                    id="name"
                  />
                  <input
                    className="outline-none border-b border-b-prim2 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    type="email"
                    name="email"
                    placeholder="Votre adresse Mail"
                    required
                    autoComplete="off"
                    id="email"
                  />
                </div>
                <input
                  className="outline-none border-b border-b-prim2 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] mb-10"
                  type="text"
                  placeholder="Votre Message"
                  name="message"
                  id="mess"
                />
                <button
                  smooth
                  href="#exp"
                  className="group relative bg-transparent border-1 border-black rounded-lg overflow-hidden px-10 py-2.5 text-dark text-xl font-semibold hover:text-transparent"
                  page="exp"
                >
                  Envoyer le message
                  <span className="absolute w-[1000px] h-[1000px] mt-12 group-hover:-rotate-90 group-hover:-mt-24 transition-all ease-out duration-1000 bg-prim2 left-0 top-0"></span>
                  <span className="text-center absolute right-48 top-2.5 text-transparent group-hover:text-light font-medium text-md">
                    Envoyer le message
                  </span>
                </button>
              </form>
            </div>
            {/* image */}
            <div className="flex-1  p-10 md:flex-col">
              <Image src={profilePic} alt="profile" className="rounded-xl" />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
