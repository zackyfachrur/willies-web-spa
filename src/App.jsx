import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import { MutatingDots } from "react-loader-spinner";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homes from "./pages/Homes";
import About from "./pages/About"
import Product from "./pages/Product"
import Contact from "./pages/Contact";
import SubmitContact from "./pages/SubmitOfContact"
import YellowShoes from "./pagesOfShoes/YellowShoes"
import GreenShoes from "./pagesOfShoes/GreenShoes"
import BlueShoes from "./pagesOfShoes/BlueShoes"
import WhiteShoes from "./pagesOfShoes/WhiteShoes"
import BrownShoes from "./pagesOfShoes/BrownShoes"
import HalfRedShoes from "./pagesOfShoes/HalfRedShoes"
import ClassicShoes from "./pagesOfShoes/ClassicShoes"

function App() {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 500);
}, [])

if (isLoading) {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#1d52d8"
        secondaryColor="#e1e1e3"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homes />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/submit" element={<SubmitContact />}></Route>
        <Route path="/yellow" element={<YellowShoes />}></Route>
        <Route path="/green" element={<GreenShoes />}></Route>
        <Route path="/blue" element={<BlueShoes />}></Route>
        <Route path="/white" element={<WhiteShoes />}></Route>
        <Route path="/brown" element={<BrownShoes />}></Route>
        <Route path="/halfred" element={<HalfRedShoes />}></Route>
        <Route path="/classic" element={<ClassicShoes />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
