import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ESOPProvider } from './context/ESOPContext';
import Navigation from './components/Navigation';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import DesignWizard from './components/DesignWizard';
import ComplianceTracker from './components/ComplianceTracker';
import ValuationHub from './components/ValuationHub';
import EmployeePortal from './components/EmployeePortal';
import ReportGenerator from './components/ReportGenerator';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ESOPProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="flex h-screen bg-gray-50">
                    <Navigation />
                    <div className="flex-1 overflow-auto mt-16 lg:mt-0">
                      <Routes>
                        <Route path="/" element={<AdminDashboard />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/design-wizard" element={<DesignWizard />} />
                        <Route path="/compliance" element={<ComplianceTracker />} />
                        <Route path="/valuation" element={<ValuationHub />} />
                        <Route path="/employee" element={<EmployeePortal />} />
                        <Route path="/reports" element={<ReportGenerator />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ESOPProvider>
    </AuthProvider>
  );
}

export default App;
