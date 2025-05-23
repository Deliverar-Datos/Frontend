import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SummaryCards from './SummaryCards';
import DeliveryOverview from './DeliveryOverview';
import FleetAnalytics from './FleetAnalytics';
import CEODashboard from './CEODashboard';

const App = () => {
  const user = localStorage.getItem('user');

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <TopBar
          title={user === 'ceo' ? 'Dashboard Ejecutivo' : 'Dashboard'}
          icon="dashboard"
          showSearch={true}
          showHelpButton={true}
        />

        {user === 'admin' ? (
          <>
            <SummaryCards />
            <DeliveryOverview />
            <FleetAnalytics />
          </>
        ) : user === 'ceo' ? (
          <CEODashboard />
        ) : (
          <>
            <DeliveryOverview />
          </>
        )}
      </main>
    </div>
  );
};

export default App;