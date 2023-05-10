import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Container, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import CustomAccordion from "../../components/BookService/CustomAccordion";
import { ACCORDION_DATA, CAR_MODELS, LOCATIONS } from "./constant";

const BookServicePage = () => {
  const [value, setValue] = useState<string>("no");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h6" fontWeight={600} color="primary" textAlign="center" my={6}>
        SCHEDULE YOUR SERVICES
      </Typography>
      <Typography variant="body2" fontWeight={600} bgcolor="#ccc" my={2} py={1} textAlign="center">
        CUSTOMER DETAIL FOR SERVICE
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} my={2}>
        <Grid item xs={12} lg={6}>
          <Typography variant="body2" mb={1}>
            LOCATION
          </Typography>
          <Autocomplete disablePortal options={LOCATIONS} renderInput={(params) => <TextField {...params} label="--select location--" />} />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography mb={1} variant="body2">
            CAR MODEL
          </Typography>
          <Autocomplete disablePortal options={CAR_MODELS} renderInput={(params) => <TextField {...params} label="Car Model" />} />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography mb={1} variant="body2">
            REGISTRATION NUMBER
          </Typography>
          <TextField label="" fullWidth variant="outlined" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography mb={1} variant="body2">
            MILEAGE
          </Typography>
          <TextField label="" fullWidth variant="outlined" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography mb={1} variant="body2">
            SERVICE DATE TIME
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker sx={{ width: "100%" }} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography mb={1} variant="body2">
            NAME
          </Typography>
          <TextField label="" fullWidth variant="outlined" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography mb={1} variant="body2">
            MOBILE NO.
          </Typography>
          <TextField label="" type="number" fullWidth variant="outlined" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography mb={1} variant="body2">
            EMAIL ID
          </Typography>
          <TextField label="" type="email" fullWidth variant="outlined" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography mb={1} variant="body2" fontWeight={600}>
            DO YOU NEED PICK UP AND DROP ADDRESS
          </Typography>
          <RadioGroup row value={value} onChange={handleChange}>
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          </RadioGroup>
        </Grid>

        <Grid item xs={12} lg={6}>
          {value === "yes" && (
            <>
              <Typography mb={1} variant="body2">
                ADDRESS
              </Typography>
              <TextField label="" fullWidth variant="outlined" multiline minRows={3} />
            </>
          )}
        </Grid>
      </Grid>

      <CustomAccordion data={ACCORDION_DATA} />
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
          </Container>
   
  );
};

export default BookServicePage;
