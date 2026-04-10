# Kenneth Bula Portfolio - Installation & Setup Guide

## Quick Start

### Step 1: Navigate to Project Directory
```bash
cd c:\Users\LENOVO\OneDrive\Desktop\protfoliowebsite
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 18.2.0
- Tailwind CSS 3.3.0
- Framer Motion 10.16.4
- Lucide React Icons
- Vite 4.3.9
- And other development tools

### Step 3: Start Development Server
```bash
npm run dev
```

The development server will start at `http://localhost:3000` and automatically open in your browser.

## Available Scripts

### Development
```bash
npm run dev
```
- Starts the development server with hot module replacement (HMR)
- Files are automatically reloaded when you make changes

### Build for Production
```bash
npm run build
```
- Creates an optimized production build
- Output files are in the `dist/` folder
- Ready for deployment to Netlify, Vercel, or Render

### Preview Production Build
```bash
npm run preview
```
- Locally previews the production build
- Useful for testing before deployment

### Lint Code
```bash
npm run lint
```
- Checks for code style issues
- Helps maintain code quality

## Project Structure

```
protfoliowebsite/
├── src/
│   ├── components/              # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── LanguagesAndInterests.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/                   # Custom React hooks
│   │   └── useTheme.js          # Theme management
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── jsconfig.json                # JavaScript configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # Documentation
```

## Customization Guide

### 1. Update Personal Information

**src/components/Hero.jsx** - Change your name and title:
```javascript
<h1>BULA KENNETH COLIMA</h1>  // Change this
<p>4th Year Computer Engineering Student</p>  // And this
```

**src/components/Contact.jsx** - Update contact details:
```javascript
email: 'bulakenneth21@gmail.com',  // Your email
phone: '+639157476548',              // Your phone
```

### 2. Modify Colors

**tailwind.config.js** - Customize the color palette:
```javascript
colors: {
  primary: {
    // Change these color values
    500: '#a78bfa',  // Primary color
    600: '#9370db',  // Primary darker
  }
}
```

### 3. Update Skills

**src/components/Skills.jsx** - Edit skill categories:
```javascript
{
  category: 'Your Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  // ...
}
```

### 4. Add/Update Projects

**src/components/Projects.jsx** - Modify project data:
```javascript
{
  title: 'Project Name',
  description: 'Project description',
  tech: ['React', 'Tailwind'],
  link: 'https://project-link.com',
  // ...
}
```

## Deployment Options

### Option 1: Netlify (Recommended)
1. Build: `npm run build`
2. Connect GitHub to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Option 2: Render
1. Build: `npm run build`
2. Push to GitHub
3. Create web service on Render
4. Connect to GitHub repository
5. Set build command: `npm run build`
6. Deploy!

### Option 3: Vercel
1. Push to GitHub
2. Import project in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy automatically!

## Troubleshooting

### Port Already in Use (When Running `npm run dev`)
```bash
# Kill the process or use a different port:
npm run dev -- --port 3001
```

### Dependencies Installation Issues
```bash
# Clear npm cache and reinstall:
npm cache clean --force
npm install
```

### Build Errors
```bash
# Clean and rebuild:
rm -rf node_modules dist
npm install
npm run build
```

### Dark Mode Not Working
- Check if `tailwind.config.js` has `darkMode: 'class'`
- Verify browser has localStorage enabled
- Clear browser cache and try again

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Images**: Optimize images before adding to projects
2. **Code Splitting**: Components are already optimized
3. **Lazy Loading**: Handled by Framer Motion
4. **CSS**: Tailwind purges unused styles in production

## SEO Optimization

- Semantic HTML in components
- Meta tags in `index.html`
- Open Graph tags for social sharing
- Structured data in components

## Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Vite Guide](https://vitejs.dev/guide/)

## Support & Contact

- **Issues?** Check the README.md for more details
- **Questions?** Refer to component comments
- **Contact Kenneth**: bulakenneth21@gmail.com

---

**Happy coding! 🚀**
