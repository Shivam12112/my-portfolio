import { ArrowRightIcon } from "@heroicons/react/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <AnchorLink href="#about" className="ml-3 text-xl">
            Shivam Kushwaha
          </AnchorLink>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <AnchorLink href="#projects" className="mr-5 hover:text-white">
            Past Work
          </AnchorLink>
          <AnchorLink href="#skills" className="mr-5 hover:text-white">
            Skills
          </AnchorLink>
          <AnchorLink href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </AnchorLink>
        </nav>
        <AnchorLink
          href="https://www.linkedin.com/in/shivam-kushwaha-81a5a6135/"
          target="blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          <FaLinkedin className="w-4 h-4 ml-1" />
        </AnchorLink>
        <AnchorLink
          href="https://github.com/Shivam12112/"
          target="blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          <FaGithub className="w-4 h-4 ml-1" />
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </AnchorLink>
      </div>
    </header>
  );
}
