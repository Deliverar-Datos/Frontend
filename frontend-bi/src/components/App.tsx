import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SummaryCards from './SummaryCards';
import DeliveryOverview from './DeliveryOverview';
import FleetAnalytics from './FleetAnalytics';

const App = () => {
  const user = localStorage.getItem('user');

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <TopBar
          title="Dashboard"
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
