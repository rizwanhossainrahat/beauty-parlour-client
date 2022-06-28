import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Testimonial = (props) => {
    const{name,description}=props.reviewitem
    return (
        <>
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275 ,border:0,boxShadow:0}}>
           
            <CardContent>
                <Typography sx={{ fontSize: 24 }}  gutterBottom>
                   {name}
                </Typography>
                <Typography sx={{ fontSize: 20 }} variant="h5" component="div">
                   {description}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                   
                </Typography>
            </CardContent>
          
          
        </Card>
      
    </Grid>

     </>
    );
};

export default Testimonial;