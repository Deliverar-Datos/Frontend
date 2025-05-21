import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, TextField, Button, Typography, MenuItem, Paper,
  Box, Avatar, Divider, InputAdornment, IconButton, Alert,
  Slide, Fade
} from '@mui/material';
import {
  LockOutlined as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Person as PersonIcon,
  Assignment as RoleIcon
} from '@mui/icons-material';

function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [role, setRole] = useState('cliente');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Revisar si ya está autenticado
    const isAuth = localStorage.getItem('auth') === 'true';
    if (isAuth) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = () => {
    // Validaciones
    if (!user.trim()) {
      setError('Por favor, ingrese su nombre de usuario');
      return;
    }
    
    if (!pass.trim()) {
      setError('Por favor, ingrese su contraseña');
      return;
    }
    
    setLoading(true);
    
    // Simular un retraso en la autenticación
    setTimeout(() => {
      if (user === 'admin' && pass === '1234') {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('role', role);
        localStorage.setItem('username', user);
        navigate('/dashboard');
      } else {
        setError('Usuario o contraseña incorrectos');
        setLoading(false);
      }
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Container maxWidth="sm">
      <Fade in timeout={1000}>
        <Paper elevation={6} sx={{ 
          padding: 4, 
          marginTop: { xs: 4, sm: 10 }, 
          textAlign: 'center',
          borderRadius: 3
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 3
          }}>
            <Avatar sx={{ 
              bgcolor: 'primary.main', 
              width: 56, 
              height: 56, 
              mb: 2 
            }}>
              <LockIcon fontSize="large" />
            </Avatar>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Bienvenido
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Inicie sesión para acceder al sistema
            </Typography>
          </Box>
          
          <Divider sx={{ mb: 3 }} />
          
          <TextField
            fullWidth
            label="Usuario"
            margin="normal"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color="primary" />
                </InputAdornment>
              ),
            }}
            autoFocus
          />
          
          <TextField
            fullWidth
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            margin="normal"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          <TextField
            fullWidth
            select
            label="Rol"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RoleIcon color="primary" />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="cliente">Cliente</MenuItem>
            <MenuItem value="admin">Administrador</MenuItem>
          </TextField>
          
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ 
              mt: 3, 
              mb: 2, 
              py: 1.5,
              fontSize: '1rem'
            }}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>
          
          {error && (
            <Slide direction="up" in={!!error} mountOnEnter unmountOnExit>
              <Alert 
                severity="error" 
                sx={{ mt: 2 }}
                onClose={() => setError('')}
              >
                {error}
              </Alert>
            </Slide>
          )}
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
            </Typography>
          </Box>
        </Paper>
      </Fade>
    </Container>
  );
}

export default Login;