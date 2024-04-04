import "../index.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function sliderOfAbout() {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 0.5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 0.5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 380,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 0.5,
          slidesToScroll: 1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: -1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: -1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 0.5,
          slidesToScroll: -1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 0.5,
          slidesToScroll: -1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 380,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 0.5,
          slidesToScroll: -1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <>
      <div className="lg:w-screen max-w-screen-smxxxl smxl:max-w-screen-smxxl sm:max-w-screen-smx md:max-w-screen-sm lg:max-w-screen-md lgx:max-w-screen-lg xl:w-full xl:max-w-screen-xl">
        <Slider {...settings}>
          <div>
            <h1 className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-96 md:w-96 sm:text-sm rounded-lg smxxl:px-3 text-center uppercase">
              Stride in Style with Wilies
            </h1>
          </div>
          <div>
            <h1 className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-96 md:w-96 sm:text-sm rounded-lg smxxl:px-3 text-center uppercase">
              Step Up with Wilies Shoes
            </h1>
          </div>
          <div>
            <h1 className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-96 md:w-96 sm:text-sm rounded-lg smxxl:px-3 text-center uppercase">
              Where Fashion Meets Comfort
            </h1>
          </div>
        </Slider>
      </div>
      <div className="lg:w-screen max-w-screen-smxxxl smxl:max-w-screen-smxxl sm:max-w-screen-smx md:max-w-screen-sm lg:max-w-screen-md lgx:max-w-screen-lg xl:w-full xl:max-w-screen-xl py-3">
        <Slider {...settings2}>
          <div>
            <h1 className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-96 md:w-96 sm:text-sm rounded-lg smxxl:px-3 text-center uppercase">
              Elevate Every Step
            </h1>
          </div>
          <div>
            <h1 className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-96 md:w-96 sm:text-sm rounded-lg smxxl:px-3 text-center uppercase">
              Fashionable Footwear
            </h1>
          </div>
          <div>
            <h1 className="md:text-base font-bold md:px-5 text-white bg-blue-900 sm:w-96 smxl:w-96 smxxl:w-96 md:w-96 sm:text-sm rounded-lg smxxl:px-3 text-center uppercase">
              Want to step up your fashion game?
            </h1>
          </div>
        </Slider>
      </div>
    </>
  );
}
