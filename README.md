# Excellent Academy - Coaching Institute Website

A modern, premium, fully responsive coaching institute website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design inspired by top coaching institutes like Allen, PW, Aakash, and FIITJEE
- **Fully Responsive**: Optimized for Mobile, Tablet, Laptop, and Desktop (320px to 1536px+)
- **Dark Mode Support**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations and AOS scroll animations
- **SEO Friendly**: Optimized meta tags, Open Graph, and Twitter cards
- **Lazy Loading**: Optimized image loading for better performance
- **Reusable Components**: Modular component architecture
- **Admin Panel**: Frontend admin dashboard for content management

## 📋 Pages

- **Home**: Hero section, statistics, features, courses preview, testimonials, announcements
- **About**: Institute history, mission, vision, core values, timeline, director's message
- **Courses**: Course catalog with search, filters, and detailed modals
- **Faculty**: Faculty profiles with qualifications and achievements
- **Results**: Top rankers, success stories, year-wise results
- **Gallery**: Responsive masonry gallery with lightbox and category filters
- **Admission**: Admission form with validation and document requirements
- **Contact**: Contact form, Google Maps embed, social media links
- **FAQ**: Accordion-style frequently asked questions
- **Blog**: Educational articles and study tips
- **Downloads**: Brochures, syllabus, fee structure, and other resources
- **Notice**: Latest announcements and important notices
- **Online Test**: Mock test information and registration
- **Careers**: Job openings and application form
- **Admin Dashboard**: Content management interface

## 🛠️ Tech Stack

- **React.js** (v18.3.1) - UI framework
- **Vite** (v5.4.2) - Build tool
- **Tailwind CSS** (v3.4.10) - Styling
- **React Router DOM** (v6.26.1) - Routing
- **Framer Motion** (v11.5.4) - Animations
- **React Icons** (v5.3.0) - Icons
- **SwiperJS** (v11.1.14) - Sliders
- **AOS** (v2.3.4) - Scroll animations
- **React Helmet Async** (v2.0.5) - SEO meta tags

## 🎨 Color Theme

- **Primary**: #1E40AF (Blue)
- **Secondary**: #2563EB (Light Blue)
- **Accent**: #F59E0B (Amber)
- **Background**: #F8FAFC (Light Gray)
- **Dark Background**: #0F172A (Dark Slate)
- **Text**: #1E293B (Slate)

## 📁 Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Modal.jsx
│   ├── Section.jsx
│   ├── SectionHeader.jsx
│   ├── LoadingScreen.jsx
│   ├── ScrollProgress.jsx
│   ├── BackToTop.jsx
│   ├── WhatsAppFloat.jsx
│   └── CallFloat.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── Faculty.jsx
│   ├── Results.jsx
│   ├── Gallery.jsx
│   ├── Admission.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Blog.jsx
│   ├── Downloads.jsx
│   ├── Notice.jsx
│   ├── OnlineTest.jsx
│   ├── Careers.jsx
│   └── admin/
│       └── AdminDashboard.jsx
├── data/            # JSON data files
│   ├── courses.json
│   ├── faculty.json
│   ├── results.json
│   ├── testimonials.json
│   ├── gallery.json
│   ├── blog.json
│   └── faq.json
├── assets/          # Static assets
│   ├── images/
│   └── icons/
├── hooks/           # Custom React hooks
├── layouts/         # Layout components
├── utils/           # Utility functions
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Laptop: 1024px - 1279px
- Desktop: 1280px - 1535px
- Large Desktop: 1536px+

## 🔧 Configuration

### Tailwind Config

Custom theme configuration in `tailwind.config.js`:
- Custom colors
- Custom fonts (Poppins for headings, Inter for body)
- Custom animations
- Extended border radius and shadows

### PostCSS Config

PostCSS configuration in `postcss.config.js`:
- Tailwind CSS
- Autoprefixer

## 🌐 SEO

The website includes:
- Meta tags for search engines
- Open Graph tags for social media
- Twitter Card tags
- Canonical URLs
- Semantic HTML structure

## 📦 Future Backend Integration

The project is designed to be backend-ready:
- All data stored in JSON files in `src/data/`
- API service folder structure ready
- Reusable components for easy data integration
- Admin panel frontend prepared for backend connection

## 🎯 Key Features Implemented

- ✅ Sticky navbar with mobile hamburger menu
- ✅ Dark mode toggle with localStorage persistence
- ✅ Loading screen animation
- ✅ Scroll progress bar
- ✅ Back to top button
- ✅ Floating WhatsApp and call buttons
- ✅ Image lightbox for gallery
- ✅ Course search and filter
- ✅ Form validation
- ✅ Toast notifications
- ✅ Smooth scroll navigation
- ✅ Page transition animations
- ✅ Responsive tables
- ✅ Glassmorphism effects
- ✅ Gradient text and buttons
- ✅ Animated counters
- ✅ Swiper slider for testimonials

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Development

Built with ❤️ using modern web technologies and best practices.
