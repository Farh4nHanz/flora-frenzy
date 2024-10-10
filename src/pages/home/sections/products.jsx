import { motion } from "framer-motion";
import { Grid, GridItem } from "@chakra-ui/react";

// components
import Card from "@components/card";
import Button from "@components/button";

// icons
import { TiShoppingCart } from "react-icons/ti";

// utils
import { products } from "@utils/data";

function ProductSection() {
  const MotionGridItem = motion.create(GridItem);

  return (
    <section className="min-h-fit p-10 md:px-15 md:py-20">
      <motion.h1
        className="text-3xl 2xl:text-8xl md:text-5xl sm:text-4xl font-bold text-center mb-14 capitalize"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{
          type: "spring",
          damping: 10,
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        Our Green Gems
      </motion.h1>

      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={10}>
        {products.map((product) => (
          <MotionGridItem
            key={product.id}
            h="auto"
            bg="whiteAlpha.500"
            rounded="lg"
            shadow="xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card>
              <Card.Header imgSrc={product.image} />
              <Card.Body>
                <h1
                  className="text-2xl 2xl:text-5xl xl:text-3xl text-slate-950 font-bold capitalize"
                  style={{ letterSpacing: "3px" }}
                >
                  {product.title}
                </h1>
                <p className="text-sm 2xl:text-2xl xl:text-xl text-slate-800">
                  {product.price}
                </p>
                <p className="text-sm 2xl:text-2xl xl:text-xl text-slate-600">
                  {product.description}
                </p>
              </Card.Body>
              <Card.Footer>
                <Button className="flex overflow-hidden w-[7rem] 2xl:w-[9rem] xl:w-[8rem] hover:w-[8.2rem] 2xl:hover:w-[10.2rem] xl:hover:w-[9.2rem] items-center gap-2 xl:gap-4 bg-green-600 text-white 2xl:text-2xl xl:text-xl px-5 py-2 rounded-full transition-all duration-300 ease-in-out shadow-lg group relative">
                  Buy now
                  <TiShoppingCart
                    size="20px"
                    className="absolute opacity-0 group-hover:opacity-100 right-0 transition duration-100 -translate-x-3 xl:-translate-x-4"
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

export default ProductSection;
