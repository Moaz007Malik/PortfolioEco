import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-between p-12">
      <Image src="/images/MyLogo.png" alt="MyLogo" width={180} height={40}/>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;