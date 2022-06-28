import { Grid } from '@mui/material';
import React from 'react';
import Appointments from '../Appointments/Appointments'

const DashboardHome = () => {
    return (
        <div>
                  <Grid container spacing={2}>
  <Grid item xs={8} sm={5}>
    <h2>app</h2>
  </Grid>
  <Grid item xs={4} sm={7}>
   < Appointments></Appointments>
  </Grid>
  
</Grid>
        </div>
    );
};

export default DashboardHome;