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
        src="https://app.powerbi.com/view?r=eyJrIjoiODEwM2RiNWUtZjc5ZS00NWVkLTk5ZDgtY2Y4YTViZjM2MzAzIiwidCI6IjdjMTcwZTA1LWQxODEtNDY0OS1hNjZjLTUzYTM1NzUzZGE1NCIsImMiOjR9"
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
