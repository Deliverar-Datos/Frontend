import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Box, TextField, Button, Typography, MenuItem, Paper
} from '@mui/material';

function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [role, setRole] = useState('cliente');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === 'admin' && pass === '1234') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', role);
      navigate('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Iniciar Sesión
        </Typography>
        <TextField
          fullWidth
          label="Usuario"
          margin="normal"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          margin="normal"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <TextField
          fullWidth
          select
          label="Rol"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          margin="normal"
        >
          <MenuItem value="cliente">Cliente</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Ingresar
        </Button>
        {error && <Typography color="error" mt={2}>{error}</Typography>}
      </Paper>
    </Container>
  );
}

export default Login;