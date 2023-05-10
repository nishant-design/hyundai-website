import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SliderImgTwo from "../../../assets/hero_slider/01.png";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import Verna from "../../../assets/verna-dual-tone.png";
import { BLUE, GRAY_TEXT, LIGHT_GRAY } from "../../../colors";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: '100px', mb:'100px' }}>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6}>
          <img src={Verna} alt="car-image-verna" width="100%" style={{ objectFit: "cover" }} />
        </Grid>

        <Grid item xs={12} lg={6} spacing={2}>
          <Box display="flex" alignItems="center" columnGap={1}>
            <DirectionsCarOutlinedIcon color="primary" />
            <Typography variant="button" color="primary" fontWeight={600} letterSpacing={1}>
              About Us
            </Typography>
          </Box>
          <Typography variant="h4" fontWeight={600} maxWidth={350} my={2}>
            India Largest <span style={{ color: BLUE }}>Car Dealer</span> Marketplace.
          </Typography>
          <Typography color={GRAY_TEXT} mb={3}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour.
          </Typography>
          <FlexPoint desc="At vero eos et accusamus et iusto odio."/>
          <FlexPoint desc="Established fact that a reader will be distracted."/>
          <FlexPoint desc="Sed ut perspiciatis unde omnis iste natus sit."/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;

const FlexPoint = ({ desc }: any) => (
  <Box display="flex" alignItems="center" mb={2} columnGap={1}>
    <CheckCircleOutlineIcon color="primary"/>
    <Typography color={GRAY_TEXT} fontWeight={600}>{desc}</Typography>
  </Box>
);
