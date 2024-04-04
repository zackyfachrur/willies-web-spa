import "../index.css"
import DeliverContact from "../assets/delivery-2.png"
import { Button, Tooltip, Link } from "@nextui-org/react";

export default function Contact() {
 return (
   <div className="flex justify-center items-center xl:flex-row mt-32 mb-10 smxxxl:flex-col">
     <img src={DeliverContact} alt="" />
     <div className="flex flex-col">
       <div className="flex flex-col justify-center items-start gap-2">
         <label htmlFor="text" className="font-bold">
           Email
         </label>
         <input
           id="text"
           type="text"
           placeholder="Your Email"
           className="border-2 rounded-lg px-3 border-blue-900 placeholder:font-bold placeholder:text-sm font-bold text-sm"
         />
         <label htmlFor="text" className="font-bold">
           Message
         </label>
         <input
           id="text"
           type="text"
           placeholder="Your Message"
           className="border-2 rounded-lg px-3 border-blue-900 placeholder:font-bold placeholder:text-sm font-bold text-sm"
         />
         <label htmlFor="text" className="font-bold">
           Tip
         </label>
         <input
           id="text"
           type="text"
           placeholder="$ "
           className="border-2 rounded-lg px-3 border-blue-900 placeholder:font-bold placeholder:text-sm font-bold text-sm"
         />
       </div>

       <div className="p-3">
         <Tooltip
           content="Are You Sure?"
           className="bg-blue-900 px-5 text-white font-bold border-2 border-blue-900 rounded-lg drop-shadow-md flex text-sm m-3"
         >
           <Button
             as={Link}
             className="bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md flex"
             href="/submit"
             variant="flat"
           >
             Submit
           </Button>
         </Tooltip>
       </div>
     </div>
   </div>
 );
}