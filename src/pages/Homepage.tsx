import FixedFooter from "../components/Homepage/fixedFooter/FixedFooter";
import HeroSlider from "../components/Homepage/heroSlider/HeroSlider";
import CarsSlider from "../components/Homepage/carsSlider/CarsSlider";

const Homepage = () => {
  return (
    <>
      <HeroSlider />
      <CarsSlider />
      <FixedFooter/>
    </>
  )
}

export default Homepage;