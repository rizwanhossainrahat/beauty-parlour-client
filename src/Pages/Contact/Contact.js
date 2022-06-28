import React from 'react';
import { Button,Container,Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { width } from '@mui/system';

const Contact = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}> Let us handle your project professionally</h1>
         <form style={{textAlign:'center'}}>
         <TextField
                style={{padding:10 ,width:"400px",marginRight:5}}
          id="outlined-required"
          type="name"
          defaultValue="Your Name"
        />
        <br />
         <TextField
          style={{padding:10 ,width:"400px"}}
          id="outlined-required"
          type="email"
          defaultValue="Your email"
        />
        <br />
         <TextField
              style={{padding:10 ,width:"400px"}}
          id="outlined-required"
        
          defaultValue="Your Message"
        />
        <br />
         <TextField
          style={{padding:10 ,width:"400px"}}
          id="outlined-required"
        
          defaultValue="Phone number"
        />
      
         </form>
        </div>
    );
};

export default Contact;