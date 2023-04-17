import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-prim2 font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; Tout droits réservés</span>
        <div className="flex items-center lg:py-2">
          <span className="text-2xl px-1"> &#127748;</span>
          <Link href="/" className="underline underline-offset-2">
            Face Nord Graphisme
          </Link>
        </div>
        <Link href="">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
