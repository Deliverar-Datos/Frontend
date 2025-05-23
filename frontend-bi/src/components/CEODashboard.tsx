import React from 'react';

const CEODashboard = () => {
  return (
    <div className="space-y-6">
      {/* KPIs Ejecutivos */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Métricas Clave del Negocio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* KPI Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Ingresos Totales</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">$328K</p>
                <div className="flex items-center mt-2 text-green-600">
                  <span className="text-sm font-medium">+12.5%</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <div className="w-6 h-6 text-green-600">💰</div>
              </div>
            </div>
          </div>

          {/* KPI Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Margen de Ganancia</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">18.2%</p>
                <div className="flex items-center mt-2 text-green-600">
                  <span className="text-sm font-medium">+2.1%</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <div className="w-6 h-6 text-green-600">📈</div>
              </div>
            </div>
          </div>

          {/* KPI Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Clientes Activos</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">2,847</p>
                <div className="flex items-center mt-2 text-green-600">
                  <span className="text-sm font-medium">+8.3%</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <div className="w-6 h-6 text-green-600">👥</div>
              </div>
            </div>
          </div>

          {/* KPI Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Satisfacción</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">94%</p>
                <div className="flex items-center mt-2 text-red-600">
                  <span className="text-sm font-medium">-1.2%</span>
                </div>
              </div>
              <div className="p-3 rounded-full bg-red-100">
                <div className="w-6 h-6 text-red-600">🎯</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Gráficos principales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Ingresos Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ingresos Mensuales</h3>
          <div className="h-64 flex items-end justify-around bg-gray-50 rounded p-4">
            <div className="bg-blue-500 w-8 h-32 rounded-t"></div>
            <div className="bg-blue-500 w-8 h-40 rounded-t"></div>
            <div className="bg-blue-500 w-8 h-28 rounded-t"></div>
            <div className="bg-blue-500 w-8 h-48 rounded-t"></div>
            <div className="bg-blue-500 w-8 h-36 rounded-t"></div>
            <div className="bg-blue-500 w-8 h-52 rounded-t"></div>
          </div>
          <div className="flex justify-around text-xs text-gray-600 mt-2">
            <span>Ene</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Abr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>

        {/* Market Share */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Participación de Mercado</h3>
          <div className="flex items-center justify-center h-64">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">35%</div>
                <div className="text-sm">Nuestra empresa</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Alertas Críticas */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertas Ejecutivas</h3>
        <div className="space-y-3">
          
          <div className="p-4 rounded-lg border-l-4 border-red-500 bg-red-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-5 h-5 mr-3 text-red-600">⚠️</span>
                <span className="text-gray-900 font-medium">Retraso en proyecto estratégico Q2</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Crítica
              </span>
            </div>
          </div>

          <div className="p-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-5 h-5 mr-3 text-yellow-600">⚠️</span>
                <span className="text-gray-900 font-medium">Inventario bajo en sucursal Norte</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Alta
              </span>
            </div>
          </div>

          <div className="p-4 rounded-lg border-l-4 border-blue-500 bg-blue-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-5 h-5 mr-3 text-blue-600">ℹ️</span>
                <span className="text-gray-900 font-medium">Nueva oportunidad de mercado identificada</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Media
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Resumen Estratégico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
          <h4 className="text-lg font-semibold mb-2">Objetivo Trimestral</h4>
          <p className="text-3xl font-bold">78%</p>
          <p className="text-blue-100">Completado</p>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
          <h4 className="text-lg font-semibold mb-2">ROI Anual</h4>
          <p className="text-3xl font-bold">24.5%</p>
          <p className="text-green-100">+3.2% vs año anterior</p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
          <h4 className="text-lg font-semibold mb-2">Nuevos Mercados</h4>
          <p className="text-3xl font-bold">3</p>
          <p className="text-purple-100">En evaluación</p>
        </div>
        
      </div>
    </div>
  );
};

export default CEODashboard;