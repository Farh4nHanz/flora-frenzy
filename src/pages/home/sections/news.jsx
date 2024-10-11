import { motion } from "framer-motion";
import { Grid, GridItem } from "@chakra-ui/react";

// components
import Card from "@components/card";
import Button from "@components/button";

// icons
import { HiArrowNarrowRight } from "react-icons/hi";

// utils
import { news } from "@utils/data";

function NewsSection() {
  const MotionGridItem = motion.create(GridItem);

  return (
    <section className="min-h-fit p-10 md:px-15 md:py-20">
      <motion.h1
        className="text-3xl 2xl:text-8xl md:text-5xl sm:text-4xl font-bold text-center mb-14 capitalize"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        Lates Plant News
      </motion.h1>

      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={8}>
        {news.map((item) => (
          <MotionGridItem
            key={item.id}
            h="auto"
            bg="whiteAlpha.500"
            rounded="lg"
            shadow="xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <Card.Header imgSrc={item.image} />
              <Card.Body>
                <h1
                  className="text-2xl 2xl:text-5xl text-slate-950 font-bold capitalize"
                  style={{ letterSpacing: "3px" }}
                >
                  {item.title}
                </h1>
                <p className="text-xs xl:text-md 2xl:text-lg text-slate-600">
                  {new Date(item.date).toLocaleDateString("id-ID")}
                </p>
                <p className="text-sm 2xl:text-lg text-slate-700">
                  {item.body}
                </p>
              </Card.Body>
              <Card.Footer>
                <Button className="flex overflow-hidden w-[7rem] 2xl:w-[9rem] hover:w-[8.2rem] 2xl:hover:w-[10.2rem] items-center gap-2 2xl:gap-4 bg-green-600 text-white 2xl:text-2xl px-5 py-2 rounded-full transition-all duration-300 ease-in-out shadow-lg group relative">
                  Explore
                  <HiArrowNarrowRight
                    size="20px"
                    className="absolute opacity-0 group-hover:opacity-100 right-0 transition duration-100 -translate-x-4 2xl:-translate-x-4"
                  />
                </Button>
              </Card.Footer>
            </Card>
          </MotionGridItem>
        ))}
      </Grid>
    </section>
  );
}

export default NewsSection;
