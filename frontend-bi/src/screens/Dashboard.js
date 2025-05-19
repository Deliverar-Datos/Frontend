import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box
} from '@mui/material';
import PowerBIEmbedSimple from '../components/PowerBIEmbed';

function Dashboard() {
  const isAuth = localStorage.getItem('auth');
  const role = localStorage.getItem('role');

  if (!isAuth) {
    window.location.href = '/';
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Dashboard Power BI
        </Typography>

        <Typography variant="subtitle1" textAlign="center" mb={4}>
          Rol actual: <strong>{role}</strong>
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <PowerBIEmbedSimple />
        </Box>
      </Paper>
    </Container>
  );
}

export default Dashboard;