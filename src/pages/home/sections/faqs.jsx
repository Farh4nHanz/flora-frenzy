import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

// utils
import { faqs } from "@utils/data";

function FAQSection() {
  return (
    <section
      className="min-h-fit p-10 md:px-15 md:py-20"
      style={{ background: "#fafafa" }}
    >
      <h1 className="text-3xl md:text-5xl sm:text-4xl 2xl:text-8xl font-bold text-center mb-14 capitalize">
        Plantastic FAQs
      </h1>
      <Accordion allowToggle backgroundColor="#fff" mb={3} rounded="xl">
        {faqs.map((faq) => (
          <AccordionItem py={3} rounded="xl" border="none" px={3} key={faq.id}>
            <h1 className="text-2xl 2xl:text-4xl font-bold">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel
              pb={4}
              className="text-sm 2xl:text-md text-slate-900"
            >
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQSection;
