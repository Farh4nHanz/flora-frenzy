import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

function Images({ src, from, to }) {
  const MotionBox = motion.create(Box);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [`${from}`, `${to}`]);

  return (
    <MotionBox
      h="fit-content"
      rounded="3xl"
      width="full"
      className="flex justify-start max-h-56"
      gap={10}
      style={{ x }}
    >
      {src.map((image, index) => (
        <img
          src={image}
          alt="Image Gallery"
          className="max-w-56 sm:max-w-96 object-cover object-center rounded-3xl w-full"
          key={index}
        />
      ))}

      {src.map((image, index) => (
        <img
          src={image}
          alt="Image Gallery"
          className="max-w-56 sm:max-w-96 object-cover object-center rounded-3xl"
          key={index}
        />
      ))}

      {src.map((image, index) => (
        <img
          src={image}
          alt="Image Gallery"
          className="max-w-56 sm:max-w-96 object-cover object-center rounded-3xl"
          key={index}
        />
      ))}
    </MotionBox>
  );
}

function GallerySection() {
  const imageTop = [
    "https://r.mobirisesite.com/760230/assets/images/photo-1524964216597-d73f0f0272fe.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1504198266287-1659872e6590.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1488470015861-8bb1317353ef.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1457282168619-2383c79b278d.jpeg",
  ];

  const imageBottom = [
    "https://r.mobirisesite.com/760230/assets/images/photo-1531411795835-6ef88590ba93.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1501004318641-b39e6451bec6.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1493551511613-abc8320c265e.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1526040230106-e67018e68fc3.jpeg",
  ];

  return (
    <section className="min-h-fit py-10 xl:py-32 2xl:py-40 overflow-x-hidden flex flex-col justify-center gap-8">
      <Images src={imageTop} from="-100%" to="0%" />
      <Images src={imageBottom} from="0%" to="-100%" />
    </section>
  );
}

Images.propTypes = {
  src: PropTypes.array,
  from: PropTypes.string,
  to: PropTypes.string,
};

export default GallerySection;
