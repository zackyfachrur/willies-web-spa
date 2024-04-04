import "../index.css";
import HalfRedShoes from "../assets/shoesT-3.png";

export default function Contact() {
  return (
    <div className="flex justify-center items-center xl:flex-row mt-32 mb-28 smxxxl:flex-col">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">
          $58
        </h2>
        <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">
          Half Red Shoes
        </h2>
      </div>
      <img src={HalfRedShoes} alt="" />
    </div>
  );
}
