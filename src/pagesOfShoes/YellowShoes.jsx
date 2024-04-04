import "../index.css";
import YellowShoes from "../assets/shoes-3.jpeg";

export default function Contact() {
  return (
    <div className="flex justify-center items-center xl:flex-row mt-32 mb-20 smxxxl:flex-col">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">
          $54
        </h2>
        <h2 className="font-bold bg-blue-900 py-1 px-3 rounded-lg text-white">
          Yellow Shoes
        </h2>
      </div>
      <img src={YellowShoes} alt="" />
    </div>
  );
}
