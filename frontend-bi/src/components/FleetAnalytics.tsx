import React from 'react';

const FleetAnalytics = () => {
  return (
    <section className="bg-white shadow rounded p-4">
      <h2 className="font-bold text-lg mb-2">Fleet Analytics</h2>
      <div className="flex gap-4 mb-4">
        <button className="underline">Overview</button>
        <button>Performance</button>
        <button>Delivery Time</button>
        <button>Customer Satisfaction</button>
      </div>
      <p className="text-gray-500">Vehicle performance and utilization statistics.</p>
    </section>
  );
};

export default FleetAnalytics;
