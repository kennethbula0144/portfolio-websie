# Kenneth Bula - Professional Portfolio

A modern, responsive, and feature-rich portfolio website for a 4th Year Computer Engineering Student. Built with React, Tailwind CSS, and Framer Motion for smooth animations and transitions.

## 🌟 Features

✨ **Modern Design**
- Clean, minimal, and professional UI
- Soft color palette with dark/light mode toggle
- Smooth scrolling and subtle animations
- Card-based layout for projects
- Fully responsive (mobile, tablet, desktop)

🎨 **Sections Included**
1. **Hero Section** - Introduction with CTA buttons
2. **About Me** - Professional summary and strengths
3. **Skills** - Categorized technical and soft skills
4. **Projects** - Showcase of featured projects
5. **Education** - Timeline of educational background
6. **Languages & Interests** - Language proficiency and personal interests
7. **Contact** - Contact information and inquiry form
8. **Footer** - Quick links and social connections

⚡ **Key Features**
- Sticky navigation bar with theme toggle
- Scroll animations powered by Framer Motion
- Dark/Light mode support with localStorage persistence
- Mobile-responsive design
- Smooth hover effects and interactions
- SEO-friendly structure
- Scroll-to-top button
- Form validation
- Custom scrollbar styling

## 🛠️ Tech Stack

**Frontend**
- React 18.2.0
- Tailwind CSS 3.3.0
- Framer Motion 10.16.4
- Lucide React Icons 0.268.0

**Build Tool**
- Vite 4.3.9

**Development Tools**
- PostCSS
- Autoprefixer
- ESLint

## 📦 Project Structure

```
kenneth-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with theme toggle
│   │   ├── Hero.jsx            # Hero section with introduction
│   │   ├── About.jsx           # About section with strengths
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Projects.jsx        # Projects display
│   │   ├── Education.jsx       # Education timeline
│   │   ├── LanguagesAndInterests.jsx  # Languages & interests
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer section
│   ├── hooks/
│   │   └── useTheme.js         # Theme toggle hook
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd kenneth-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Key Components

### Navbar Component
- Fixed navigation with smooth animations
- Dark/Light mode toggle
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Hero Section
- Eye-catching gradient background
- Call-to-action buttons
- Social links (GitHub, Email, Portfolio)
- Animated scroll indicator

### Skills Section
- 6 skill categories with icons
- Visual organization with color coding
- Hover animations for better interactivity

### Projects Section
- Card-based layout
- Project links and descriptions
- Technology stack display
- GitHub profile link

### Contact Section
- Contact information cards
- Functional contact form with validation
- Email and phone links
- Success message feedback

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: { /* ... */ },
  accent: { /* ... */ },
}
```

### Content
Update component files directly with your own content:
- `Hero.jsx` - Change name, title, and introduction
- `About.jsx` - Update professional summary
- `Skills.jsx` - Modify skill categories and items
- `Projects.jsx` - Add your own projects
- `Education.jsx` - Update education details

### Animations
Customize Framer Motion animations in `tailwind.config.js` and component files.

## 🌐 Deployment

### Option 1: Netlify
1. Build the project: `npm run build`
2. Push to GitHub repository
3. Connect to Netlify
4. Deploy from `dist/` folder

### Option 2: Render
1. Build the project: `npm run build`
2. Push to GitHub repository
3. Create new web service on Render
4. Set build command: `npm run build`
5. Set start command: `npm run preview`

### Option 3: Vercel
1. Build the project: `npm run build`
2. Push to GitHub repository
3. Import project in Vercel
4. Vercel automatically detects Vite setup

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus states for interactive elements

## 💡 Best Practices

✅ Clean code organization
✅ Reusable components
✅ Performance optimized
✅ SEO-friendly structure
✅ Progressive enhancement
✅ Cross-browser compatibility

## 📄 License

This project is open source and available for personal and commercial use.

## 📞 Contact

- **Email**: bulakenneth21@gmail.com
- **Phone**: +63 915 747 6548
- **GitHub**: https://github.com/kennethbula0144
- **Portfolio**: https://kennethbula-portfolio.netlify.app

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev) - Icon library
- [Vite](https://vitejs.dev) - Build tool

---

**Built with ♥️ using modern web technologies**
