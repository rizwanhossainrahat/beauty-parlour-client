import React from 'react';
import { Button,Container,Grid, Typography } from '@mui/material';
import img from '../../../Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ParlourBanner = () => {
    return (
        <Container sx={{my:5}}>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    <img style={{width:'100%'}} src={img} alt="" />
  </Grid>
  <Grid item xs={12}  md={6}>
  <Typography variant='h3'>
 Let us handle your skin <span style={{color:'#b4004e'}}>professionally</span>
 <Typography sx={{ fontSize: 14 ,fontWeight:'500'}} color="text.secondary" gutterBottom>
 Your skin is the largest organ in your body. It acts as the first line of defense for your body, preventing the entry of harmful agents including pollutants and bacteria.New information on treatments for both medical skin conditions and cosmetic problems is available in the Special Health Report Skin Care and Repair. This report describes scientifically approved treatments for common medical conditions from acne to rosacea, as well as the newest cosmetic procedures for lines, wrinkles, age spots, and other problems. An explanation of the ingredients in popular skin lotions and cosmeceuticals is also included. 
                </Typography>
    </Typography>
  </Grid>

</Grid>
        </Container>
    );
};

export default ParlourBanner;