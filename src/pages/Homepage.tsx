import AboutUs from "../components/Homepage/AboutUs/AboutUs";
import CarFilters from "../components/Homepage/Filters/CarFilters";
import FixedFooter from "../components/Homepage/fixedFooter/FixedFooter";
import HeroSlider from "../components/Homepage/heroSlider/HeroSlider";
import HomepageSlider from "../components/Homepage/heroSlider/HomepageSlider";
import WhyChooseUs from "../components/Homepage/whyChooseUs/WhyChooseUs";

const Homepage = () => {
  return (
    <>
      <HeroSlider />
      <CarFilters/>
      <AboutUs/>
      <WhyChooseUs/>
      <HomepageSlider/>
      <FixedFooter/>
      
    </>
  )
}

export default Homepage;