import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { amountToDisplay } from "../../../helper";

let settings = {
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  className: "homepage_slider",
  centerPadding: '50px',
};

const HomepageSlider = () => {
  return (
    <Box my={4} mb={4}>
      <Container maxWidth="lg">
        <Paper sx={{ padding: "16px", border: "1px solid #eee" }}>
          <Typography color="primary" variant="h6" fontWeight={600} mb={2}>
            Upcoming Cars
          </Typography>
          <Slider {...settings}>
            <UpcomingCarsCard />
            <UpcomingCarsCard />
            <UpcomingCarsCard />
            <UpcomingCarsCard />
            <UpcomingCarsCard />
            <UpcomingCarsCard />
            <UpcomingCarsCard />
            <UpcomingCarsCard />
            <UpcomingCarsCard />
            <UpcomingCarsCard />
          </Slider>
        </Paper>
      </Container>
    </Box>
  );
};

export default HomepageSlider;

const UpcomingCarsCard = () => {
  return (
    <Card sx={{background: ""}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/6775/1584360708758/front-view-118.jpg?tr=w-420"
        />
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <CardContent>
            <Typography variant="h6" color="primary">
              Venue 2023
            </Typography>

            <Box display="flex" alignItems="center" columnGap={1}>
              <Typography variant="subtitle1" color="primary">
                New
              </Typography>
              <Typography variant="subtitle1" color="primary" textTransform="capitalize">
                - Pertol -
              </Typography>
              <Typography variant="subtitle1" color="primary" textTransform="capitalize">
                Manual
              </Typography>
            </Box>

            <Typography color="primary" variant="h6" fontWeight={600} display="flex" alignItems="center" mt={1}>
              {amountToDisplay((1200000 / 100000).toFixed(2))} Lakh
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
