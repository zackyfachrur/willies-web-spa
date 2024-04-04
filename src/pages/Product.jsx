import "../index.css";
import SliderProduct from "../components/SliderOfProduct"
import SliderProductOfTwo from "../components/SliderProductOfTwo"
import Deliver from "../assets/delivery.png"
import SliderAbout from "../components/SliderOfAbout"
import { Tooltip, Button, Link } from "@nextui-org/react"

export default function Product() {
  return (
    <div className="justify-center items-center flex flex-col mt-32 mb-10">
      <div>
        <SliderProduct />
      </div>
      <div>
        <SliderProductOfTwo />
      </div>

      <SliderAbout />
      <div className="flex flex-row justify-center items-center ">
        <Tooltip
          content="The Wilies Shoes is the answer!"
          placement="top"
          className="bg-blue-900 px-5 text-white font-bold border-2 border-blue-900 rounded-lg drop-shadow-md smxxl:hidden sm:flex text-sm"
        >
          <Button
            as={Link}
            className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-80 smxxl:text-sm md:w-96 sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase cursor-default smxxl:hidden xl:flex"
            variant="flat"
          >
            Want to step up your fashion game?
          </Button>
        </Tooltip>
        <img
          src={Deliver}
          className="flex w-96 justify-center items-center smxxl:mb-40 smxxl:mt-20 mt-0 mb-0"
          alt=""
        />
      </div>

    </div>
  );
}
