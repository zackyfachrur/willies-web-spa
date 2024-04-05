import "../index.css";
import ContactPhone from "../assets/contactPhone.png";
import { Button, Link } from "@nextui-org/react";
import Swal from "sweetalert2";

export default function Contact() {
  const SubmitOfContact = () => {
    Swal.fire({
      text: "Do you want to sent it?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#1e3a8a",
      cancelButtonColor: "#d33",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(function () {
          window.top.location = "/";
        }, 2000);
        Swal.fire({
          title: "Thank You",
          text: "Messages Has Been Sent!",
          icon: "success",
          confirmButtonColor: "#1e3a8a",
          confirmButtonText: "Done",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Half Red Shoes",
          text: "Cancelled!",
          icon: "error",
          confirmButtonColor: "#1e3a8a",
          confirmButtonText: "Done",
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center xl:flex-row mt-32 mb-60 smxxxl:flex-col xl:gap-40">
      <img src={ContactPhone} alt="" className="xl:w-1/4 smxxl:w-1/2" />
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="text" className="font-bold">
            Email
          </label>
          <input
            id="text"
            type="text"
            placeholder="Your Email"
            className="border-2 rounded-lg py-1 px-4 border-blue-900 placeholder:font-bold placeholder:text-sm font-bold text-sm bg-blue-900 text-white"
          />
          <label htmlFor="text" className="font-bold">
            Message
          </label>
          <input
            id="text"
            type="text"
            placeholder="Your Message"
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

        <div className="p-3">
          <Button
            as={Link}
            className="bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex"
            onClick={SubmitOfContact}
            variant="flat"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
