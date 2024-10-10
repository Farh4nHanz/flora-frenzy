import { Flex } from "@chakra-ui/react";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";

function SocialMediaSection() {
  const socialMedia = [
    {
      media: <FaFacebookF />,
      variant: "bg-blue-600 hover:text-blue-700 border-blue-700",
    },
    {
      media: <FaXTwitter />,
      variant: "bg-slate-800 hover:text-slate-800 border border-slate-800",
    },
    {
      media: <FaInstagram />,
      variant: "bg-pink-500 hover:text-pink-500 border border-pink-500",
    },
    {
      media: <PiTiktokLogoBold />,
      variant: "bg-slate-900 hover:text-slate-900 border border-slate-900",
    },
  ];

  return (
    <section className="min-h-fit p-10 md:px-15 md:py-20 2xl:py-40 flex flex-col justify-center">
      <h1 className="text-3xl 2xl:text-8xl md:text-5xl sm:text-4xl font-bold text-center mb-14 capitalize">
        Join Our Plant Party!
      </h1>

      <Flex
        gap={6}
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
      >
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href="#"
            className={`${social.variant} p-5 rounded-full cursor-pointer text-white hover:bg-white border transition-all duration-300 ease-in-out`}
          >
            <div className="text-2xl 2xl:text-6xl md:text-3xl sm:text-xl">
              {social.media}
            </div>
          </a>
        ))}
      </Flex>
    </section>
  );
}

export default SocialMediaSection;
