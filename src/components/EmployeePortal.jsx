import React from 'react';
import { useESOP } from '../context/ESOPContext';
import { Award, Calendar, TrendingUp, DollarSign, Clock } from 'lucide-react';

const EmployeePortal = () => {
  const { esopData } = useESOP();
  const employee = esopData.employees[0];

  const calculateCurrentValue = () => {
    return employee.vested * esopData.esopPool.sharePrice;
  };

  const calculatePotentialGain = () => {
    return employee.vested * (esopData.esopPool.sharePrice - employee.exercisePrice);
  };

  const vestingProgress = (employee.vested / employee.optionsGranted) * 100;
  const unvested = employee.optionsGranted - employee.vested;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Employee ESOP Portal</h1>
        <p className="text-gray-600 mt-1">View your stock options and vesting schedule</p>
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{employee.name}</h2>
            <p className="text-primary-100">{employee.employeeId} • {employee.department}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-primary-200">Current Value</p>
            <p className="text-3xl font-bold">₹{calculateCurrentValue().toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <Award className="w-8 h-8 text-primary-600 mb-3" />
          <p className="text-sm text-gray-600">Total Granted</p>
          <p className="text-2xl font-bold text-gray-900">{employee.optionsGranted.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-sm text-gray-600">Vested</p>
          <p className="text-2xl font-bold text-gray-900">{employee.vested.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <Clock className="w-8 h-8 text-yellow-600 mb-3" />
          <p className="text-sm text-gray-600">Unvested</p>
          <p className="text-2xl font-bold text-gray-900">{unvested.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <DollarSign className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-sm text-gray-600">Potential Gain</p>
          <p className="text-2xl font-bold text-gray-900">₹{calculatePotentialGain().toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Vesting Progress</h2>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{vestingProgress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-4 rounded-full transition-all"
              style={{ width: `${vestingProgress}%` }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Grant Date</p>
            <p className="font-medium text-gray-900">{employee.grantDate}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Cliff Period</p>
            <p className="font-medium text-gray-900">{employee.cliffMonths} months</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Vesting Period</p>
            <p className="font-medium text-gray-900">{employee.vestingPeriodMonths} months</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Vesting Schedule</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          {[
            { month: 12, options: 1250, date: '2022-01-15', status: 'completed' },
            { month: 24, options: 1250, date: '2023-01-15', status: 'completed' },
            { month: 36, options: 1250, date: '2024-01-15', status: 'completed' },
            { month: 48, options: 1250, date: '2025-01-15', status: 'pending' }
          ].map((milestone, index) => (
            <div key={index} className="relative flex items-start space-x-4 mb-6 last:mb-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                milestone.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
              }`}>
                {milestone.status === 'completed' ? (
                  <Calendar className="w-4 h-4 text-white" />
                ) : (
                  <Clock className="w-4 h-4 text-gray-600" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Month {milestone.month}</p>
                    <p className="text-sm text-gray-600">{milestone.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{milestone.options.toLocaleString()} options</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      milestone.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {milestone.status === 'completed' ? 'Vested' : 'Pending'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Exercise Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-blue-700 mb-1">Exercise Price</p>
            <p className="text-2xl font-bold text-blue-900">₹{employee.exercisePrice}</p>
          </div>
          <div>
            <p className="text-blue-700 mb-1">Current Market Price</p>
            <p className="text-2xl font-bold text-blue-900">₹{esopData.esopPool.sharePrice}</p>
          </div>
          <div>
            <p className="text-blue-700 mb-1">Exercisable Options</p>
            <p className="text-2xl font-bold text-blue-900">{(employee.vested - employee.exercised).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-blue-700 mb-1">Exercise Window</p>
            <p className="text-2xl font-bold text-blue-900">Open</p>
          </div>
        </div>
        <button className="mt-4 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Exercise Options
        </button>
      </div>
    </div>
  );
};

export default EmployeePortal;
