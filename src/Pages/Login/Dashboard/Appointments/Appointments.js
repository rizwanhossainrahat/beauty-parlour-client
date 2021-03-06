import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../../Hooks/useAuth/useAuth';




const Appointments = () => {
    const {user}=useAuth()
    const [appointments,setAppointments]=useState([])

      useEffect(()=>{
        fetch(`https://safe-earth-59643.herokuapp.com/appointments?email=${user.email}`,{
            'authorization':'Bearer' 
        })
        .then(res=>res.json())
        .then(data=>setAppointments(data))
      },[user.email])
      
    return (
        <div>
            <h2>You take {appointments.length} Appointments.</h2>
            <TableContainer component={Paper}>
      <Table aria-label="Appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Phone number</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;