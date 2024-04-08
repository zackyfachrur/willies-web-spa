import "../index.css";
import ContactPhone from "../assets/contactPhone.png";
import Swal from "sweetalert2";
import { Button, Link } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  const SubmitOfContact = () => {
    Swal.fire({
      text: "Do you want to sent it?",
      showCancelButton: true,
      cancelButtonText: "No",
      showDenyButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: "Yes",
      buttonsStyling: false,
      customClass: {
        confirmButton:
          "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
        cancelButton:
          "bg-red-700 px-5 text-white font-bold hover:bg-white hover:text-red-700 border-2 border-red-700 rounded-lg hover:border-red-700 hover:drop-shadow-md flex cursor-pointer",
      },
    }).then((result) => {
      const message = document.getElementById("message");
      const email = document.getElementById("email");
      const emailValidator =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (
        !email.value.match(emailValidator) &&
        message.value.trim() == 0 &&
        !result.isDismissed
      ) {
        Swal.fire({
          title: "Email and Message",
          text: "is Empty :(",
          icon: "error",
          confirmButtonText: "Done",
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
          },
        });
      } else if (result.isDismissed) {
        return;
      } else if (!email.value.match(emailValidator) && message.value) {
        Swal.fire({
          title: "Email",
          text: "Email Must Have @ :(",
          icon: "error",
          confirmButtonText: "Done",
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
          },
        });
      } else if (
        message.value == "" ||
        message.value == null ||
        message.value.trim() == 0
      ) {
        Swal.fire({
          title: "Message",
          text: "is Empty :(",
          icon: "error",
          confirmButtonText: "Done",
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer mr-3",
          },
        });
      } else if (result.value) {
        setTimeout(function () {
          window.top.location = "/";
        }, 2000);
        let timerInterval;
        Swal.fire({
          title: "Thank You For Your Submit!",
          html: "Messages Will Be Sent In <b></b>",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }
    });
  };

  return (
    <div
      className="flex justify-center items-center xl:flex-row mt-32 mb-60 smxxxl:flex-col xl:gap-40"
      data-aos="fade-in"
      data-aos-duration="800"
    >
      <img src={ContactPhone} alt="" className="xl:w-1/4 smxxl:w-1/2" />
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="text" className="font-bold">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Your Email"
            className="border-2 rounded-lg py-1 px-4 border-blue-900 placeholder:font-bold placeholder:text-sm font-bold text-sm bg-blue-900 text-white"
          />
          <label htmlFor="text" className="font-bold">
            Message
          </label>
          <input
            id="message"
            type="text"
            placeholder="Your Messages"
            className="border-2 rounded-lg py-1 px-4 border-blue-900 placeholder:font-bold placeholder:text-sm font-bold text-sm bg-blue-900 text-white"
          />
          <label htmlFor="text" className="font-bold">
            Tip
          </label>
          <input
            id="text"
            type="text"
            placeholder="$ "
            className="border-2 rounded-lg py-1 px-4 border-blue-900 placeholder:font-bold placeholder:text-sm font-bold text-sm bg-blue-900 text-white"
          />
        </div>

        <div className="p-3 flex justify-center items-center">
          <Button
            onClick={SubmitOfContact}
            as={Link}
            className="bg-blue-900 px-5 text-white font-bold hover:bg-white
            hover:text-blue-900 border-2 border-blue-900 rounded-lg
            hover:border-blue-900 hover:drop-shadow-md flex cursor-pointer"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
