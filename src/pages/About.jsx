import "../index.css";
import Building from "../assets/tree-building.png"
import SliderAbout from "../components/SliderOfAbout"
import { Tooltip, Button, Link } from "@nextui-org/react"
import AvatarCart from "../assets/avatar.png"
import Avatar from "../assets/avatar-2.png"
import TimeLine from "../components/Timeline"



export default function About() {
  return (
    <>
      <div className="m-auto mt-56 xl:mt-0 w-full flex justify-center items-center flex-col max-w-screen-xl h-screen">
        <div className="h-screen flex justify-center items-center flex-col xl:w-full smxxl:w-screen">
          <div className="flex justify-center items-center gap-20 xl:flex-row flex-col mt-16 mb-10 smxxl:max-w-screen-smxxxl max-w-screen-xl">
            <img src={Building} alt="Building IMG" className="rounded-xl" />
            <div className="flex flex-col smxxl:w-1/2 xl:w-full justify-center items-center  p-12  rounded-lg">
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

          <SliderAbout />
        </div>
      </div>

      <div className="flex xl:flex-row-reverse justify-center items-center w-screen xl:max-w-screen-lg smxxl:flex-col">
        <img src={AvatarCart} alt="" />
        <div className="flex flex-col smxxl:w-1/2 xl:w-full justify-center items-center  p-12  rounded-lg">
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

      <div className="flex xl:flex-row justify-center items-center xl:w-screen xl:max-w-screen-lg smxxl:flex-col-reverse smxxl:w-full mb-24">
        <img src={Avatar} alt="" />
        <TimeLine />
      </div>
    </>
  );
}
