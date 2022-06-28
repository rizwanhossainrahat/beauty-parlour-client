import { Button,Container,Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import img from '../../Image_Icon/Group 33092.png'

const Navigation = () => {
  const {user,logOut}=useAuth()
    return (
        <Container  sx={{my:5}}>
            <Grid container spacing={2}>
  <Grid item xs={8}>
    <img style={{width:'20%'}}  src={img} alt="" />
  </Grid>
  <Grid item xs={4} >
   
          <Link style={{textDecoration:'none', color:'black',marginRight:'10px'}}  to='/'>Home</Link>
            <Link style={{textDecoration:'none', color:'black'}} to='/contact'>Contact</Link>

          {user?.email?
          <Button onClick={logOut} style={{textDecoration:'none', color:'black'}} >Log out</Button>
              
              :
              <Link style={{textDecoration:'none', color:'black',marginLeft:'5px'}} to='/login'>Login</Link>
          }

<Link style={{textDecoration:'none', color:'black',marginLeft:'5px'}} to='/dashboard'>Dashboard</Link>
            
  </Grid>
  
</Grid>

         
        </Container>
    );
};

export default Navigation;