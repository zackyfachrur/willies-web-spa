/* eslint-disable react/no-unescaped-entities */
import "../index.css";
import HomePhone from "../assets/homePhone.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex items-center justify-center h-screen md:gap-36 xl:flex-row md:flex-col smxxl:flex-col font-sand smxxl:h-screen xl:mt-0 md:mt-32">
      <div className="flex flex-col items-center justify-center p-5">
        <h1
          className="font-bold text-center text-white bg-blue-900 rounded-lg md:text-2xl md:px-5 sm:w-72 smxl:w-72 smxxl:w-72 md:w-96 sm:text-sm smxxl:px-3"
          data-aos="fade-in"
          data-aos-duration="800"
        >
          Welcome to Wilies Shoes
        </h1>
        <p
          className="font-bold text-center md:w-96 smxl:w-80 smxxl:w-80 md:text-base smxxl:text-sm"
          data-aos="fade-in"
        >
          This website is purely fictional, so please forgive any offensive or
          dissenting words.
        </p>
      </div>
      <div className="flex flex-row">
        <img
          src={HomePhone}
          alt="Shoes Intro"
          className="w-full smxxl:w-80"
          data-aos="fade-in"
          data-aos-duration="800"
        />
      </div>
    </div>
  );
}
