import React from 'react';
import { dashboardsByUser } from '../../config/dashboards/index';

const colSpanClasses: Record<number, string> = {
  1: 'col-span-12 md:col-span-1',
  2: 'col-span-12 md:col-span-2',
  3: 'col-span-12 md:col-span-3',
  4: 'col-span-12 md:col-span-4',
  5: 'col-span-12 md:col-span-5',
  6: 'col-span-12 md:col-span-6',
  7: 'col-span-12 md:col-span-7',
  8: 'col-span-12 md:col-span-8',
  9: 'col-span-12 md:col-span-9',
  10: 'col-span-12 md:col-span-10',
  11: 'col-span-12 md:col-span-11',
  12: 'col-span-12',
};

const getColSpanClass = (colSpan: number) => {
  return colSpanClasses[colSpan] || 'col-span-12';
};

const DashboardSelector = () => {
  const userEmail = localStorage.getItem('user');
  const userDash = dashboardsByUser.find((u) => u.email === userEmail);

  if (!userDash || !userDash.rows) {
    return <div className="text-red-600">No se encontraron dashboards configurados.</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      {userDash.rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-12 gap-4">
          {row.cards.map((card, idx) => (
            <section
              key={idx}
              className={`${getColSpanClass(card.colSpan)} bg-white shadow rounded p-4`}
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={card.url}
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0 rounded"
                ></iframe>
              </div>
            </section>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DashboardSelector;
