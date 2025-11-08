import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Building2, Shield, User } from 'lucide-react';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('admin');
  const { login } = useAuth();
  const navigate = useNavigate();

  const roles = [
    { value: 'admin', label: 'Admin', icon: Shield },
    { value: 'hr', label: 'HR Manager', icon: User },
    { value: 'finance', label: 'Finance', icon: Building2 },
    { value: 'legal', label: 'Legal', icon: Shield }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    login(selectedRole);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">ESOP Platform</h1>
          <p className="text-gray-600 mt-2">Select your role to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-3">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => setSelectedRole(role.value)}
                  className={`w-full p-4 rounded-lg border-2 transition-all flex items-center space-x-3 ${
                    selectedRole === role.value
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <Icon className="w-6 h-6 text-primary-600" />
                  <span className="font-medium text-gray-900">{role.label}</span>
                  {selectedRole === role.value && (
                    <span className="ml-auto text-primary-600">✓</span>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Demo Mode - No authentication required
        </p>
      </div>
    </div>
  );
};

export default Login;
