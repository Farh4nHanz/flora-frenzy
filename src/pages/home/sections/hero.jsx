// icons
import { HiArrowNarrowRight } from "react-icons/hi";

function HeroSection() {
  return (
    <>
      <div className="absolute w-screen h-screen bg-black opacity-50 -z-10"></div>

      <div className="flex flex-col justify-center items-start gap-5 xl:gap-8 2xl:gap-10 text-white absolute bottom-0 left-0 h-4/6 w-full px-5 md:px-10 z-10">
        <h1
          className="text-4xl 2xl:text-9xl xl:text-6xl md:text-5xl"
          style={{ color: "#ffc091" }}
        >
          Plant Paradise
        </h1>
        <p className="text-lg 2xl:text-6xl xl:text-3xl md:text-2xl">
          Transform your space with our vibrant, quirky plants that scream
          personality!
        </p>
        <a
          href="#"
          className="flex justify-center items-center gap-2 bg-transparent border border-slate-200 px-6 py-3 md:py-4 2xl:py-6 md:px-8 rounded-full text-base md:text-lg 2xl:text-4xl font-medium hover:bg-white hover:text-black transition duration-500 ease-in-out"
        >
          Explore now
          <HiArrowNarrowRight className="text-xl md:text-2xl 2xl:text-5xl" />
        </a>
      </div>
    </>
  );
}

export default HeroSection;
