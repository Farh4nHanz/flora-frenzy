// videos
import BgVideo1 from "@assets/videos/bg-video-1.mp4";
import BgVideo2 from "@assets/videos/bg-video-2.mp4";

// components
import Navbar from "@components/navbar";
import BackgroundVideo from "@components/background-video";
import Footer from "@components/footer";

// sections
import HeroSection from "./sections/hero";
import ParallaxImageSection from "./sections/parallax-image";
import ProductSection from "./sections/products";
import BuzzSection from "./sections/buzzs";
import TextMarqueeSection from "./sections/text-marquee";
import NewsSection from "./sections/news";
import PartnerSection from "./sections/partners";
import FAQSection from "./sections/faqs";
import FounderSection from "./sections/founders";
import GallerySection from "./sections/gallery";
import ServiceSection from "./sections/services";
import SocialMediaSection from "./sections/socials";
import GetInTouchSection from "./sections/get-in-touch";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* sections */}
      <>
        <BackgroundVideo videoSrc={BgVideo1}>
          <HeroSection />
        </BackgroundVideo>

        <ParallaxImageSection />
        <ProductSection />
        <BuzzSection />
        <TextMarqueeSection />
        <NewsSection />

        <BackgroundVideo videoSrc={BgVideo2} />

        <PartnerSection />
        <FAQSection />
        <FounderSection />
        <GallerySection />

        <ServiceSection />
        <SocialMediaSection />
        <GetInTouchSection />
      </>

      <Footer />
    </>
  );
}

export default HomePage;
