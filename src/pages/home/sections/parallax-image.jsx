import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxImageSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <motion.section
      ref={ref}
      className="h-screen w-full relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage:
            "url(https://r.mobirisesite.com/760230/assets/images/photo-1494537176433-7a3c4ef2046f.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      ></motion.div>
    </motion.section>
  );
}

export default ParallaxImageSection;
