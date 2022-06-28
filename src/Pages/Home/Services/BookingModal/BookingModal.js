import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../../../Hooks/useAuth/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({handleClose,open,service}) => {
    const {user}=useAuth();
   
    const initialBookinInfo={customerName:user.displayName,email:user.email,phone:''}
     const [bookindata,setBookinData]=useState(initialBookinInfo)   
 
    const hanedleOnBlur=e=>{
            const field=e.target.name;
            const value=e.target.value;
            const NewData={...initialBookinInfo}
            NewData[field]=value
            setBookinData(NewData)
            
            
    }

    const appointment={
        ...bookindata,
        serviceName:service.name
    }
 
   
    const handleBookingSubmit=e=>{
        alert('summiting')
     // collect data
     const appointment={
        ...bookindata,
        serviceName:service.name
    }
    
     // to the server
     fetch('https://safe-earth-59643.herokuapp.com/appointments',{
       method:'POST',
       headers:{
         "content-type":'application/json'
       },
       body:JSON.stringify(appointment)
     })
     .then(res=>res.json())
     .then(data=>{
         
     })
        handleClose();
        e.preventDefault();
    }
 
    return (
        <div>
             
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
              {service.name}
            </Typography>

           <form onSubmit={handleBookingSubmit}>
         
             <TextField
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name="customerName"
          onBlur={hanedleOnBlur}
         defaultValue={user.displayName}
          size="small"
        />
          <TextField
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name="email"
          onBlur={hanedleOnBlur}
          defaultValue={user.email}
          size="small"
        />
          <TextField
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name="phone"
          onBlur={hanedleOnBlur}
          defaultValue='Phone number'
          size="small"
        />
         
        <Button type='submit' variant="contained">Submit</Button>
           </form>

          </Box>
        </Fade>
      </Modal>
        </div>
    );
};

export default BookingModal;