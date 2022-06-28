import { Button, Container,  TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Register = () => {
    const [registerData,setRegisterData]=useState({})
    const navigate=useNavigate()
    const {registerUser}=useAuth()

    const handleOnBlur=e=>{
            const field=e.target.name;
            const value=e.target.value;
            const newRegsiterData={...registerData}
            newRegsiterData[field]=value;
            setRegisterData(newRegsiterData)
            console.log(newRegsiterData)
        
    }


    const handleRegisterSubmit=e=>{
        if(registerData.password !== registerData.password2){
            alert('password did not match')
            return 
           } 
           registerUser(registerData.email,registerData.password,registerData.name,navigate)
       
            e.preventDefault()
    }
    return (
        <Container sx={{my:5}}>
            <Typography variant="h3" style={{color:'#b4004e'}}>
               please Register here
      </Typography>

            <form onSubmit={handleRegisterSubmit}>
            <TextField
      sx={{width:"40%",m:1}}
       id="standard-basic" 
       label="Your Name" 
       name="name"
       onBlur={handleOnBlur}
       variant="standard" 
       />
     <br />
     <TextField
      sx={{width:"40%",m:1}}
       id="standard-basic" 
       label="Your email" 
       type="email"
       name="email"
       onBlur={handleOnBlur}
       variant="standard" />
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
<TextField
sx={{width:"40%",m:1}}
       id="standard-basic" 
       label="Re-Type Password" 
       type="password"
       name="password2"
       onBlur={handleOnBlur}
       variant="standard" 
        />
<br />

<Button type="submit" style={{backgroundColor:'#b4004e',color:'white'}}>Register</Button>
            </form>

            <Link style={{textDecoration:'none'}} to='/login'>
                
                <Button varient="Text" style={{color:'#b4004e'}}>
                    you have account?Login Here
        </Button></Link>
        </Container>
    );
};

export default Register;