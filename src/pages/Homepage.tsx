import FixedFooter from "../components/Homepage/fixedFooter/FixedFooter";
import HeroSlider from "../components/Homepage/heroSlider/HeroSlider";
import HomepageSlider from "../components/Homepage/heroSlider/HomepageSlider";
import WhyChooseUs from "../components/Homepage/whyChooseUs/WhyChooseUs";

const Homepage = () => {
  return (
    <>
      <HeroSlider />
      <HomepageSlider/>
      <WhyChooseUs/>
      <FixedFooter/>
    </>
  )
}

export default Homepage;