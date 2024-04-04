import "../index.css";
import Slider from "react-slick";
import { Button, Link } from "@nextui-org/react";
import ShoesT1 from "../assets/shoesT-1.png";
import ShoesT2 from "../assets/shoesT-2.png";
import ShoesT3 from "../assets/shoesT-3.png";
import ShoesT4 from "../assets/shoesT-4.jpg";

const CustomArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "none",
        border: 10 + "px" + " solid" + " #1e3a8a",
        borderRadius: 20 + "px",
      }}
      onClick={onClick}
    />
  );
};

export default function SliderProductOfTwo() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    centerPadding: "60px",
    speed: 700,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:w-screen max-w-screen-smxxxl smxl:max-w-screen-smxxl sm:max-w-screen-smx md:max-w-screen-sm lg:max-w-screen-md lgx:max-w-screen-lg xl:w-full xl:max-w-screen-lg pb-20 gap-20 just">
      <div className="flex justify-center items-center mb-10">
        <h2 className="flex justify-center items-center md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase w-56">
          Casual Shoes
        </h2>
      </div>
      <Slider {...settings}>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">$65</h2>
          <h2 className="flex justify-center items-center font-bold">
            White Shoes
          </h2>
          <img src={ShoesT1} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              href="/white"
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5 h-32 w-32">
          <h2 className="flex justify-center items-center font-bold">$78</h2>
          <h2 className="flex justify-center items-center font-bold">
            Brown Shoes
          </h2>
          <img src={ShoesT2} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              href="/brown"
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">$58</h2>
          <h2 className="flex justify-center items-center font-bold">
            Half Red Shoes
          </h2>
          <img src={ShoesT3} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              href="/halfred"
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">$52</h2>
          <h2 className="flex justify-center items-center font-bold">
            Classic Shoes
          </h2>
          <img src={ShoesT4} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              href="/classic"
            >
              Buy
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
