import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import { fetchCarDetail } from "../../slice/carSlice";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import { UsedCarType } from "../../slice/carSlice";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { LIGHT_GRAY } from "../../colors";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import "./style.scss";
import CarOverview from "../../components/CarOverview";
import HyundaiAssuraed from "../../components/HyundaiAssuraed";
import InspectionReport from "../../components/InspectionReport";

const settings = {
  arrows: true,
  dots: true,
};

const CarDetailPage = () => {
  const selectedCar: UsedCarType = useAppSelector((state) => state.car.selectedCar);
  const dispatch = useAppDispatch();
  let { id }: any = useParams();

  useEffect(() => {
    dispatch(fetchCarDetail(id));
  }, []);

  return (
    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", columnGap: "26px", padding: "32px 0" }} className="car_detail_page">
      <Box sx={{ width: "60%" }}>
        <Slider {...settings}>
          {selectedCar?.photos?.map((img: string, i: number) => (
            <img key={i} src={img} className="used_car_picture" />
          ))}
        </Slider>
        <CarOverview />
        <HyundaiAssuraed />
        <InspectionReport />
      </Box>

      <Box sx={{ width: "30%" }}>
        <Box border={1} borderColor={LIGHT_GRAY} p={2} borderRadius={2} position="sticky" top={32}>
          <Typography color="primary" variant="h6" fontWeight={600}>
            {selectedCar.mfg_year} {selectedCar.name}
          </Typography>

          <Box display="flex" alignItems="center" columnGap={1}>
            <Typography variant="body1" color="primary">
              {(selectedCar.km_driven / 1000).toFixed(2)}K Km
            </Typography>
            <Typography variant="body1" color="primary" textTransform="capitalize">
              - {selectedCar.fuel} -
            </Typography>
            <Typography variant="body1" color="primary" textTransform="capitalize">
              {selectedCar.transmission}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" columnGap={1} color="#555" mt={2} mb={1}>
            <HomeRoundedIcon fontSize="small" />
            <Typography variant="body2">Home Test Drive: Available</Typography>
          </Box>

          <Box display="flex" alignItems="center" columnGap={1} color="#555">
            <LocationOnRoundedIcon fontSize="small" />
            <Typography variant="body2">Location Of Showroom</Typography>
          </Box>

          <Box bgcolor={LIGHT_GRAY} height="1px" my={2} />

          <Box display="flex" alignItems="center" columnGap="1px">
            <CurrencyRupeeIcon color="primary" sx={{ fontSize: "24px" }} />
            <Typography variant="h5" color="primary" fontWeight="medium">
              {(selectedCar.price / 100000).toFixed(2)} LAKH
            </Typography>
            <Box sx={{ cursor: "pointer" }} ml={1} display="flex" alignItems="center">
              <Typography variant="caption" color="#0288d1">
                View Benefits
              </Typography>
              <ChevronRightRoundedIcon color="info" fontSize="small" />
            </Box>
          </Box>
          <Typography variant="caption" color="#555">
            Fixed on-road price
          </Typography>

          <Box display="flex" alignItems="center" mt={1}>
            <Typography variant="caption" fontWeight={600} color="#2e7d32" sx={{ cursor: "pointer" }}>
              Check your savings
            </Typography>
            <ChevronRightRoundedIcon color="success" fontSize="small" sx={{ cursor: "pointer" }} />
          </Box>

          <Box display="flex" alignItems="center" my={2} justifyContent="center" columnGap={1}>
            <Button variant="contained" fullWidth size="large">
              Book now
            </Button>
            <Button variant="contained" fullWidth color="error" size="large">
              Free test drive
            </Button>
          </Box>

          <Typography variant="caption">
            <Typography display="inline-block" variant="caption" fontWeight={600} color="primary">
              Guaranteed Buyback:
            </Typography>{" "}
            Return this car to us within a tenure of 6, 12 or 18 months at guaranteed prices.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default CarDetailPage;
