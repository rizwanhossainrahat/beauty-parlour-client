import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial/Testimonial';

const Testimonials = () => {
    const [reviewitems,setReviewItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews',{
            'authorization':'Bearer' 
        })
        .then(res=>res.json())
       .then(data=>{
        setReviewItems(data)
       })
    },[])

    console.log(reviewitems)
    return (
        <div>
             <Container>
                
            <h1 style={{color:'#12005e',textAlign:'center'}}>Testimonial</h1>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           
            {
                reviewitems.map(reviewitem=><Testimonial reviewitem={reviewitem}></Testimonial>)
            }
            </Grid>
        
        </Container>
        </div>
    );
};

export default Testimonials;