import FixedFooter from "../components/Homepage/fixedFooter/FixedFooter";
import HeroSlider from "../components/Homepage/heroSlider/HeroSlider";
import HomepageSlider from "../components/Homepage/heroSlider/HomepageSlider";

const Homepage = () => {
  return (
    <>
      <HeroSlider />
      <HomepageSlider/>
      <FixedFooter/>
    </>
  )
}

export default Homepage;