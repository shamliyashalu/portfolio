import { motion } from "framer-motion";
import Heading from "../Components/Heading";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
// import image from "../assets/Images/image.png";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="w-full"
        >
          <Heading backGround={"DATA ANALYST"} forGround={"HI MY NAME IS"} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="mt-6 text-6xl sm:text-7xl md:text-[6rem] font-[1000] text-white z-20 font-montserrat flex relative"
        >
          <div>SHAM</div>
          {/* <img src={image} alt="" className="absolute w-1/2 h-auto left-1/2 transform -translate-x-1/2 -top-14 scale-150"/> */}
          <div>LIYA</div>
        </motion.h1>
        <div className="w-full flex justify-center items-center mt-6">
          <div className="w-1/2 flex justify-center items-center bg-clip-text bg-custom-gradient">
            <div className="relative inline-block bg-custom-gradient rounded-md p-[1px]">
              <button className="relative z-10 px-6 py-2 text-white rounded-md border-0 bg-[radial-gradient(circle_farthest-side,rgba(14,241,225,0.1),rgba(14,241,225,0))] bg-black">
                <span className="text-white hover:drop-shadow-[0_0_10px_rgba(173,223,250,0.8)] hover:text-transparent hover:bg-clip-text hover:bg-custom-gradient font-bold flex items-center justify-center gap-2">
                  <FaChevronLeft className="text-[#addffa] text-base drop-shadow-[0_0_10px_rgba(173,223,250,0.8)]" />
                  View Profile
                </span>
              </button>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center bg-clip-text bg-custom-gradient">
            <div className="relative inline-block bg-custom-gradient rounded-md p-[1px]">
              <button className="relative z-10 px-6 py-2 text-white rounded-md border-0 bg-[radial-gradient(circle_farthest-side,rgba(14,241,225,0.1),rgba(14,241,225,0))] bg-black">
                <span className="text-white hover:drop-shadow-[0_0_10px_rgba(173,223,250,0.8)] hover:text-transparent hover:bg-clip-text hover:bg-custom-gradient font-bold flex items-center justify-center gap-2">
                  Get in Touch
                  <FaChevronRight className="text-[#d08b8e] text-base drop-shadow-[0_0_10px_rgba(173,223,250,0.8)]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 absolute bottom-0 flex justify-center items-center gap-10 w-full">
        <button className="text-2xl md:text-4xl text-white">
          <FaLinkedinIn />
        </button>
        <button className="text-2xl md:text-4xl text-white">
          <FaInstagram />
        </button>
        <button className="text-2xl md:text-4xl text-white">
          <FaWhatsapp />
        </button>
        <button className="text-2xl md:text-4xl text-white">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default Hero;
