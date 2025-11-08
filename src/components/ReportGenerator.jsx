import React, { useState } from 'react';
import { FileText, Download, Mail, Calendar } from 'lucide-react';

const ReportGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('board-report');
  const [dateRange, setDateRange] = useState({ start: '2025-01-01', end: '2025-11-08' });

  const templates = [
    { value: 'board-report', label: 'Board Report', description: 'For AGM/Board meetings' },
    { value: 'vesting-summary', label: 'Vesting Summary', description: 'Detailed vesting schedule' },
    { value: 'exercise-summary', label: 'Exercise Summary', description: 'Options exercised report' },
    { value: 'accounting-expense', label: 'Accounting Expense', description: 'Ind AS 102 compliance' },
    { value: 'compliance-status', label: 'Compliance Status', description: 'ROC filing status' }
  ];

  const handleGenerateReport = () => {
    alert(`Generating ${templates.find(t => t.value === selectedTemplate)?.label}...`);
  };

  const handleDownloadPDF = () => {
    alert('Downloading report as PDF...');
  };

  const handleEmailReport = () => {
    alert('Sending report via email...');
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Report Generator</h1>
        <p className="text-gray-600 mt-1">Generate ROC and audit-ready ESOP reports</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Report Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <button
              key={template.value}
              onClick={() => setSelectedTemplate(template.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedTemplate === template.value
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <FileText className={`w-6 h-6 mb-2 ${
                selectedTemplate === template.value ? 'text-primary-600' : 'text-gray-400'
              }`} />
              <h3 className="font-medium text-gray-900">{template.label}</h3>
              <p className="text-sm text-gray-600 mt-1">{template.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Calendar className="w-5 h-5" />
          <span>Report Period</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Report Preview</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 min-h-[400px]">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {templates.find(t => t.value === selectedTemplate)?.label}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Report Period: {dateRange.start} to {dateRange.end}
            </p>
            
            <div className="space-y-4 text-sm text-gray-700">
              <p className="font-medium">Company: TechVentures Pvt Ltd</p>
              <p>CIN: U72900KA2018PTC123456</p>
              
              <div className="border-t border-gray-300 pt-4 mt-4">
                <h4 className="font-semibold mb-2">ESOP Pool Summary</h4>
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-1">Total ESOP Pool:</td>
                      <td className="text-right font-medium">100,000 shares</td>
                    </tr>
                    <tr>
                      <td className="py-1">Options Allocated:</td>
                      <td className="text-right font-medium">14,000 shares</td>
                    </tr>
                    <tr>
                      <td className="py-1">Options Vested:</td>
                      <td className="text-right font-medium">7,500 shares</td>
                    </tr>
                    <tr>
                      <td className="py-1">Options Exercised:</td>
                      <td className="text-right font-medium">500 shares</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border-t border-gray-300 pt-4 mt-4">
                <p className="text-xs text-gray-500 italic">
                  This is a preview. Generate full report to see complete details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleGenerateReport}
          className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700"
        >
          <FileText className="w-5 h-5" />
          <span>Generate Report</span>
        </button>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          <Download className="w-5 h-5" />
          <span>Download as PDF</span>
        </button>
        <button
          onClick={handleEmailReport}
          className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
        >
          <Mail className="w-5 h-5" />
          <span>Email Report</span>
        </button>
      </div>
    </div>
  );
};

export default ReportGenerator;
