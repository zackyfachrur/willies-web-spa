import "../index.css";
import ClassicShoes from "../assets/shoesT-4.jpg";

export default function Contact() {
  return (
    <div className="flex justify-center items-center xl:flex-row mt-32 mb-28 smxxxl:flex-col">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">
          $52
        </h2>
        <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">
          Classic Shoes
        </h2>
      </div>
      <img src={ClassicShoes} alt="" />
    </div>
  );
}
