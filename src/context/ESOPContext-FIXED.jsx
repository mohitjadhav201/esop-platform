import React, { createContext, useContext, useState } from 'react';
import { dummyData } from '../utils/dummyData';

const ESOPContext = createContext();

export const useESOP = () => {
  const context = useContext(ESOPContext);
  if (!context) {
    throw new Error('useESOP must be used within ESOPProvider');
  }
  return context;
};

export const ESOPProvider = ({ children }) => {
  const [esopData, setEsopData] = useState(dummyData);
  const [activities, setActivities] = useState(dummyData.activityFeed);

  const addActivity = (activity) => {
    const newActivity = {
      ...activity,
      date: new Date().toISOString().split('T')[0]
    };
    setActivities([newActivity, ...activities]);
  };

  const updateComplianceStatus = (formType, status, filedDate = null) => {
    setEsopData(prev => ({
      ...prev,
      complianceForms: prev.complianceForms.map(form =>
        form.formType === formType
          ? { ...form, status, filedDate: filedDate || form.filedDate }
          : form
      )
    }));
    
    addActivity({
      type: 'Compliance',
      description: `Form ${formType} status updated to ${status}`,
      user: 'System'
    });
  };

  const grantOptions = (employeeId, options, grantDate) => {
    addActivity({
      type: 'Grant',
      description: `${options} options granted`,
      user: 'HR Team'
    });
  };

  const value = {
    esopData,
    activities,
    addActivity,
    updateComplianceStatus,
    grantOptions
  };

  return <ESOPContext.Provider value={value}>{children}</ESOPContext.Provider>;
};
