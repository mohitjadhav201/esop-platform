import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('esop_user');
    const storedRole = localStorage.getItem('esop_role');
    
    if (storedUser && storedRole) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
    }
    setLoading(false);
  }, []);

  const login = (roleType) => {
    const userData = {
      id: '1',
      name: roleType === 'admin' ? 'Admin User' : roleType === 'hr' ? 'HR Manager' : roleType === 'finance' ? 'Finance Manager' : 'Legal Manager',
      email: `${roleType}@techventures.com`,
      role: roleType
    };
    
    setUser(userData);
    setRole(roleType);
    localStorage.setItem('esop_user', JSON.stringify(userData));
    localStorage.setItem('esop_role', roleType);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem('esop_user');
    localStorage.removeItem('esop_role');
  };

  const switchRole = (newRole) => {
    const userData = {
      id: '1',
      name: newRole === 'admin' ? 'Admin User' : newRole === 'hr' ? 'HR Manager' : newRole === 'finance' ? 'Finance Manager' : 'Legal Manager',
      email: `${newRole}@techventures.com`,
      role: newRole
    };
    
    setUser(userData);
    setRole(newRole);
    localStorage.setItem('esop_user', JSON.stringify(userData));
    localStorage.setItem('esop_role', newRole);
  };

  const hasAccess = (module) => {
    if (role === 'admin') return true;
    
    const permissions = {
      hr: ['admin', 'employee', 'design-wizard'],
      finance: ['admin', 'valuation', 'reports'],
      legal: ['compliance', 'reports']
    };
    
    return permissions[role]?.includes(module) || false;
  };

  const value = {
    user,
    role,
    login,
    logout,
    switchRole,
    hasAccess,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
