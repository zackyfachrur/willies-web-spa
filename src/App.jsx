import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import { MutatingDots } from "react-loader-spinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homes from "./pages/Homes";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#1e3e8a"
          secondaryColor="#e1e1e3"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="font-bold text-inherit text-1xl text-blue-900 text-shadow px-5">
          The Wilies{" "}
          <span className="text-white bg-blue-900 px-5 py-1 rounded-lg">
            Shoes
          </span>
        </p>
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
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
