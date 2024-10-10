import { motion } from "framer-motion";
import { Grid, GridItem } from "@chakra-ui/react";

// components
import Card from "@components/card";

import { buzzers } from "@utils/data";

function BuzzSection() {
  const MotionGridItem = motion.create(GridItem);

  return (
    <section
      className="min-h-fit p-10 md:px-15 md:py-20"
      style={{ background: "#fafafa" }}
    >
      <motion.h1
        className="text-3xl 2xl:text-8xl md:text-5xl sm:text-4xl font-bold text-center mb-3 capitalize"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          type: "spring",
          duration: 0.8,
          stiffness: 300,
          damping: 20,
          bounce: 0.4,
          ease: "easeInOut",
        }}
      >
        Buzz
      </motion.h1>

      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={10}
        overflowX={"hidden"}
        py={10}
      >
        {buzzers.map((buzzer, index) => (
          <MotionGridItem
            key={buzzer.id}
            h="auto"
            bg="whiteAlpha.500"
            rounded="lg"
            shadow="xl"
            initial={{ opacity: 0, x: -100 }}
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
            <Card>
              <div className="px-8 py-5 w-full flex flex-col justify-between gap-7">
                <h1 className="text-lg 2xl:text-2xl text-slate-800 text-center">
                  {buzzer.comment}
                </h1>

                <div className="flex flex-col justify-between items-center gap-5">
                  <img
                    src={buzzer.profile}
                    alt={buzzer.name.toLowerCase()}
                    className="rounded-full w-20 object-cover object-center self-center italic text-sm"
                  />
                  <p className="text-xl 2xl:text-2xl font-bold text-center">
                    {buzzer.name}
                  </p>
                </div>
              </div>
            </Card>
          </MotionGridItem>
        ))}
      </Grid>
    </section>
  );
}

export default BuzzSection;
