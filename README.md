# 💻 Afshin Pathan — Developer Portfolio (VS Code Style)

[![GitHub license](https://img.shields.io/github/license/afsheen-pathan/DevOps-Portfolio?style=flat-square)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/afsheen-pathan/DevOps-Portfolio?style=flat-square)](https://github.com/afsheen-pathan/DevOps-Portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/afsheen-pathan/DevOps-Portfolio?style=flat-square)](https://github.com/afsheen-pathan/DevOps-Portfolio/network)
[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen?style=flat-square)](https://afsheen-pathan.github.io/DevOps-Portfolio/)

A highly interactive, modern, and fully responsive developer portfolio styled after the **Visual Studio Code (VS Code)** code editor interface. It showcases projects, skills, education, and contact details through an immersive editor theme complete with an activity bar, a file explorer sidebar, active editor tabs, breadcrumb navigation, syntax-highlighted code blocks, and a status bar.

---

## ✨ Features

- **📂 Realistic VS Code UX**: Features a complete editor layout, including an Activity Bar, collapsible File Explorer, Status Bar, Breadcrumb navigation, and line-numbered code sections.
- **📑 Interactive Tab System**: Seamlessly switch between files representing different sections (`about.js`, `skills.json`, `index.js`, `education.log`, `misc.config`, and `contact.js`) by clicking tabs or sidebar items.
- **👁️ Scroll-Spy Syncing**: Active tabs and sidebar file selections automatically update and highlight in real-time as you scroll through the portfolio.
- **📝 Project README Modals**: Clicking on any project card opens a simulated, VS Code-themed `README.md` modal detailing features, tech stack, and repository links.
- **📱 Fully Responsive Design**: Responsive layout breaks down gracefully for tablets and mobile devices. The sidebar collapses into a sliding drawer on mobile, and the activity bar hides on small viewports to maximize readability.
- **⚡ Ultra Fast & Lightweight**: Zero external frameworks, heavy bundlers, or dependencies. Powered by pure semantic HTML, vanilla CSS, and clean JavaScript, loading and rendering instantaneously.

---

## 🛠️ Tech Stack & Integration

- **Markup & Layout**: Semantic HTML5, CSS Grid, and CSS Flexbox for an accurate IDE grid layout.
- **Styles & Themes**: Vanilla CSS3 using custom CSS variables (for easy color theme customizability) and smooth transitions.
- **Interactions**: Vanilla JS (ES6) for sidebar drawers, tab switching, and modal controls.
- **APIs Used**: `IntersectionObserver` API for highly efficient scroll-spy synchronization.
- **Typography**: Google Fonts (JetBrains Mono for code blocks/sidebar, Inter for standard UI text).

---

## 📁 Project Structure

```text
afshin-pathan-portfolio/
│
├── index.html          # Core layout, HTML structure, and content sections
├── README.md           # This documentation file
└── assets/
    ├── style.css       # Complete layout, color tokens, themes, and animations
    └── script.js       # App controller: Sidebar/tabs navigation, scroll-spy, and README modal data
```

---

## 🚀 Running Locally

Since this portfolio is built using vanilla web technologies, there are no build steps or installations required!

### Option 1: Double-Click (Simple)
Simply open `index.html` directly in any web browser.

### Option 2: Live Server (Recommended)
To avoid potential local file protocol (`file://`) restrictions with certain browser extensions, run a simple local web server:

**Using Python:**
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

**Using Node.js (via `http-server`):**
```bash
npx http-server -p 8080
```

---

## ⚙️ Customization Guide

### 🎨 1. Changing Theme Colors
All editor colors, backgrounds, and syntax highlighting tones are controlled via CSS variables. Open `assets/style.css` and adjust the variables under the `:root` block:

```css
:root {
  --bg-dark: #1e1e1e;       /* Editor background */
  --sidebar-bg: #252526;    /* Sidebar background */
  --activity-bg: #333333;   /* Activity bar background */
  --accent-color: #007acc;  /* VS Code blue accent */
  --text-color: #d4d4d4;    /* Standard text color */
  /* ... edit other variables to matching your desired editor theme ... */
}
```

### 💻 2. Modifying Projects
All project data shown inside the README modals is managed dynamically in `assets/script.js`. Open the file and modify the `projectsData` object:

```javascript
const projectsData = {
  your_project_id: {
    name: "Project Name",
    tagline: "Brief catchphrase",
    desc: "A detailed description of the project.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    tech: ["React", "Node.js", "MongoDB"],
    repo: "https://github.com/afsheen-pathan/your-repo-link"
  },
  // ... add or edit other projects here
}
```
*Note: Make sure the `data-project` attribute in `index.html`'s cards matches the keys in the `projectsData` object.*

### 📞 3. Updating Personal & Contact Info
- **About/Profile Info**: Edit the `index.html` file sections (`about.js`, `skills.json`, `education.log`, `misc.config`).
- **Contact Links**: Search for `contactMe()` in `assets/script.js` and edit the contact nodes in `index.html` to reflect your email, phone number, LinkedIn, and GitHub profiles.

---

## 🌐 Deployment

### GitHub Pages
1. Push the repository to GitHub.
2. Navigate to your repository **Settings** > **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set the source branch to `main` (or the folder where `index.html` is located) and click **Save**.

### Netlify / Vercel
Simply drag and drop the folder directly into the Netlify dashboard, or connect your GitHub repository for automatic continuous deployments.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
