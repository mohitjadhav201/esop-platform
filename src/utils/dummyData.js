export const dummyData = {
  company: {
    name: "TechVentures Pvt Ltd",
    cin: "U72900KA2018PTC123456",
    incorporationDate: "2018-03-15",
    industry: "Technology/SaaS"
  },
  
  esopPool: {
    totalShares: 100000,
    percentageOfEquity: 10,
    sharePrice: 150,
    valuationDate: "2025-10-15",
    allocated: 14000,
    vested: 7500,
    exercised: 500,
    remaining: 86000
  },
  
  employees: [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh@techventures.com",
      employeeId: "EMP001",
      department: "Engineering",
      joinDate: "2020-06-01",
      optionsGranted: 5000,
      grantDate: "2021-01-15",
      vestingStart: "2021-01-15",
      cliffMonths: 12,
      vestingPeriodMonths: 48,
      vested: 3750,
      exercised: 0,
      exercisePrice: 100
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@techventures.com",
      employeeId: "EMP002",
      department: "Product",
      joinDate: "2021-03-10",
      optionsGranted: 3000,
      grantDate: "2021-09-01",
      vestingStart: "2021-09-01",
      cliffMonths: 12,
      vestingPeriodMonths: 48,
      vested: 2000,
      exercised: 500,
      exercisePrice: 110
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@techventures.com",
      employeeId: "EMP003",
      department: "Sales",
      joinDate: "2022-01-20",
      optionsGranted: 2500,
      grantDate: "2022-07-01",
      vestingStart: "2022-07-01",
      cliffMonths: 12,
      vestingPeriodMonths: 48,
      vested: 1250,
      exercised: 0,
      exercisePrice: 120
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha@techventures.com",
      employeeId: "EMP004",
      department: "Finance",
      joinDate: "2023-05-15",
      optionsGranted: 2000,
      grantDate: "2023-11-01",
      vestingStart: "2023-11-01",
      cliffMonths: 12,
      vestingPeriodMonths: 48,
      vested: 500,
      exercised: 0,
      exercisePrice: 130
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram@techventures.com",
      employeeId: "EMP005",
      department: "Marketing",
      joinDate: "2024-02-01",
      optionsGranted: 1500,
      grantDate: "2024-08-01",
      vestingStart: "2024-08-01",
      cliffMonths: 12,
      vestingPeriodMonths: 48,
      vested: 0,
      exercised: 0,
      exercisePrice: 140
    }
  ],
  
  complianceForms: [
    {
      formType: "MGT-14",
      description: "Board Resolution for ESOP Scheme Approval",
      status: "Filed",
      dueDate: "2024-02-15",
      filedDate: "2024-02-10",
      nextDue: "2025-02-15"
    },
    {
      formType: "PAS-3",
      description: "Return of Allotment",
      status: "Due Soon",
      dueDate: "2025-11-20",
      filedDate: "2024-10-05",
      nextDue: "2025-11-20"
    },
    {
      formType: "SH-6",
      description: "Register of Employee Stock Options",
      status: "Overdue",
      dueDate: "2025-10-31",
      filedDate: "2024-09-30",
      nextDue: "2025-10-31"
    }
  ],
  
  valuationData: {
    fairValuePerOption: 50,
    totalOptionsGranted: 14000,
    vestingPeriodYears: 4,
    expectedAttritionRate: 10,
    totalExpense: 700000,
    annualExpense: 175000,
    quarterlyExpense: 43750
  },
  
  blackScholesInputs: {
    stockPrice: 150,
    exercisePrice: 120,
    timeToMaturity: 2.5,
    volatility: 35,
    riskFreeRate: 6.5,
    calculatedValue: 48.5
  },
  
  activityFeed: [
    {
      date: "2025-11-05",
      type: "Grant",
      description: "500 options granted to new employee",
      user: "HR Team"
    },
    {
      date: "2025-11-01",
      type: "Vesting",
      description: "1,250 options vested for Rajesh Kumar",
      user: "System"
    },
    {
      date: "2025-10-28",
      type: "Exercise",
      description: "500 options exercised by Priya Sharma",
      user: "Priya Sharma"
    },
    {
      date: "2025-10-15",
      type: "Valuation",
      description: "New valuation report uploaded - Rs. 150/share",
      user: "Finance Team"
    },
    {
      date: "2025-10-10",
      type: "Compliance",
      description: "Form MGT-14 filing reminder sent",
      user: "System"
    }
  ],
  
  vestingTrends: [
    { quarter: "Q1 2024", vested: 2000 },
    { quarter: "Q2 2024", vested: 2500 },
    { quarter: "Q3 2024", vested: 1500 },
    { quarter: "Q4 2024", vested: 2250 },
    { quarter: "Q1 2025", vested: 3000 },
    { quarter: "Q2 2025", vested: 1800 }
  ]
};
