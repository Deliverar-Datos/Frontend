import React from 'react';

const SummaryCards = () => {
  return (
    <section className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-white shadow rounded p-4">
  <div className="w-full aspect-[4/3] overflow-hidden rounded">
    <iframe
      title="test1"
      src="https://app.powerbi.com/view?r=eyJrIjoiYmFlN2ZiOTUtYmRmYy00NjQ1LWEwMmMtODk4NjMyODVmMTVhIiwidCI6IjdjMTcwZTA1LWQxODEtNDY0OS1hNjZjLTUzYTM1NzUzZGE1NCIsImMiOjR9&rs:embed=true&navContentPaneEnabled=false&filterPaneEnabled=false"
      className="w-full h-full border-0"
      allowFullScreen
    />
  </div>
</div>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-sm text-gray-500">Avg. Delivery Time</h2>
        <p className="text-xl font-bold">28 min</p>
        <p className="text-green-500 text-sm">-3 min from last month</p>
      </div>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-sm text-gray-500">Customer Satisfaction</h2>
        <p className="text-xl font-bold">4.8/5</p>
        <p className="text-green-500 text-sm">+0.2 from last month</p>
      </div>
    </section>
  );
};

export default SummaryCards;
