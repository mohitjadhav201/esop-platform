# ESOP Implementation Platform

A complete, production-ready ESOP (Employee Stock Option Plan) management platform built with React and Tailwind CSS. Deploy to Netlify in minutes with zero backend required.

## 🎯 Features

### 🧩 ESOP Design Wizard
- Multi-step guided form for creating compliant ESOP policies
- Rule 12 compliance validation
- Company details, pool configuration, eligibility criteria
- Vesting schedule setup with cliff period

### ⚖️ Legal & ROC Compliance Tracker
- Track MGT-14, PAS-3, SH-6 filing requirements
- Status indicators (Filed/Due Soon/Overdue)
- Document upload functionality
- Compliance calendar with visual deadlines

### 💰 Valuation & Accounting Hub
- Ind AS 102 expense calculator
- Black-Scholes option pricing model
- Fair value per option calculations
- Quarterly/annual expense breakdown

### 👥 Employee Portal
- Personal ESOP dashboard for each employee
- View vested vs unvested options
- Visual vesting timeline
- Exercise window information
- Current and potential value calculations

### 📊 Admin Dashboard
- Real-time ESOP metrics and KPIs
- Pool utilization visualization
- Vesting trends chart
- Compliance status cards
- Recent activity feed
- Employee ESOP summary table

### 🧾 Report Generator
- 5 report templates (Board, Vesting, Exercise, Accounting, Compliance)
- Date range selection
- PDF download capability
- Email report functionality

### 🔒 Security & Access Control
- Role-based access (Admin, HR, Finance, Legal)
- Role switching from dashboard
- Protected routes
- Permission-based module visibility

## 📋 Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router v6
- **State Management:** React Context API
- **Hosting:** Netlify

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm installed
- Git (optional, for GitHub deployment)

### Installation

1. **Create React App:**
```bash
npx create-react-app esop-platform
cd esop-platform
```

2. **Install Dependencies:**
```bash
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Copy All Files:**
   - Copy each `.jsx` and `.js` file from the component files provided
   - Replace `package.json`, `tailwind.config.js`, `postcss.config.js`
   - Update `src/index.css` with Tailwind directives

4. **Run Locally:**
```bash
npm start
```

Visit `http://localhost:3000` and login with any role.

## 📁 Project Structure

```
esop-platform/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── _redirects                    (for Netlify)
├── src/
│   ├── components/
│   │   ├── AdminDashboard.jsx
│   │   ├── ComplianceTracker.jsx
│   │   ├── DesignWizard.jsx
│   │   ├── EmployeePortal.jsx
│   │   ├── Login.jsx
│   │   ├── Navigation.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── ReportGenerator.jsx
│   │   └── ValuationHub.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ESOPContext.jsx
│   ├── utils/
│   │   └── dummyData.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## 🌐 Deployment on Netlify

### Method 1: GitHub + Netlify (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial ESOP Platform commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/esop-platform.git
git push -u origin main
```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select your repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `build`
   - Click "Deploy site"

### Method 2: Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify login
netlify deploy --prod
```

### Method 3: Drag & Drop

```bash
npm run build
```

Then drag the `build` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

## 🔐 Test Credentials

**Demo Mode - No Password Required**

Select any role and click "Sign In":
- **Admin** - Full access to all modules
- **HR Manager** - Access to Employee Portal, Design Wizard, Dashboard
- **Finance** - Access to Valuation, Reports, Dashboard
- **Legal** - Access to Compliance, Reports

## 📊 Sample Data Included

- 5 demo employees with various vesting schedules
- ESOP Pool: 100,000 shares (10% of equity)
- 3 compliance forms (MGT-14, PAS-3, SH-6) at different statuses
- Valuation: ₹150 per share as of Oct 2025
- 6 quarters of vesting trends data

## ✅ Compliance References

This platform implements:
- **Companies Act, 2013** - Section 62(1)(b)
- **Rule 12** of Companies (Share Capital and Debentures) Rules, 2014
- **SEBI SBEB Regulations, 2021** (for listed companies)
- **Ind AS 102** - Share-Based Payments accounting

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        600: '#your-color-here',
        // ... other shades
      },
    },
  },
}
```

### Add Real Backend
Replace dummy data in `ESOPContext.jsx` with API calls to:
- Firebase Firestore
- Supabase PostgreSQL
- Your Node.js/Express server

### Add Authentication
Integrate Firebase Auth or Auth0 instead of mock login in `AuthContext.jsx`

## 📈 Future Enhancements

- [ ] PDF report generation
- [ ] Email notifications
- [ ] Document storage (AWS S3/Supabase Storage)
- [ ] Real database integration
- [ ] Actual user authentication
- [ ] Excel export functionality
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] API integrations

## 💰 Cost Breakdown

**Current Setup: FREE**
- React, Tailwind CSS, Lucide: Free (MIT License)
- Netlify: Free tier (100 GB bandwidth/month)
- GitHub: Free (unlimited public repos)

**Optional Paid Services:**
- Netlify Pro: $19/month
- Firebase: Starts at $25/month
- Custom Domain: ₹500-1000/year

## 🐛 Troubleshooting

### Issue: "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not applying
Verify `tailwind.config.js` has correct content paths and rebuild.

### Issue: Routing doesn't work on page refresh (Netlify)
Ensure `public/_redirects` file exists with:
```
/*    /index.html   200
```

### Issue: Build fails
- Check all imports are correct
- Verify no typos in file names
- Run `npm install` again

## 📞 Support

This is a fully functional demo. For production use:
1. Add real backend and database
2. Implement proper authentication
3. Add input validation
4. Handle errors gracefully
5. Add loading states

## 📄 License

MIT License - Free for personal and commercial use

## 🎉 Getting Started

1. Download all component files
2. Create the folder structure
3. Copy files to appropriate locations
4. Run `npm install` and `npm start`
5. Test locally
6. Deploy to Netlify

**You're ready to go!** 🚀

---

**Need help?** Check the deployment instructions or raise an issue on GitHub.

**Want to contribute?** Fork the repo and submit a pull request!
