import React, { useState } from 'react';
import { useESOP } from '../context/ESOPContext';
import { Calculator, TrendingUp, FileText, DollarSign } from 'lucide-react';

const ValuationHub = () => {
  const { esopData } = useESOP();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Valuation & Accounting Hub</h1>
        <p className="text-gray-600 mt-1">Manage ESOP valuation and Ind AS 102 compliance</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <FileText className="w-5 h-5" />
          <span>Valuation Report</span>
        </h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 transition-colors cursor-pointer">
          <div className="flex flex-col items-center">
            <TrendingUp className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">Upload Registered Valuer's Report</p>
            <p className="text-sm text-gray-500 mb-4">PDF, DOC (Max 10MB)</p>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              Choose File
            </button>
          </div>
        </div>
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Current Valuation:</strong> ₹{esopData.esopPool.sharePrice} per share
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Calculator className="w-5 h-5" />
          <span>Ind AS 102 Expense Calculator</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fair Value per Option</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
              <input
                type="number"
                value={esopData.valuationData.fairValuePerOption}
                readOnly
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Options Granted</label>
            <input
              type="number"
              value={esopData.valuationData.totalOptionsGranted}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-primary-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Expense</p>
            <p className="text-2xl font-bold text-primary-600">₹{esopData.valuationData.totalExpense.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Annual Expense</p>
            <p className="text-2xl font-bold text-primary-600">₹{esopData.valuationData.annualExpense.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Quarterly Expense</p>
            <p className="text-2xl font-bold text-primary-600">₹{esopData.valuationData.quarterlyExpense.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <DollarSign className="w-5 h-5" />
          <span>Black-Scholes Option Pricing</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stock Price (₹)</label>
            <input type="number" value={esopData.blackScholesInputs.stockPrice} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Exercise Price (₹)</label>
            <input type="number" value={esopData.blackScholesInputs.exercisePrice} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time to Maturity (Years)</label>
            <input type="number" value={esopData.blackScholesInputs.timeToMaturity} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Volatility (%)</label>
            <input type="number" value={esopData.blackScholesInputs.volatility} readOnly className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" />
          </div>
        </div>

        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Calculated Fair Value per Option</p>
          <p className="text-4xl font-bold text-green-600">₹{esopData.blackScholesInputs.calculatedValue}</p>
        </div>
      </div>
    </div>
  );
};

export default ValuationHub;
