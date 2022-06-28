import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth/useAuth';

const MakeAdmin = () => {
    const[email,setEmail]=useState({})
    const [success,setSuccess]=useState(false)
   

const handleOnBlur=e=>{

    setEmail(e.target.value)
    e.preventDefault()
}

const handleAdminSubmit=e=>{
    const user={email};
    fetch('https://safe-earth-59643.herokuapp.com/users/admin',{
        method:'PUT',
        headers:{
            'authorization':'Bearer',
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount){
       
            setSuccess(true)
        }
    })
    e.preventDefault()
}
    return (
        <Container>
            <h2>Make  Admin</h2>

<form onSubmit={handleAdminSubmit}>
<TextField 
sx={{width:'40%'}}
 id="standard-basic" 
 label="Email"
 type="email"
 onBlur={handleOnBlur}
  variant="standard" />
 <br />
 <br />

<Button  style={{backgroundColor:'#b4004e',color:'white'}} type='submit' variant='contained'>Make Admin</Button>
</form>
{success && <Alert severity="success">User create  successfully!</Alert>}
</Container>
       
    );
};

export default MakeAdmin;