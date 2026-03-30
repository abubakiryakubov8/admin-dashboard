# 🖥️ Admin Dashboard

A production-grade admin dashboard built with React, featuring real-time charts,
full routing, dark/light mode, and a complete Rose Noir design system.

## 🌐 Live Demo
**[View Live →] https://admin-dashboard-gilt-six.vercel.app/dashboard**

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 📊 Charts | Area chart, Bar chart, Line chart, Radial chart via Recharts |
| 🧭 Routing | Full client-side routing with React Router v6 |
| 🌙 Dark Mode | System-aware dark/light toggle with React Context |
| 📱 Responsive | Mobile-first, works on all screen sizes |
| 🎨 Design System | Rose Noir — custom dark theme with consistent tokens |
| 📄 5 Full Pages | Dashboard, Analytics, Users, Orders, Settings |

---

## 📸 Pages

- **Dashboard** — KPI cards, revenue chart, user breakdown, orders table
- **Analytics** — Session data, bounce rate, conversion trend charts
- **Users** — Searchable user table with roles, plans, status badges
- **Orders** — Filterable order history with status tracking
- **Settings** — Profile editor, notification toggles, security settings

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| React Router | 6 | Client-side routing |
| Recharts | 2 | Data visualization |
| Tailwind CSS | 3 | Utility-first styling |
| Lucide React | latest | Icon system |
| Vite | 5 | Build tool |
| Vercel | — | Deployment & CDN |

---

## 🚀 Run Locally
```bash
git clone https://github.com/YOUR_USERNAME/admin-dashboard.git
cd admin-dashboard
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📦 Build for Production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure
```
src/
├── components/
│   ├── Sidebar.jsx       # Navigation with React Router NavLink
│   ├── Topbar.jsx        # Search, theme toggle, notifications
│   ├── StatCard.jsx      # Reusable KPI metric card
│   ├── SalesChart.jsx    # Area chart — revenue vs target
│   ├── UsersChart.jsx    # Radial chart — user breakdown
│   └── RecentTable.jsx   # Orders data table
├── context/
│   └── ThemeContext.jsx  # Global dark/light mode state
├── pages/
│   ├── Dashboard.jsx     # Main overview page
│   ├── Analytics.jsx     # Traffic & conversion data
│   ├── Users.jsx         # User management table
│   ├── Orders.jsx        # Order history with filters
│   └── Settings.jsx      # Profile & preferences
├── App.jsx               # Route definitions
├── main.jsx              # App entry point
└── index.css             # Global styles + Tailwind
```

---

## 🎨 Design System — Rose Noir

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0f0a0e` | Page background |
| Surface | `#180f16` | Cards, sidebar |
| Accent | `#f43f5e` | Primary actions, active states |
| Accent soft | `#fb7185` | Hover states, badges |
| Text primary | `#fff1f2` | Headings, values |
| Text muted | `#9f5a6e` | Labels, subtitles |
| Border | `rgba(244,63,94,0.1)` | Card borders |

---

## 👨‍💻 Author

Built by [Abubakir](https://github.com/abubakiryakubov8)

Open for freelance work → [Upwork Profile](https://upwork.com/freelancers/e0f07bcd)

---

> This project is part of my frontend portfolio.
> Available for React, dashboard, and SaaS UI projects on Upwork.
