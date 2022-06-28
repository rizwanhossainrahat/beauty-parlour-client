import React from 'react';
import { Button,Container,Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <div
         style={{backgroundColor:'#c60055',color:'white',marginTop:'20px',paddingTop:80,paddingBottom:80 }}>
            <Container  >
            <Grid container spacing={2}   >
  <Grid >
    <Typography>
       Puran Dhaka Luxmibazar
    </Typography>
  </Grid>

  <Grid style={{marginLeft:'40px' }}>
  <Typography variant="body1">
      Company
    </Typography>

    <Typography>
       About 
    </Typography>
    <Typography>
       Project
    </Typography>
    <Typography>
       Our Team
    </Typography>
    <Typography>
       Team and condition
    </Typography>
  </Grid>

  <Grid  style={{marginLeft:'40px'}}>
  <Typography variant="body1" >
      Quick Link
    </Typography>
    <Typography>
      Sales
    </Typography>
    <Typography>
       Contact
    </Typography>
    <Typography>
       Our blog
    </Typography>
    <Typography>
     Rentals
    </Typography>
  </Grid>

  <Grid  style={{marginLeft:'50px'}}>
  <Typography variant="body1"  >
     About Us
    </Typography>
    <Typography>
    We are reputaded company .Our services are good then the other Company.
    </Typography>
    <Typography>
    
    </Typography>
  </Grid>
</Grid>
            </Container>
            
        </div>
    );
};

export default Footer;