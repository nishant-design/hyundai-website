import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/system";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './style.scss';

const carouselSettings = {
  showThumbs: false,
};

const UsedCarCard = ({ props }: any) => {
  const { name, price, km_driven, photos, fuel, mfg_year, transmission } = props;
  return (
    <Card sx={{ maxWidth: 300 }} className="usedCar_card">
      <Carousel {...carouselSettings}>
        {photos?.map((img: string, i: number) => (
          <CardMedia key={i} component="img" height="180" image={img} />
        ))}
      </Carousel>

      <CardActionArea>
        <CardContent>
          <Typography variant="h5" color="primary">
            {name}
          </Typography>

          <Box display="flex" alignItems="center" columnGap={1}>
            <Typography variant="subtitle1" color="primary">
              {(km_driven / 1000).toFixed(2)}Km
            </Typography>
            <Typography variant="subtitle1" color="primary" textTransform="capitalize">
              - {fuel} -
            </Typography>
            <Typography variant="subtitle1" color="primary" textTransform="capitalize">
              {transmission}
            </Typography>
          </Box>

          <Typography color="primary" variant="h6" fontWeight={600} display="flex" alignItems="center" mt={1}>
            <CurrencyRupeeIcon/>
            {(price/100000).toFixed(2)} Lakh
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UsedCarCard;
