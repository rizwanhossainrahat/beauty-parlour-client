import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Container,Grid } from '@mui/material';
import img1 from '../../../Image_Icon/Icon/Group 1373.png'
import img2 from '../../../Image_Icon/Icon/Group 1372.png'
import img3 from '../../../Image_Icon/Icon/Group 1374.png'
import Service from './Service/Service';

const services=[
    {
        name:'Anti Age Face Treatment',
        description:'You may notice a blush of color and a slight tingle as it revs up the skins natural blood flow',
        img:img1
    },
    {
        name:'Hair color and styeling',
        description:' Not so many women are absolutely happy with the natural color of their hair. Even if its so, its in the female nature to seek versatility and try new things to change her looks. ',
        img:img2
    },
    {
        name:'Skin care treatment',
        description:' Your skin is the largest organ in your body. It acts as the first line of defense for your body, preventing the entry of harmful agents including pollutants and bacteria.',
        img:img3
    }
]

const Services = () => {

    return (
        <Container>
            <h1 style={{color:'#12005e',textAlign:'center'}}>Our Awesome <span style={{color:"#b4004e"}}>Services</span></h1>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           
            {
                services.map(service=><Service   service={service}></Service>)
            }
            
            </Grid>
        
        </Container>
    );
};

export default Services;