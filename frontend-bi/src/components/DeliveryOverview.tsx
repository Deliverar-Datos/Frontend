import React from 'react';

const DeliveryOverview = () => {
  const user = localStorage.getItem('user');
  const isAdmin = user === 'admin';

  const iframeSrc = isAdmin
    ? 'https://app.powerbi.com/view?r=eyJrIjoiODEwM2RiNWUtZjc5ZS00NWVkLTk5ZDgtY2Y4YTViZjM2MzAzIiwidCI6IjdjMTcwZTA1LWQxODEtNDY0OS1hNjZjLTUzYTM1NzUzZGE1NCIsImMiOjR9' // Dashboard de admin
    : 'https://app.powerbi.com/view?r=eyJrIjoiYmFlN2ZiOTUtYmRmYy00NjQ1LWEwMmMtODk4NjMyODVmMTVhIiwidCI6IjdjMTcwZTA1LWQxODEtNDY0OS1hNjZjLTUzYTM1NzUzZGE1NCIsImMiOjR9'; // Dashboard de user

  return (
    <section className="bg-white shadow rounded p-4 mb-8">
      <h2 className="font-bold text-lg mb-2">Delivery Performance Overview</h2>
      <div className="text-center text-gray-500">
        <div className="relative w-full pb-[56.25%] h-0 mb-4">
          <iframe
            title="Dashboard Power BI"
            src={iframeSrc}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          />
        </div>

        {isAdmin && (
          <div className="flex justify-center gap-8">
            <div>
              <p className="font-bold text-xl">1,248</p>
              <p className="text-sm text-gray-500">Total Deliveries</p>
            </div>
            <div>
              <p className="font-bold text-xl text-green-600">94.7%</p>
              <p className="text-sm text-gray-500">On-Time Rate</p>
            </div>
            <div>
              <p className="font-bold text-xl">28 min</p>
              <p className="text-sm text-gray-500">Average Time</p>
            </div>
            <div>
              <p className="font-bold text-xl text-purple-500">4.8/5</p>
              <p className="text-sm text-gray-500">Customer Rating</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DeliveryOverview;
