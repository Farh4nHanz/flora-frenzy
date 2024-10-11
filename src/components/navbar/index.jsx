import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// components
import Button from "@components/button";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1140px] fixed top-10 left-0 right-0 z-50 px-3 m-auto">
      <nav className="w-full bg-gray-100 h-16 px-5 py-3 rounded-xl flex flex-nowrap justify-between items-center max-md:flex-wrap">
        {/* logo */}
        <h1 className="text-2xl font-bold text-slate-700 max-md:text-lg cursor-pointer">
          FloraFrenzy
        </h1>

        {/* hamburger menu on tablet and mobile */}
        <motion.div
          className="block md:hidden hover:cursor-pointer"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </motion.div>

        {/* nav item and button on large screen */}
        <>
          <div className="hidden md:flex space-x-6">
            <NavItem />
          </div>

          <Button className="h-10 min-w-fit justify-center items-center gap-3 transition duration-500 text-base hidden md:flex bg-green-500 hover:bg-green-700 rounded-full py-3 px-5 text-white font-bold">
            Get Growing!
          </Button>
        </>

        {/* mobile menu */}
        <motion.div
          className="md:hidden absolute left-0 right-0 bg-gray-100 shadow-lg rounded-xl p-3 mx-3 origin-top"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={
            isOpen ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {isOpen && (
            <>
              <NavItem isMobile={true} />
              <Button className="w-full h-10 flex justify-center items-center bg-green-500 hover:bg-green-700 rounded-full py-3 px-5 text-base text-white font-bold mt-3 max-md:text-sm transition duration-500">
                Get Growing!
              </Button>
            </>
          )}
        </motion.div>

        {isOpen && (
          <div className="absolute h-screen bg-black inset-0 -top-10 opacity-50 -z-10"></div>
        )}
      </nav>
    </div>
  );
}

function NavItem({ isMobile = false }) {
  const baseClass = "p-3 rounded-md hover:bg-green-200 transition duration-200";
  const mobileClass = isMobile ? "block w-full text-center" : "";

  return (
    <motion.div
      className={`flex ${
        isMobile ? "flex-col" : "flex-row"
      } gap-3 justify-center items-center text-base font-semibold max-md:text-sm`}
    >
      <a href="#" className={`${baseClass} ${mobileClass}`}>
        Home
      </a>
      <a href="#" className={`${baseClass} ${mobileClass}`}>
        Shop
      </a>
      <a href="#" className={`${baseClass} ${mobileClass}`}>
        Contact
      </a>
    </motion.div>
  );
}

NavItem.propTypes = {
  isMobile: PropTypes.bool,
};

export default Navbar;
