# 🚀 Shubham's Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-shubham--masai.github.io-blue?style=for-the-badge&logo=githubpages&logoColor=white)](https://shubham-masai.github.io)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A sleek, responsive, and performance-optimized personal portfolio showcasing Full Stack Development projects, technical skillsets, and professional experience. Built with Next.js, React, and Tailwind CSS.

---

## 🌐 Live Website

- **Live URL:** [https://shubham-masai.github.io](https://shubham-masai.github.io)
- **Author:** [Shubham](https://github.com/shubham-masai)

---

## 🌟 Key Features

- **⚡ Blazing Fast Performance:** Powered by Next.js static generation for instantaneous load times and smooth client-side routing.
- **📱 Fully Responsive Design:** Clean, modern layout meticulously tested across mobile, tablet, laptop, and 4K desktop screens.
- **🧭 Sticky Navigation with Glassmorphism:** Accessible navigation with smooth blur backdrop on scroll (`Home` ➔ `About` ➔ `Skills` ➔ `Projects` ➔ `Contact` ➔ `Resume`).
- **📄 Dual-Action Resume Access:** One-click instant resume download combined with previewing in a clean new browser tab.
- **💼 Project Showcase:** Interactive cards featuring live deployment links, GitHub repository access, tech stack chips, and impact metrics.
- **🛠️ Comprehensive Skills Matrix:** Categorized breakdown covering Frontend, Backend, Databases, Tools & Platforms, and Core Soft Skills.
- **📬 Interactive Contact Hub:** Direct channels for professional inquiries via Email, LinkedIn, and GitHub.
- **🤖 Automated CI/CD:** GitHub Actions workflow automatically tests, builds, and deploys updates directly to GitHub Pages on every push to `main`.

---

## 🛠️ Tech Stack & Tools

### **Frontend & Framework**
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Library:** [React 18](https://react.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & CSS Variables
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Geist & Inter Font Family

### **Deployment & CI/CD**
- **Hosting:** GitHub Pages
- **Automation:** GitHub Actions (`.github/workflows/deploy.yml`)

---

## 📁 Repository Structure

```plaintext
shubham-masai.github.io/
├── app/                  # Next.js App Router root layout & main page
│   ├── layout.js         # Root layout with metadata and fonts
│   ├── page.js           # Main landing page assembling sections
│   └── globals.css       # Global styles and Tailwind directives
├── components/           # Modular, reusable UI components
│   ├── Navbar.jsx        # Sticky navigation bar with mobile drawer
│   ├── Hero.jsx          # Hero introduction with CTA & Resume action
│   ├── About.jsx         # Professional summary and background
│   ├── Skills.jsx        # Technical & soft skills matrix with icons
│   ├── Projects.jsx      # Filterable project showcase cards
│   ├── Experience.jsx    # Career progression & education timeline
│   ├── Contact.jsx       # Contact form and social connectivity links
│   └── Footer.jsx        # Footer with copyright and quick anchors
├── data/                 # Centralized configuration & data files
│   └── portfolioData.js  # Project details, skill sets, and work history
├── public/               # Static assets, icons, and resume PDF
│   └── shubham_resume.pdf
├── .github/workflows/    # CI/CD deployment pipeline
│   └── deploy.yml
├── package.json          # Project dependencies and npm scripts
├── tailwind.config.js    # Tailwind theme and styling configuration
└── README.md             # Project documentation
```

---

## 🚀 Getting Started Locally

Follow these instructions to set up and run the project locally on your machine.

### **Prerequisites**
Make sure you have Node.js (version 18.x or higher) and npm installed:
```bash
node -v
npm -v
```

### **1. Clone the Repository**
```bash
git clone https://github.com/shubham-masai/shubham-masai.github.io.git
cd shubham-masai.github.io
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Start the Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### **4. Build for Production**
To generate the static production export:
```bash
npm run build
```

---

## 📬 Connect With Me

- **GitHub:** [@shubham-masai](https://github.com/shubham-masai)
- **Portfolio:** [shubham-masai.github.io](https://shubham-masai.github.io)
- **LinkedIn:** [Shubham on LinkedIn](https://www.linkedin.com/in/shubham-singh-9544971b3/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
