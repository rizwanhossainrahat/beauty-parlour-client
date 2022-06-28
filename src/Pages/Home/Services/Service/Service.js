import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Service = ({service}) => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const {name,description,img}=service;
  
    return (
        <>
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{ minWidth: 275 ,border:0,boxShadow:0}}>
            <CardMedia
                component="img"
                alt="green iguana"
                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                image={img}
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                   
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
           <Button style={{backgroundColor:'#b4004e',color:'white'}} onClick={handleOpen}>Book</Button>
          
        </Card>
      
    </Grid>
    <BookingModal
    service={service}
    handleClose={handleClose}
    open={open}
    ></BookingModal>
     </>
    );
};

export default Service;