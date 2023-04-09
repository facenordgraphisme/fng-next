import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; Tout droits réservés</span>
        <div className="flex items-center">
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
