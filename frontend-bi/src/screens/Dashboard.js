import React from 'react';

function Dashboard() {
  const isAuth = localStorage.getItem('auth');
  const role = localStorage.getItem('role');

  if (!isAuth) {
    window.location.href = '/';
    return null;
  }

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        title="Dashboard Power BI"
        src="https://app.powerbi.com/reportEmbed?reportId=490da354-b4f4-4ef3-947f-50d678ff261d&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        allowFullScreen
      />
    </div>
  );
}

export default Dashboard;
