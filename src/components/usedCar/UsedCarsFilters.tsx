import { Box, Checkbox, FormControlLabel, FormGroup, Slider, TextField, Typography } from "@mui/material";
import React from "react";
import { amountToDisplay } from "../../helper";
import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import { changeFilterMaxPrice } from "../../slice/carSlice";

const UsedCarsFilters = () => {
  const filters = useAppSelector((state) => state.car.usedCarFilters);
  const dispatch = useAppDispatch();

  function valuetext(value: number) {
    dispatch(changeFilterMaxPrice(value));
    return `${value}°C`;
  }

  return (
    <>
      <Box>
        <Typography variant="h6" color="primary" mb={2}>
          Price Range
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="body2" color="primary" fontWeight={600}>
            {amountToDisplay(filters.priceRange.min)}
          </Typography>
          <Typography variant="body2" color="primary" fontWeight={600}>
            {amountToDisplay(filters.priceRange.max)}
          </Typography>
        </Box>
        <Slider aria-label="Temperature" defaultValue={500000} getAriaValueText={valuetext} valueLabelDisplay="off" step={50000} min={50000} max={2000000} />
      </Box>
      <Box>
        <Typography variant="h6" color="primary" mb={1} mt={3}>
          Body Type
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={<span style={{ color: "#555" }}>Hatchback</span>} />
          <FormControlLabel control={<Checkbox />} label={<span style={{ color: "#555" }}>Sedan</span>} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={<span style={{ color: "#555" }}>SUV</span>} />
        </FormGroup>
      </Box>
      <Box>
        <Typography variant="h6" color="primary" mb={1} mt={3}>
          Transmission
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label={<span style={{ color: "#555" }}>Automatic</span>} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={<span style={{ color: "#555" }}>Manual</span>} />
        </FormGroup>
      </Box>
      <Box>
        <Typography variant="h6" color="primary" mb={1} mt={3}>
          Milage
        </Typography>
        <Box mb={1}>
          <Box mb={1}>
            <Typography variant="body2" color="primary">
              From
            </Typography>
            <TextField fullWidth/>
          </Box>
          <Box>
            <Typography variant="body2" color="primary">
              To
            </Typography>
            <TextField fullWidth/>
          </Box>
        </Box>
      </Box>
      <Box mb={10}>
        <Typography variant="h6" color="primary" mb={1} mt={3}>
          Fuel
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label={<span style={{ color: "#555" }}>Petrol</span>} />
          <FormControlLabel control={<Checkbox />} label={<span style={{ color: "#555" }}>Diesel</span>} />
        </FormGroup>
      </Box>
    </>
  );
};

export default UsedCarsFilters;
