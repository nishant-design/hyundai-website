import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CarFilters = () => {
  return (
    <Container maxWidth="lg" sx={{mt: -4, zIndex:100, position: 'relative'}} >
        <Paper sx={{ p:4, border: "1px solid #eee" }}>
          <Typography color="primary" variant="h6" fontWeight={600}>
            Find a Car
          </Typography>
          <Box my={2} mb={3} height="1px" bgcolor="#ccc" width="100%"></Box>
          <Grid container spacing={2}>
            <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
              <TextField
              label="Body Type"
              select
              fullWidth
              >
                {
                  ["Hatchback", "Sedan", "SUV"].map((item, i) => <MenuItem key={i+item}>{item}</MenuItem>)
                }
              </TextField>
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
            <TextField
              label="Transmission"
              select
              fullWidth
              >
                {
                  ["Automatic", "Manual"].map((item, i) => <MenuItem key={i+item}>{item}</MenuItem>)
                }
              </TextField>
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
            <TextField
              label="Fuel"
              select
              fullWidth
              >
                {
                  ["Petrol", "Diesel"].map((item, i) => <MenuItem key={i+item}>{item}</MenuItem>)
                }
              </TextField>
            </Grid>

            <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
            <TextField
              label="Feature"
              select
              fullWidth
              >
                {
                  ["Sunroof", "Sunroof", "Sunroof"].map((item, i) => <MenuItem key={i+item}>{item}</MenuItem>)
                }
              </TextField>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} textAlign="right" mt={2}>
              <Button variant="contained">Search Car</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
  )
}

export default CarFilters