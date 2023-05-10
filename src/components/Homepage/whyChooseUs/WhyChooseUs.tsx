import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { BLUE } from "../../../colors";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import Tucson from "../../../assets/tucson.png";
import LocalCarWashOutlinedIcon from "@mui/icons-material/LocalCarWashOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const WhyChooseUs = () => {
  return (
    <Box bgcolor={BLUE} py={10}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <Box display="flex" alignItems="center" columnGap={1}>
              <DirectionsCarOutlinedIcon sx={{ color: "white" }} />
              <Typography color="white" variant="button" fontWeight={600} letterSpacing={1}>
                Why Choose Us
              </Typography>
            </Box>
            <Typography color="white" variant="h5" fontWeight={600} letterSpacing={1} maxWidth={300} my={2}>
              We Are Dedicated To Provide Quality Service
            </Typography>
            <Typography color="white" variant="subtitle1" mb={4}>
              There are many variations of passages available but the majority have suffered alteration in some form
              going to use a passage by injected humour randomised words which don't look even slightly believable.
            </Typography>
            <img src={Tucson} alt="car-image" width="100%" />
          </Grid>

          <Grid item xs={12} lg={6} container spacing={2} color="white">
            <Grid item xs={12} lg={6} mt={4}>
              <WhyChooseUsCard
                icon={<LocalCarWashOutlinedIcon />}
                cardNo="01"
                heading="Best Quality Cars"
                desc="There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration."
              />
              <WhyChooseUsCard
                icon={<LocalCarWashOutlinedIcon />}
                cardNo="03"
                heading="Best Quality Cars"
                desc="There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration."
                style={true}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <WhyChooseUsCard
                icon={<ManageAccountsOutlinedIcon />}
                cardNo="02"
                heading="Certified Mechanics"
                desc="There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration."
              />
              <WhyChooseUsCard
                icon={<CurrencyRupeeOutlinedIcon />}
                cardNo="04"
                heading="Reasonable Price"
                desc="There are many variations of the passages available but the majo have suffered fact that reader will be dist alteration."
                style={true}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;

const WhyChooseUsCard = ({ icon, cardNo, heading, desc, style }: any) => (
  <Box bgcolor="white" borderRadius={4} p={2} mt={style && 3}>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box
        bgcolor={BLUE}
        width={50}
        height={50}
        borderRadius={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {icon}
      </Box>
      <Typography color="primary" variant="h4" fontWeight={600}>
        {cardNo}
      </Typography>
    </Box>
    <Typography color="primary" variant="h6" fontWeight={600} my={2}>
      {heading}
    </Typography>
    <Typography color="#666" variant="subtitle1">
      {desc}
    </Typography>
  </Box>
);
