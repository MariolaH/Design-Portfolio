"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-6">
      <div className="container mx-auto text-center flex flex-col items-center">
        <div className="mb-4 mt-4">
          <a href="https://www.designmatrixlabs.com/" target="_blank">
          <img src="/design-matrix-labs-high-resolution-logo-grayscale.png" className="footerLogo" alt="design matrix labs logo"/></a>
          {/* Publisher Image */}
          {/* <Image 
        src="/publisher.png" 
        alt="Publisher Logo" 
        className="w-20 h-auto md:w-32 md:h-auto mr-4"// Adjust width and height as needed
        width={64}
        height={64}
      /> */}
        </div>
        <p className="text-base md:text-lg font-semibold">
          &copy; {new Date().getFullYear()} Design Matrix Labs LLC. All rights
          reserved.
        </p>
        <p className="text-sm mt-2 md:text-base">
          Website developed by{" "}
           <a href="https://www.designmatrixlabs.com/" target="_blank">Design Matrix Labs</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
