/* eslint-disable react/no-unescaped-entities */
import "../index.css";
import ShoesIntro from "../assets/shoesT-1.png";

export default function Home() {
  return (
      <div className="flex md:gap-36 justify-center items-center xl:flex-row md:flex-col smxxl:flex-col font-sand h-screen smxxl:h-screen xl:mt-0 md:mt-32">
        <div className="flex flex-col items-center justify-center p-5">
          <h1 className="md:text-2xl font-bold md:px-5 text-white bg-blue-900 sm:w-72 smxl:w-72 smxxl:w-72 md:w-96 sm:text-sm rounded-lg smxxl:px-3 text-center">
            Welcome to Wilies Shoes
          </h1>
          <p className="md:w-96 smxl:w-80 smxxl:w-80 md:text-base font-bold smxxl:text-sm text-center">
            This website is purely fictional, so please forgive any offensive or
            dissenting words.
          </p>
        </div>
        <div className="flex flex-row">
          <p className="bg-blue-900 w-24 absolute rounded-lg font-bold text-white  mx-40 my-14 rotate-12 border-2 animate-pulse text-center">
            New
          </p>
          <img src={ShoesIntro} alt="Shoes Intro" className="w-full smxxl:w-80" />
        </div>
      </div>
  );
}
