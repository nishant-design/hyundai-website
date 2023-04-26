import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LIGHT_GRAY } from "../colors";

const dummyData = [
  {
    heading: "Make Year",
    desc: "Sep 2011",
  },
  {
    heading: "Registration Year",
    desc: "Dec 2011",
  },
  {
    heading: "Fuel Type",
    desc: "Petrol",
  },
  {
    heading: "Km driven",
    desc: "24,854 Kms",
  },
  {
    heading: "Transmission",
    desc: "Manual",
  },
  {
    heading: "No. of Owner",
    desc: "1st Owner",
  },
  {
    heading: "Insurance validity",
    desc: "Nov 2023",
  },
  {
    heading: "Insurance type",
    desc: "Comprehensive",
  },
  {
    heading: "RTO",
    desc: "DL8C",
  },
  {
    heading: "Car location",
    desc: "Sahibabad, Delhi",
  },
];

const CarOverview = () => {
  return (
    <Box mt={5}>
      <Typography variant="h6" fontWeight={600} color="primary">
        Car Overview
      </Typography>
      <Box border={1} borderColor={LIGHT_GRAY} p={3} borderRadius={2} mt={1} display="grid" gridTemplateColumns="1fr 1fr 1fr" rowGap={2}>
        {dummyData.map((item, i) => (
          <CarOverViewCard heading={item.heading} desc={item.desc} key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default CarOverview;

const CarOverViewCard = ({ heading, desc }: { heading: string; desc: string }) => (
  <Box>
    <Typography variant="body2" color={"#555"}>
      {heading}
    </Typography>
    <Typography variant="body2" fontWeight={600} color="primary">
      {desc}
    </Typography>
  </Box>
);
