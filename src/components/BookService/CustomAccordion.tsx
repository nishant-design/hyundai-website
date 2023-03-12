import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { AccordionDataType } from "../../pages/BookServicePage/constant";

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  marginBottom: 12,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 4,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid rgba(0, 0, 0, .125)",
}));

type PropsType = {
  data: AccordionDataType;
};

const CustomAccordion = ({ data }: PropsType) => {
  return (
    <>
      {data.map((item, i) => (
        <Accordion key={i}>
          <AccordionSummary>
            <Typography>{item.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {item.options.map((val, i) => (
                  <Grid item xs={12} lg={6} key={i}>
                    <FormControlLabel control={<Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }} />} label={val} />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CustomAccordion;
