import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import resume from "../Resume.pdf";
import moment from "moment";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Shivam
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>

          <p className="mb-8 leading-relaxed">
            Welcome to my portfolio!
            <br /> I'm a passionate React and React Native developer with a love
            for creating elegant and intuitive user experiences. I've honed my
            skills in crafting robust web and mobile applications that delight
            users and meet business objectives.
          </p>
          <div className="flex justify-center">
            <AnchorLink
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </AnchorLink>

            <a
              href={resume}
              download={`Shivam's Resume - ${moment().format("DD MMM, HH:mm")}`}
              target="_blank"
              rel="noreferrer"
              className="ml-4 inline-flex text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Resume
              <FaCloudDownloadAlt
                className="ml-2"
                size={25}
                style={{ marginTop: 2.4 }}
              />
            </a>
            <AnchorLink
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </AnchorLink>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
