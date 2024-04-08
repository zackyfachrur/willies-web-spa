/* eslint-disable react/no-unescaped-entities */
import "../index.css";
import NewShoes from "../assets/shoesT-2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex md:gap-36 justify-center items-center xl:flex-row md:flex-col smxxl:flex-col font-sand h-screen smxxl:h-screen xl:mt-0 md:mt-32">
      <div className="flex flex-col items-center justify-center p-5">
        <h1
          className="md:text-2xl font-bold md:px-5 text-white bg-blue-900 sm:w-72 smxl:w-72 smxxl:w-72 md:w-96 sm:text-sm rounded-lg smxxl:px-3 text-center"
          data-aos="fade-in"
          data-aos-duration="800"
        >
          Welcome to Wilies Shoes
        </h1>
        <p
          className="md:w-96 smxl:w-80 smxxl:w-80 md:text-base font-bold smxxl:text-sm text-center"
          data-aos="fade-in"
        >
          This website is purely fictional, so please forgive any offensive or
          dissenting words.
        </p>
      </div>
      <div className="flex flex-row">
        <img
          src={NewShoes}
          alt="Shoes Intro"
          className="w-full smxxl:w-80"
          data-aos="fade-in"
          data-aos-duration="800"
        />
      </div>
    </div>
  );
}
