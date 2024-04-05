import "../index.css";
import SliderProduct from "../components/SliderOfProduct"
import SliderProductOfTwo from "../components/SliderProductOfTwo";
import SliderAbout from "../components/SliderOfAbout";
export default function Product() {
  return (
    <div className="justify-center items-center flex flex-col mt-32 mb-10">
      <div>
        <SliderProduct />
      </div>
      <div>
        <SliderProductOfTwo />
      </div>

      <SliderAbout />
    </div>
  );
}
