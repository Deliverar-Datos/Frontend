import React from 'react';

function PowerBIReportePublico() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Dashboard público de Power BI</h2>
      <iframe
        title="Dashboard Power BI"
        width="100%"
        height="600"
        src="https://app.powerbi.com/reportEmbed?reportId=490da354-b4f4-4ef3-947f-50d678ff261d&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed"
        frameBorder="0"
        allowFullScreen={true}
        style={{ borderRadius: '10px', maxWidth: '1200px', margin: '0 auto', display: 'block' }}
      />
    </div>
  );
}

export default PowerBIReportePublico;
