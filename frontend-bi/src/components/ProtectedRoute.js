import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Simular un pequeño retraso para verificar la autenticación
    const checkAuth = setTimeout(() => {
      const auth = localStorage.getItem('auth') === 'true';
      setIsAuthenticated(auth);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(checkAuth);
  }, []);
  
  if (isLoading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

export default ProtectedRoute;