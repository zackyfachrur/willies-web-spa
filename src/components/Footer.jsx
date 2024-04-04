import "../index.css";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white font-bold flex items-center justify-center xl:flex-row md:flex-col py-10 -mb-40 rounded-t-lg gap-40 smxxl:gap-10 flex-row h-full smxxl:flex-col max-w-screen-lg w-screen smxxl:w-screen">
      <div className="flex justify-center items-center gap-10">
        <p className="font-bold text-inherit text-1xl text-white text-shadow  px-5">
          The Wilies
          <span className="text-blue-900 bg-white px-5 py-1 rounded-lg ml-2">
            Shoes
          </span>
        </p>
      </div>
      <div className="flex items-center justify-end px-12">
        <nav>
          <ul className="flex gap-5 md:flex-row smxxl:flex-col smxxxl:text-center">
            <li>
              <a href="/" className="hover:bg-white hover:text-blue-900 py-1 px-3 rounded-lg hover:drop-shadow-md">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:bg-white hover:text-blue-900 py-1 px-3 rounded-lg hover:drop-shadow-md">
                About
              </a>
            </li>
            <li>
              <a href="/product" className="hover:bg-white hover:text-blue-900 py-1 px-3 rounded-lg hover:drop-shadow-md">
                Product
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:bg-white hover:text-blue-900 py-1 px-3 rounded-lg hover:drop-shadow-md">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>Copyright &copy; {new Date().getFullYear()}</div>
    </footer>
  );
}
