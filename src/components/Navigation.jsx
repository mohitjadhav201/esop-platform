import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Wand2,
  Scale,
  DollarSign,
  Users,
  FileText,
  LogOut,
  Menu,
  X,
  Building2,
  ChevronDown
} from 'lucide-react';

const Navigation = () => {
  const { user, role, logout, switchRole, hasAccess } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const menuItems = [
    { path: '/admin', label: 'Admin Dashboard', icon: LayoutDashboard, module: 'admin' },
    { path: '/design-wizard', label: 'Design Wizard', icon: Wand2, module: 'design-wizard' },
    { path: '/compliance', label: 'Compliance Tracker', icon: Scale, module: 'compliance' },
    { path: '/valuation', label: 'Valuation Hub', icon: DollarSign, module: 'valuation' },
    { path: '/employee', label: 'Employee Portal', icon: Users, module: 'employee' },
    { path: '/reports', label: 'Report Generator', icon: FileText, module: 'reports' }
  ];

  const filteredMenuItems = menuItems.filter(item => hasAccess(item.module));

  const roles = [
    { value: 'admin', label: 'Admin' },
    { value: 'hr', label: 'HR Manager' },
    { value: 'finance', label: 'Finance' },
    { value: 'legal', label: 'Legal' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleRoleSwitch = (newRole) => {
    switchRole(newRole);
    setRoleDropdownOpen(false);
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-primary-600" />
            <span className="font-bold text-lg">ESOP</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="font-bold text-xl text-gray-900">ESOP Platform</h1>
                <p className="text-xs text-gray-500">Compliance Suite</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">
                      {user?.name?.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{role}</p>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {roles.map((r) => (
                    <button
                      key={r.value}
                      onClick={() => handleRoleSwitch(r.value)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                        role === r.value ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {filteredMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
