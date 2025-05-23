import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import App from '../components/App';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('authenticated');
    if (auth !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  return <App />;
};

export default Dashboard;
