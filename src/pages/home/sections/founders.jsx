import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

// components
import Card from "@components/card";

// utils
import { founders } from "@utils/data";

function FounderSection() {
  const MotionGridItem = motion.create(GridItem);

  return (
    <section className="min-h-fit p-10 md:px-15 md:py-20">
      <motion.h1
        className="text-3xl 2xl:text-8xl md:text-5xl sm:text-4xl font-bold text-center mb-14 capitalize"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Meet Us
      </motion.h1>

      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {founders.map((founder, index) => (
          <MotionGridItem
            shadow="xl"
            rounded="lg"
            key={founder.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <Card>
              <Card.Header imgSrc={founder.profile} />
              <Card.Body>
                <h1 className="text-4xl md:text-3xl 2xl:text-5xl font-bold text-center mb-2">
                  {founder.name}
                </h1>
                <span className="text-lg 2xl:text-2xl text-center font-normal mb-5">
                  {founder.position}
                </span>
              </Card.Body>
            </Card>
          </MotionGridItem>
        ))}
      </Grid>
    </section>
  );
}

export default FounderSection;
