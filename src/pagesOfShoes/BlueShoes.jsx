import "../index.css";
import BlueShoes from "../assets/shoes-5.jpg";

export default function Contact() {
  return (
    <div className="flex justify-center items-center xl:flex-row mt-32 mb-52 smxxxl:flex-col gap-20">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">
          $24
        </h2>
        <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">
          Blue Shoes
        </h2>
      </div>
      <img src={BlueShoes} alt="" />
    </div>
  );
}
