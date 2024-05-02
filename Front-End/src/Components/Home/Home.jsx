import DiscoverSection from "./DiscoverSection/DiscoverSection";
import FeaturedArticles from "./FeaturedArticles/FeaturedArticles";
import PartnersLogo from "./PartnersLogos/PartnersLogos";
import { Slider } from "./Slider/Slider";

function Home(lang) {
  // console.log(lang.lang);
  return (
    <>
      <Slider lang={lang} />
      <DiscoverSection lang={lang} />
      <PartnersLogo />
      <FeaturedArticles lang={lang} />
    </>
  );
}

export default Home;
