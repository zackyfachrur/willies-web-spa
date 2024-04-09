import "../index.css";
import Slider from "react-slick";
import { Button, Link } from "@nextui-org/react";
import ShoesT1 from "../assets/shoesT-1.png";
import ShoesT2 from "../assets/shoesT-2.png";
import ShoesT3 from "../assets/shoesT-3.png";
import ShoesT4 from "../assets/shoesT-4.jpg";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  WiliesClassic,
  WiliesFullWhite,
  WiliesHigh,
  WiliesRedLine,
} from "./ShoesController";

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
  useEffect(() => {
    AOS.init();
  }, []);
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

  const WhiteShoes = () => {
    Swal.fire({
      title: "$65",
      text: "Do you want to buy it?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#1e3a8a",
      cancelButtonColor: "#d33",
      cancelButtonText: `No`,
      allowOutsideClick: false,
      allowEscapeKey: false,
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
        cancelButton:
          "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Information",
          icon: "info",
          text: "Do you want to messages us?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Yes",
          confirmButtonColor: "#1e3a8a",
          cancelButtonColor: "#d33",
          cancelButtonText: `No`,
          allowOutsideClick: false,
          allowEscapeKey: false,
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
            cancelButton:
              "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
          },
        }).then((submit) => {
          if (submit.isConfirmed) {
            setTimeout(function () {
              window.top.location = "/contact";
            }, 2000);
            let timerContact;
            Swal.fire({
              title: "Wilies Full White",
              text: "Sent Successfully!",
              icon: "success",
              html: "Your order will be sent in <b></b>",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerContact = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerContact);
              },
            }).then((submit) => {
              if (submit.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          } else if (submit.isDismissed) {
            setTimeout(function () {
              window.top.location = "/";
            }, 2000);
            let timerSubmit;
            Swal.fire({
              title: "Wilies Full White",
              text: "Sent Successfully!",
              icon: "success",
              html: "Your order will be sent in <b></b>",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerSubmit = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerSubmit);
              },
            }).then((submit) => {
              if (submit.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          }
        });
      } else if (result.isDismissed) {
        return;
      }
    });
  };

  const BrownShoes = () => {
    Swal.fire({
      title: "$78",
      text: "Do you want to buy it?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#1e3a8a",
      cancelButtonColor: "#d33",
      cancelButtonText: `No`,
      allowOutsideClick: false,
      allowEscapeKey: false,
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
        cancelButton:
          "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Information",
          icon: "info",
          text: "Do you want to messages us?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Yes",
          confirmButtonColor: "#1e3a8a",
          cancelButtonColor: "#d33",
          cancelButtonText: `No`,
          allowOutsideClick: false,
          allowEscapeKey: false,
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
            cancelButton:
              "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
          },
        }).then((submit) => {
          if (submit.isConfirmed) {
            setTimeout(function () {
              window.top.location = "/contact";
            }, 2000);
            let timerContact;
            Swal.fire({
              title: "Wilies High",
              text: "Sent Successfully!",
              icon: "success",
              html: "Your order will be sent in <b></b>",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerContact = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerContact);
              },
            }).then((submit) => {
              if (submit.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          } else if (submit.isDismissed) {
            setTimeout(function () {
              window.top.location = "/";
            }, 2000);
            let timerSubmit;
            Swal.fire({
              title: "Wilies High",
              text: "Sent Successfully!",
              icon: "success",
              html: "Your order will be sent in <b></b>",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerSubmit = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerSubmit);
              },
            }).then((submit) => {
              if (submit.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          }
        });
      } else if (result.isDismissed) {
        return;
      }
    });
  };

  const HalfRedShoes = () => {
    Swal.fire({
      title: "$58",
      text: "Do you want to buy it?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#1e3a8a",
      cancelButtonColor: "#d33",
      cancelButtonText: `No`,
      allowOutsideClick: false,
      allowEscapeKey: false,
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
        cancelButton:
          "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Information",
          icon: "info",
          text: "Do you want to messages us?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Yes",
          confirmButtonColor: "#1e3a8a",
          cancelButtonColor: "#d33",
          cancelButtonText: `No`,
          allowOutsideClick: false,
          allowEscapeKey: false,
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
            cancelButton:
              "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
          },
        }).then((submit) => {
          if (submit.isConfirmed) {
            setTimeout(function () {
              window.top.location = "/contact";
            }, 2000);
            let timerContact;
            Swal.fire({
              title: "Wilies Red Line",
              text: "Sent Successfully!",
              icon: "success",
              html: "Your order will be sent in <b></b>",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerContact = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerContact);
              },
            }).then((submit) => {
              if (submit.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          } else if (submit.isDismissed) {
            setTimeout(function () {
              window.top.location = "/";
            }, 2000);
            let timerSubmit;
            Swal.fire({
              title: "Wilies Red Line",
              text: "Sent Successfully!",
              icon: "success",
              html: "Your order will be sent in <b></b>",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerSubmit = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerSubmit);
              },
            }).then((submit) => {
              if (submit.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          }
        });
      } else if (result.isDismissed) {
        return;
      }
    });
  };

  const ClassicShoes = () => {
    Swal.fire({
      title: "$52",
      text: "Do you want to buy it?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#1e3a8a",
      cancelButtonColor: "#d33",
      cancelButtonText: `No`,
      allowOutsideClick: false,
      allowEscapeKey: false,
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
        cancelButton:
          "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Information",
          icon: "info",
          text: "Do you want to messages us?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Yes",
          confirmButtonColor: "#1e3a8a",
          cancelButtonColor: "#d33",
          cancelButtonText: `No`,
          allowOutsideClick: false,
          allowEscapeKey: false,
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
            cancelButton:
              "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
          },
        }).then((submit) => {
          if (submit.isConfirmed) {
            setTimeout(function () {
              window.top.location = "/contact";
            }, 2000);
            let timerContact;
            Swal.fire({
              title: "Wilies Classic",
              text: "Sent Successfully!",
              icon: "success",
              html: "Your order will be sent in <b></b>",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerContact = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerContact);
              },
            }).then((submit) => {
              if (submit.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          } else if (submit.isDismissed) {
            setTimeout(function () {
              window.top.location = "/";
            }, 2000);
            let timerSubmit;
            Swal.fire({
              title: "Wilies Classic",
              text: "Sent Successfully!",
              icon: "success",
              html: "Your order will be sent in <b></b>",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerSubmit = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerSubmit);
              },
            }).then((submit) => {
              if (submit.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          }
        });
      } else if (result.isDismissed) {
        return;
      }
    });
  };

  return (
    <div
      className="lg:w-screen max-w-screen-smxxxl smxl:max-w-screen-smxxl sm:max-w-screen-smx md:max-w-screen-sm lg:max-w-screen-md lgx:max-w-screen-lg xl:w-full xl:max-w-screen-lg pb-20 gap-20 just"
      data-aos="fade-in"
      data-aos-duration="800"
    >
      <div className="flex justify-center items-center mb-10">
        <h2 className="flex justify-center items-center md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase w-56">
          Wilies Casual
        </h2>
      </div>
      <Slider {...settings}>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">
            {WiliesFullWhite.price}
          </h2>
          <h2 className="flex justify-center items-center font-bold">
            {WiliesFullWhite.name}
          </h2>
          <img src={ShoesT1} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900 hover:bg-white hover:border-blue-900 hover:text-blue-900 border-2 smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={WhiteShoes}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5 h-32 w-32">
          <h2 className="flex justify-center items-center font-bold">
            {WiliesHigh.price}
          </h2>
          <h2 className="flex justify-center items-center font-bold">
            {WiliesHigh.name}
          </h2>
          <img src={ShoesT2} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900 hover:bg-white hover:border-blue-900 hover:text-blue-900 border-2 smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={BrownShoes}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">
            {WiliesRedLine.price}
          </h2>
          <h2 className="flex justify-center items-center font-bold">
            {WiliesRedLine.name}
          </h2>
          <img src={ShoesT3} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900 hover:bg-white hover:border-blue-900 hover:text-blue-900 border-2 smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={HalfRedShoes}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">
            {WiliesClassic.price}
          </h2>
          <h2 className="flex justify-center items-center font-bold">
            {WiliesClassic.name}
          </h2>
          <img src={ShoesT4} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900 hover:bg-white hover:border-blue-900 hover:text-blue-900 border-2 smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={ClassicShoes}
            >
              Buy
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
