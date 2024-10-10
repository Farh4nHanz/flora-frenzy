import { motion } from "framer-motion";

function Text() {
  return (
    <motion.div
      className="text-5xl md:text-6xl text-center text-zinc-100 font-bold text-nowrap flex justify-center items-center"
      style={{ letterSpacing: "5px" }}
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <h1 className="pr-5">Transform Your Space with Lush Greenery</h1>
      <h1 className="pr-5">*</h1>
      <h1 className="pr-5">Unique Plants for Every Personality</h1>
      <h1 className="pr-5">*</h1>
    </motion.div>
  );
}

function TextMarqueeSection() {
  return (
    <section className="min-h-fit py-10 md:py-20 flex flex-col justify-center bg-green-600 overflow-x-hidden">
      <div
        className="flex"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
        }}
      >
        <Text />
        <Text />
      </div>
    </section>
  );
}

export default TextMarqueeSection;
