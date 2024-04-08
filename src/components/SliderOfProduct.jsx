import "../index.css";
import Slider from "react-slick";
import { Button, Link } from "@nextui-org/react";
import ShoesGreen from "../assets/shoes-3.jpeg";
import ShoesYellow from "../assets/shoes-4.jpeg";
import ShoesWhite from "../assets/white-runner.jpg";
import ShoesSpecial from "../assets/special-runner.jpg";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CustomArrow = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
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

const WhiteShoes = () => {
  Swal.fire({
    title: "$24",
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
            title: "Wilies Red Dot",
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
            title: "Wilies Red Dot",
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

const SpecialShoes = () => {
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
            title: "Wilies Sea Edition",
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
            title: "Wilies Sea Edition",
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

const GreenShoes = () => {
  Swal.fire({
    title: "$35",
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
            title: "Wilies Mix Green",
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
            title: "Wilies Mix Green",
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

const YellowShoes = () => {
  Swal.fire({
    title: "$54",
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
            title: "Wilies Half Yellow",
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
            title: "Wilies Half Yellow",
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
    <div
      className="lg:w-screen max-w-screen-smxxxl smxl:max-w-screen-smxxl sm:max-w-screen-smx md:max-w-screen-sm lg:max-w-screen-md lgx:max-w-screen-lg xl:w-full xl:max-w-screen-lg pb-20 gap-20 just"
      data-aos="fade-in"
      data-aos-duration="800"
    >
      <div className="flex justify-center items-center mb-10">
        <h2 className="flex justify-center items-center md:text-base font-bold md:px-5 text-white bg-blue-900  smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase w-56">
          Runner Shoes
        </h2>
      </div>
      <Slider {...settings}>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">$24</h2>
          <h2 className="flex justify-center items-center font-bold">
            Wilies Red Dot
          </h2>
          <img src={ShoesWhite} alt="" className="w-full" />
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
          <h2 className="flex justify-center items-center font-bold">$35</h2>
          <h2 className="flex justify-center items-center font-bold">
            Wilies Mix Green
          </h2>
          <img src={ShoesYellow} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900 hover:bg-white hover:border-blue-900 hover:text-blue-900 border-2 smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={GreenShoes}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">$78</h2>
          <h2 className="flex justify-center items-center font-bold">
            Wilies Sea Edition
          </h2>
          <img src={ShoesSpecial} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900 hover:bg-white hover:border-blue-900 hover:text-blue-900 border-2 smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
              variant="flat"
              onClick={SpecialShoes}
            >
              Buy
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <h2 className="flex justify-center items-center font-bold">$54</h2>
          <h2 className="flex justify-center items-center font-bold">
            Wilies Half Yellow
          </h2>
          <img src={ShoesGreen} alt="" className="w-full" />
          <div className="flex flex-col gap-2 w-full justify-center item">
            <Button
              as={Link}
              className="md:text-base font-bold md:px-5 text-white bg-blue-900 hover:bg-white hover:border-blue-900 hover:text-blue-900 border-2 smxxl:text-sm sm:text-sm rounded-lg smxxl:px-3 smxxl:py-1 text-center uppercase"
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
