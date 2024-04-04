import "../index.css";
import DeliverContact from "../assets/delivery-2.png";

export default function Contact() {
  return (
    <div className="flex justify-center items-center xl:flex-row mt-32 mb-10 smxxxl:flex-col">
      <img src={DeliverContact} alt="" />
      <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">Thank You For Your Support!</h2>
    </div>
  );
}
