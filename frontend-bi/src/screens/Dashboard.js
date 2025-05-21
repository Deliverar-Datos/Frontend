import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, IconButton,
  Box, Avatar, Menu, MenuItem, Tooltip, CircularProgress,
  useTheme, Fab, ListItemIcon, ListItemText, Divider
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  AccountCircle as UserIcon,
  ExitToApp as ExitIcon,
  Fullscreen as FullscreenIcon,
  FullscreenExit as FullscreenExitIcon
} from '@mui/icons-material';

function Dashboard() {
  const theme = useTheme();
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener datos del usuario del localStorage
    const storedUsername = localStorage.getItem('username') || 'Usuario';
    const storedRole = localStorage.getItem('role') || 'cliente';
    
    setUsername(storedUsername);
    setRole(storedRole);
    
    // Simular carga del dashboard
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-ocultar controles después de 3 segundos en modo fullscreen
    let hideTimer;
    if (isFullscreen && showControls) {
      hideTimer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => clearTimeout(hideTimer);
  }, [isFullscreen, showControls]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    navigate('/');
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setShowControls(true);
  };

  const handleMouseMove = () => {
    if (isFullscreen) {
      setShowControls(true);
    }
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: 2
      }}>
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Cargando dashboard...
        </Typography>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        width: '100vw', 
        height: '100vh', 
        margin: 0, 
        padding: 0, 
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#f5f5f5'
      }}
      onMouseMove={handleMouseMove}
    >
      {/* App Bar - Solo visible cuando no está en fullscreen o cuando se muestran los controles */}
      {(!isFullscreen || showControls) && (
        <AppBar 
          position="fixed" 
          sx={{ 
            zIndex: theme.zIndex.tooltip + 1,
            boxShadow: 3,
            transition: 'opacity 0.3s ease',
            opacity: isFullscreen && !showControls ? 0 : 1
          }}
        >
          <Toolbar variant="dense">
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Dashboard Analytics
            </Typography>
            
            <Tooltip title="Pantalla completa">
              <IconButton 
                onClick={toggleFullscreen}
                color="inherit"
                size="small"
                sx={{ mr: 1 }}
              >
                {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Perfil de usuario">
              <IconButton 
                onClick={handleUserMenuOpen} 
                color="inherit"
                size="small"
              >
                <Avatar 
                  sx={{ 
                    width: 28, 
                    height: 28, 
                    bgcolor: theme.palette.secondary.main 
                  }}
                >
                  {username.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
            </Tooltip>
            
            <Menu
              anchorEl={userMenuAnchor}
              open={Boolean(userMenuAnchor)}
              onClose={handleUserMenuClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Box sx={{ px: 2, py: 1, textAlign: 'center' }}>
                <Typography variant="subtitle2" fontWeight="bold">
                  {username}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {role === 'admin' ? 'Administrador' : 'Cliente'}
                </Typography>
              </Box>
              <Divider />
              <MenuItem onClick={handleUserMenuClose}>
                <ListItemIcon>
                  <UserIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Mi perfil</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleUserMenuClose}>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Configuración</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" color="error" />
                </ListItemIcon>
                <ListItemText>Cerrar sesión</ListItemText>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      )}

      {/* Botón flotante de salida - Solo visible en fullscreen */}
      {isFullscreen && (
        <Fab
          color="error"
          size="small"
          onClick={handleLogout}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: theme.zIndex.tooltip + 1,
            opacity: showControls ? 1 : 0.3,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1
            }
          }}
        >
          <ExitIcon />
        </Fab>
      )}

      {/* Contenido principal - Power BI Dashboard */}
      <Box 
        sx={{ 
          width: '100%',
          height: isFullscreen ? '100vh' : 'calc(100vh - 48px)', // 48px es la altura del toolbar compacto
          marginTop: isFullscreen ? 0 : '48px',
          overflow: 'hidden'
        }}
      >
        <iframe
          title="Dashboard Power BI"
          src="https://app.powerbi.com/view?r=eyJrIjoiODEwM2RiNWUtZjc5ZS00NWVkLTk5ZDgtY2Y4YTViZjM2MzAzIiwidCI6IjdjMTcwZTA1LWQxODEtNDY0OS1hNjZjLTUzYTM1NzUzZGE1NCIsImMiOjR9"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
          allowFullScreen
        />
      </Box>
    </Box>
  );
}

export default Dashboard;