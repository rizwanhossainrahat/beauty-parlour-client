import { Button,Container,Grid, Typography } from '@mui/material';
import React from 'react';
import {Link} from "react-router-dom";
import img from '../../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const ParlourHeader = () => {
    return (
        <div  style={{marginLeft:'150px'}}>
            <Grid  container spacing={2}>
  <Grid item xs={12} md={6}>
  <Typography variant="h3" component="h2" sx={{color:'#12005e'}}>
        BEAUTY SALON FOR EVERY WOMEN
</Typography>
  <Typography variant="   subtitle1" style={{fontWeight:'400',color:'gray' }} >
  We all know the feeling. The time has come, you are counting days to your wedding day. Of course, you’re worried about how you will look in the dress and about many other things.
  
</Typography>

  </Grid>
  
  <Grid item xs={12} md={6}>
  <img style={{width:'50%'}} src={img} alt="" />
  </Grid>
   <Link style={{textDecoration:'none'}} to='/services'><Button style={{backgroundColor:'#b4004e',color:'white'}}>Get an Appointment</Button></Link>
</Grid>

        </div>
    );
};

export default ParlourHeader;