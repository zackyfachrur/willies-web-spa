import "../index.css";
import Slider from "react-slick";
import { Button, Link } from "@nextui-org/react";
import ShoesGreen from "../assets/shoes-3.jpeg";
import ShoesYellow from "../assets/shoes-4.jpeg";
import ShoesBlue from "../assets/shoes-5.jpg";
import Swal from "sweetalert2";

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

const BlueShoes = () => {
  Swal.fire({
    title: "$24",
    text: "Do you want to buy it?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Yes",
    confirmButtonColor: "#1e3a8a",
    cancelButtonColor: "#d33",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      setTimeout(function () {
        window.top.location = "/contact";
      }, 2000);
      Swal.fire({
        title: "Blue Shoes",
        text: "Sent Successfully!",
        icon: "success",
        confirmButtonColor: "#1e3a8a",
        confirmButtonText: "Done",
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: "Blue Shoes",
        text: "Cancelled!",
        icon: "error",
        confirmButtonColor: "#1e3a8a",
        confirmButtonText: "Done",
      });
    }
  });
};

const GreenShoes = () => {
  Swal.fire({
    title: "$35",
    text: "Do you want to buy it?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Yes",
    confirmButtonColor: "#1e3a8a",
    cancelButtonColor: "#d33",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      setTimeout(function () {
        window.top.location = "/contact";
      }, 2000);
      Swal.fire({
        title: "Green Shoes",
        text: "Sent Successfully!",
        icon: "success",
        confirmButtonColor: "#1e3a8a",
        confirmButtonText: "Done",
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: "Green Shoes",
        text: "Cancelled!",
        icon: "error",
        confirmButtonColor: "#1e3a8a",
        confirmButtonText: "Done",
      });
    }
  });
};

const YellowShoes = () => {
  Swal.fire({
    title: "$54",
    text: "Do you want to buy it?",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Yes",
    confirmButtonColor: "#1e3a8a",
    cancelButtonColor: "#d33",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      setTimeout(function () {
        window.top.location = "/contact";
      }, 2000);
      Swal.fire({
        title: "Yellow Shoes",
        text: "Sent Successfully!",
        icon: "success",
        confirmButtonColor: "#1e3a8a",
        confirmButtonText: "Done",
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: "Yellow Shoes",
        text: "Cancelled!",
        icon: "error",
        confirmButtonColor: "#1e3a8a",
        confirmButtonText: "Done",
      });
    }
  });
};

export default function SliderOfProduct() {
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
          Climbing Shoes
        </h2>
      </div>
      <Slider {...settings}>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">$24</h2>
          <h2 className="flex justify-center items-center font-bold">
            Blue Shoes
          </h2>
          <img src={ShoesBlue} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={BlueShoes}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5 h-32 w-32">
          <h2 className="flex justify-center items-center font-bold">$35</h2>
          <h2 className="flex justify-center items-center font-bold">
            Green Shoes
          </h2>
          <img src={ShoesYellow} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={GreenShoes}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">$54</h2>
          <h2 className="flex justify-center items-center font-bold">
            Yellow Shoes
          </h2>
          <img src={ShoesGreen} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={YellowShoes}
            >
              Buy
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
