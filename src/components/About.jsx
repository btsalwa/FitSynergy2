import React from 'react';
import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';


const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" gutterBottom>
              At Fitness Tracker, our mission is to empower individuals to lead healthier lives by providing
              comprehensive fitness tracking solutions. We believe that everyone should have access to the tools
              and resources they need to achieve their fitness goals and improve their overall well-being.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h5" gutterBottom>
              Our Team
            </Typography>
            <Grid container spacing={2}>
              {teamMembers.map(member => (
                <Grid item key={member.name} xs={12} sm={6} md={4} lg={3}>
                  <Avatar alt={member.name} src={member.avatar} sx={{ width: 120, height: 120, margin: 'auto' }} />
                  <Typography variant="h6" align="center" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {member.role}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const teamMembers = [
  {
    name: 'Alfred Oriri',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D', // Add actual image URLs
  },
  {
    name: 'Dainnah Ngatia',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww', // Add actual image URLs
  },
  {
    name: 'Ted Gitonga',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fHww', // Add actual image URLs
  },
  {
    name: 'Brian Tsalwa',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D', // Add actual image URLs
  },
  {
    name: 'Ian ',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwcm9maWxlJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D', // Add actual image URLs
  },
];

export default About;
