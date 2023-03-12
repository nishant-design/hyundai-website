import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { amountToDisplay } from "../../../helper";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import './style.scss';

let settings = {
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "homepage_slider",
  centerPadding: '50px',
};

const HomepageSlider = () => {
  return (
    <Box my={4} mb={16}>
      <Container maxWidth="lg">
        <Paper sx={{ padding: "16px", border: "1px solid #eee" }}>
          <Typography color="primary" variant="h6" fontWeight={600} mb={2}>
            Find a Car
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

      <Container maxWidth="lg">
      <Grid container spacing={2} my={4} mb={16}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Typography color="primary" variant="h6" fontWeight={600} mb={2}>
           Locate Us
          </Typography>
          </Grid>
      <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
      <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Noida
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9526633137393!2d77.37661251511022!3d28.631180790892877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff42517c425%3A0x2d10f8fca4ad996f!2sCapital%20Hyundai!5e0!3m2!1sen!2sin!4v1678438109521!5m2!1sen!2sin" width="100%" height="150" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>

     <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
     <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Noida
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9526633137393!2d77.37661251511022!3d28.631180790892877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff42517c425%3A0x2d10f8fca4ad996f!2sCapital%20Hyundai!5e0!3m2!1sen!2sin!4v1678438109521!5m2!1sen!2sin" width="100%" height="150" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>

     <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
     <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Noida
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9526633137393!2d77.37661251511022!3d28.631180790892877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff42517c425%3A0x2d10f8fca4ad996f!2sCapital%20Hyundai!5e0!3m2!1sen!2sin!4v1678438109521!5m2!1sen!2sin" width="100%" height="150" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>
     
     <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
     <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Noida
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9526633137393!2d77.37661251511022!3d28.631180790892877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff42517c425%3A0x2d10f8fca4ad996f!2sCapital%20Hyundai!5e0!3m2!1sen!2sin!4v1678438109521!5m2!1sen!2sin" width="100%" height="150" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>
     </Grid>
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
          <CardContent className="text-center">
            <Typography variant="h6" color="primary">
              Venue 2023
            </Typography>

            {/* <Box display="flex" alignItems="center" columnGap={1}>
              <Typography variant="subtitle1" color="primary">
                New
              </Typography>
              <Typography variant="subtitle1" color="primary" textTransform="capitalize">
                - Pertol -
              </Typography>
              <Typography variant="subtitle1" color="primary" textTransform="capitalize">
                Manual
              </Typography>
            </Box> */}

            {/* <Typography color="primary" variant="h6" fontWeight={600} display="flex" alignItems="center" mt={1}>
              {amountToDisplay((1200000 / 100000).toFixed(2))} Lakh
            </Typography> */}

            <ButtonGroup variant="outlined" aria-label="outlined button group" className="group-btn">
        <Button>Test Drive</Button>
        <Button>Download brochure </Button>
        <Button>Price List</Button>
      </ButtonGroup>

          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
