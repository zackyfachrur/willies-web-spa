import "../index.css";
import AboutPhone from "../assets/aboutPhone.png";
import AboutPhone2 from "../assets/aboutPhone2.png";
import AboutPhone3 from "../assets/aboutPhone3.png";
import SliderAbout from "../components/SliderOfAbout";
import { Tooltip, Button, Link } from "@nextui-org/react";
import TimeLine from "../components/Timeline";
export default function About() {
  return (
    <>
      <div className="m-auto mt-24 xl:mt-28 w-full flex justify-center items-center flex-col max-w-screen-xl">
        <div className="flex justify-center items-center flex-col xl:w-full smxxl:w-screen lg:w-full md:w-full">
          <div className="flex justify-center items-center smxxl:gap-20 xl:gap-40 xl:flex-row lg:flex-row lg:gap-40 md:flex-row md:gap-40 flex-col-reverse smxxl:max-w-screen-smxxxl max-w-screen-xl">
            <img
              src={AboutPhone}
              alt="Phone IMG"
              className="rounded-xl xl:w-1/2 smxxl:w-1/2"
            />
            <div className="flex flex-col smxxl:w-1/2 xl:w-full justify-center items-center p-12  rounded-lg">
              <Tooltip
                content="The Wilies Shoes is the answer!"
                placement="top"
                className="bg-blue-900 px-5 text-white font-bold border-2 border-blue-900 rounded-lg drop-shadow-md smxxl:hidden sm:flex text-sm"
              >
                <Button
                  as={Link}
                  className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-80 smxxl:text-sm md:w-96 sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase cursor-default"
                  variant="flat"
                >
                  Want to step up your fashion game?
                </Button>
              </Tooltip>
              <p className="w-80 p-3 font-bold">
                With trendy designs and undeniable quality, we present a
                collection of shoes that will make your stride more confident
                and comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center xl:gap-40 xl:flex-row-reverse flex-col mt-16 smxxl:max-w-screen-smxxxl max-w-screen-xl xl:mb-30 lg:flex-row-reverse lg:gap-40 md:flex-row-reverse md:gap-40">
        <img
          src={AboutPhone2}
          alt=""
          className="rounded-xl xl:w-1/2 smxxl:w-1/2"
        />
        <div className="flex smxxl:flex-col-reverse xl:flex-col smxxl:w-1/2 xl:w-full justify-center items-center p-12 rounded-lg">
          <Tooltip
            content="The Wilies Shoes for Every Style and Occasion!"
            className="bg-blue-900 px-5 text-white font-bold border-2 border-blue-900 rounded-lg drop-shadow-md smxxl:hidden sm:flex text-sm"
          >
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-80 smxxl:text-sm md:w-96 sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase cursor-default"
              variant="flat"
            >
              Find Your Perfect Fit
            </Button>
          </Tooltip>
          <p className="w-80 p-3 font-bold">
            Whatever your style, The Wilies Shoes has the perfect fit for you.
            From casual to formal, we have a variety of models to suit your
            needs for every occasion.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <SliderAbout />
      </div>

      <div className="flex xl:flex-row smxxxl:flex-col justify-center items-center xl:mb-40 xl:mt-16 lg:flex-row lg:mb-40 md:flex-row md:mb-40">
        <div className="flex justify-center items-center smxxl:gap-20 xl:gap-40 xl:flex-row flex-col mt-16 smxxl:max-w-screen-smxxxl max-w-screen-xl xl:mb-30 lg:flex-row-reverse lg:gap-40 md:flex-row-reverse md:gap-40">
          <img
            src={AboutPhone3}
            alt=""
            className="rounded-xl xl:w-1/2 smxxl:w-1/2"
          />
        </div>
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex justify-center items-center">
          <TimeLine />
        </div>
      </div>
    </>
  );
}
