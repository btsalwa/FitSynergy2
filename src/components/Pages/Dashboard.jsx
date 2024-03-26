import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Fitness Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Today's Steps
          </Typography>
          <Typography variant="body1">
            10,000 steps
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Calories Burned
          </Typography>
          <Typography variant="body1">
            500 calories
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Workout Duration
          </Typography>
          <Typography variant="body1">
            1 hour
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Fitness Goals
          </Typography>
          <Typography variant="body1">
            - Reach 15,000 steps daily <br />
            - Burn 1000 calories weekly <br />
            - Exercise for at least 30 minutes every day
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;