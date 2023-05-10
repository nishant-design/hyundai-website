import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container, Card, CardContent, Typography } from "@mui/material";
import './style.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CarsSlider() {
  return (
    
    <Grid className="cars-slider">
      <Card>
      <CardContent>
      <Typography variant="h5" component="div">Locate Us </Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Noida
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Faridabad
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Lorem Ipsum text
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Lorem Ipsum text
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        
      </Grid>
      </CardContent>
      </Card>

<br/><br/>
      <Card>
      <CardContent>
      <Typography variant="h5" component="div">Locate Us </Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Noida
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Faridabad
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Lorem Ipsum text
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Lorem Ipsum text
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
        
      </Grid>
      </CardContent>
      </Card>
      </Grid>
      
  );
}