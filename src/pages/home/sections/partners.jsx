import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

function PartnerSection() {
  const partnerImages = [
    "https://r.mobirisesite.com/760230/assets/images/photo-1554463529-e27854014799.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1606136968306-ab2868cc1f21.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1579041925709-798d7d0fed1d.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1646825461394-ebd1800141d1.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1651853082689-706323a31427.jpeg",
    "https://r.mobirisesite.com/760230/assets/images/photo-1651044450619-5ce74d316987.jpeg",
  ];

  const MotionGridItem = motion.create(GridItem);

  return (
    <div className="min-h-fit bg-white p-10 md:px-15 md:py-20">
      <motion.h1
        className="text-3xl 2xl:text-8xl md:text-5xl sm:text-4xl font-bold text-center mb-14 capitalize"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          type: "spring",
          damping: 20,
          duration: 0.8,
          bounce: 0.4,
          ease: "easeInOut",
        }}
      >
        Our Trusted Partners
      </motion.h1>

      <Grid
        templateColumns={"repeat(auto-fit, minmax(150px, 1fr))"}
        gap={8}
        overflowX={"hidden"}
      >
        {partnerImages.map((partnerImage, index) => (
          <MotionGridItem
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              type: "spring",
              duration: 0.8,
              stiffness: 300,
              damping: 20,
              bounce: 0.4,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          >
            <img
              src={partnerImage}
              alt="Partner Image"
              className="rounded-3xl grayscale"
            />
          </MotionGridItem>
        ))}
      </Grid>
    </div>
  );
}

export default PartnerSection;
