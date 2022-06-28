import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth/useAuth';

const LoginPage = () => {
    const [loginUserData,setLoginUserData]=useState({})
    const {user,loginUser}=useAuth()
    console.log(user)
    const location=useLocation()
    const navigation=useNavigate()

    const handleOnBlur=e=>{
       const field=e.target.name;
       const value=e.target.value;
       const newLoginData={...loginUserData}
       newLoginData[field]=value
      console.log(newLoginData)
       setLoginUserData(newLoginData)
      
    }

    const handleLoginSubmit=e=>{
        loginUser(loginUserData.email,loginUserData.password,location,navigation)

        e.preventDefault()
    }
    return (
        <Container sx={{my:5}}>
               <Typography variant="h3" style={{color:'#b4004e'}}>
               Please Login here 
      </Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField
     sx={{width:"40%",m:1}}
       id="standard-basic" 
       label="Your email" 
       type="email"
       name="email"
       onBlur={handleOnBlur}
       variant="standard" 
        />
        <br />

<TextField
sx={{width:"40%",m:1}}
       id="standard-basic" 
       label="Password" 
       type="password"
       name="password"
       onBlur={handleOnBlur}
       variant="standard" 
        />
<br />
<Button type="submit" style={{backgroundColor:'#b4004e',color:'white'}}>Login</Button>
            </form>


            <Link style={{textDecoration:'none'}} to='/register'>
                <Button varient="Text" style={{color:'#b4004e'}}>
            Create an Account 
        </Button></Link>
        </Container>
    );
};

export default LoginPage;