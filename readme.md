# Horizon Health Africa 🏥

A professional, modern landing page for Horizon Health Africa - bridging global standards with local care.

## 🌟 Live Demo

Visit the live site: [Horizon Health Africa](https://j-massoda.github.io/horizon-health/)

## 📋 About

Horizon Health Africa is a healthcare provider dedicated to delivering world-class medical services that combine international standards with compassionate, locally-relevant care. Our landing page showcases our vision, values, services, and partnerships.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Smooth Animations**: Professional scroll-triggered animations using Intersection Observer API
- **Modern UI/UX**: Clean, professional design with intuitive navigation
- **Fast Performance**: Optimized for quick load times and smooth interactions
- **Accessible**: Built with semantic HTML and ARIA labels for accessibility
- **SEO Friendly**: Proper meta tags and semantic structure for better search engine visibility

## 🎨 Design Highlights

### Sections

1. **Hero Section**: Eye-catching landing with call-to-action
2. **Our Vision**: Clear statement of organizational goals
3. **Our Mission & Values**: Four core values with engaging card designs
   - Consultation (High Clinical Standards)
   - Partnership (Global Collaboration)
   - Integrity (Ethical Practices)
   - Compassion (Patient-Centered Care)
4. **Our Services**: Comprehensive healthcare services
   - Consultation Services
   - Surgical Services
   - General Surgery
   - Gynecology & Obstetrics
5. **Our Partners**: Showcase of global partnerships
6. **Footer**: Contact information and social media links

### Animations

- Fade-in effects on scroll
- Slide-up animations for cards
- Staggered animations for multiple elements
- Smooth hover effects on buttons and cards
- Icon rotation on hover
- Navbar background change on scroll

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks, pure JavaScript for optimal performance
- **GitHub Pages**: Free hosting and automatic deployment
- **GitHub Actions**: CI/CD for automated deployments

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/J-Massoda/horizon-health.git
   cd horizon-health
   ```

2. **Open the website**
   
   Simply open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or use a local development server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **View the site**
   
   Open your browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
horizon-health/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet with all styling and animations
├── script.js               # JavaScript for interactivity
├── README.md               # Project documentation
├── .gitignore             # Git ignore file
├── assets/                # Assets folder
│   ├── images/            # Image files
│   └── icons/             # Icon files
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment workflow
```

## 🌐 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

Every push to the `main` branch triggers an automatic deployment:

1. GitHub Actions workflow runs
2. Site is built and deployed to GitHub Pages
3. Changes are live within minutes

### Manual Deployment

You can also trigger a manual deployment:

1. Go to the "Actions" tab in the GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### GitHub Pages Setup

The site is configured to deploy from GitHub Actions. To set up GitHub Pages for your fork:

1. Go to repository Settings
2. Navigate to Pages section
3. Under "Source", select "GitHub Actions"
4. Save the settings

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-blue: #1e5a96;
    --light-blue: #5b9bd5;
    --orange-accent: #e67e50;
    --green-accent: #6b9080;
    /* ... */
}
```

### Content

Modify the content directly in `index.html`:

- Update section headings
- Change service descriptions
- Add/remove value cards
- Customize footer information

### Images

Add your images to the `assets/images/` folder and update the image references in the HTML.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: ≥ 1440px

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2024 Horizon Health Africa. All rights reserved.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

For more information about Horizon Health Africa, please visit our website or contact us through the social media links in the footer.

---

Built with ❤️ for Horizon Health Africa
