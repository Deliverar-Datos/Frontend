import React from 'react';

function Dashboard() {
  const isAuth = localStorage.getItem('auth');

  if (!isAuth) {
    window.location.href = '/';
    return null;
  }

  return (
    <div>
      <h2>Tablero Power BI</h2>
      <iframe
        title="Power BI"
        width="1000"
        height="600"
        src="https://app.powerbi.com/view?r=TU_URL_PUBLICA_DEL_TABLERO"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default Dashboard;