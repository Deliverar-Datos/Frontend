import React from 'react';
import TopBar from './TopBar';
import SummaryCards from './SummaryCards';
import DeliveryOverview from './DeliveryOverview';
import FleetAnalytics from './FleetAnalytics';

const PageLayout = () => {
  return (
    <main className="flex-1 p-8">
      <TopBar />
      <SummaryCards />
      <DeliveryOverview />
      <FleetAnalytics />
    </main>
  );
};

export default PageLayout;
