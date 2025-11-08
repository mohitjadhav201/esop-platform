import React from 'react';
import { useESOP } from '../context/ESOPContext';
import { TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const AdminDashboard = () => {
  const { esopData, activities } = useESOP();

  const metrics = [
    {
      label: 'Total ESOP Pool',
      value: esopData.esopPool.totalShares.toLocaleString(),
      change: `${esopData.esopPool.percentageOfEquity}% of equity`,
      icon: Award,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      label: 'Allocated Options',
      value: esopData.esopPool.allocated.toLocaleString(),
      change: `${((esopData.esopPool.allocated / esopData.esopPool.totalShares) * 100).toFixed(1)}% utilized`,
      icon: Users,
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      label: 'Vested Options',
      value: esopData.esopPool.vested.toLocaleString(),
      change: `${((esopData.esopPool.vested / esopData.esopPool.allocated) * 100).toFixed(1)}% of allocated`,
      icon: CheckCircle,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      label: 'Exercised Options',
      value: esopData.esopPool.exercised.toLocaleString(),
      change: `${((esopData.esopPool.exercised / esopData.esopPool.vested) * 100).toFixed(1)}% of vested`,
      icon: TrendingUp,
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600'
    }
  ];

  return (
    <div className="p-8 bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of ESOP pool and compliance status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition">
              <div className={`${metric.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${metric.textColor}`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{metric.value}</h3>
              <p className="text-sm text-gray-600 mt-2">{metric.label}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Pool Utilization</h2>
          <div className="space-y-4">
            {[
              { label: 'Allocated', value: esopData.esopPool.allocated, total: esopData.esopPool.totalShares, color: 'bg-blue-500' },
              { label: 'Vested', value: esopData.esopPool.vested, total: esopData.esopPool.totalShares, color: 'bg-green-500' },
              { label: 'Exercised', value: esopData.esopPool.exercised, total: esopData.esopPool.totalShares, color: 'bg-purple-500' }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">{item.label}</span>
                  <span className="text-gray-600">{item.value.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${(item.value / item.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-3">
            {activities.slice(0, 5).map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-b-0">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'Grant' ? 'bg-blue-500' :
                  activity.type === 'Vesting' ? 'bg-green-500' :
                  'bg-gray-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 font-medium">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Employee ESOP Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Employee</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Department</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Granted</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Vested</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Exercised</th>
              </tr>
            </thead>
            <tbody>
              {esopData.employees.map((employee) => (
                <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <p className="font-medium text-gray-900">{employee.name}</p>
                    <p className="text-xs text-gray-500">{employee.employeeId}</p>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{employee.department}</td>
                  <td className="py-3 px-4 text-sm text-right font-medium text-gray-900">{employee.optionsGranted}</td>
                  <td className="py-3 px-4 text-sm text-right font-medium text-green-600">{employee.vested}</td>
                  <td className="py-3 px-4 text-sm text-right font-medium text-purple-600">{employee.exercised}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
