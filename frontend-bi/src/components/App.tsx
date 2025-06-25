import React from 'react';
import TopBar from './TopBar';
import DashboardSelector from './dashboards/DashboardSelector';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 bg-gray-100 p-8">
        <DashboardSelector />
      </main>
    </div>
  );
};

export default App;
