# Manvi Constructions | Premium Luxury Real Estate Landing Page

A premium, luxury, and fully responsive static website built for **Manvi Constructions**, a construction company based in Kothagudem, Telangana, India. The company specializes in Luxury Residential Homes, Premium Villas, and Modern Commercial Complexes.

This project is crafted with high-end, dark-theme modern aesthetics featuring elegant gold accent highlights, Google typography, fluid grids, and custom high-resolution architectural assets.

---

## 💎 Features

- **Luxury Design System**: Built with a custom color palette of Deep Black, Luxury Charcoal, and Metallic Gold, using **Playfair Display** (headings) and **Montserrat** (body) Google Fonts.
- **Dynamic Projects Portfolio**: An interactive 6-card responsive project grid showcasing modern Indian custom homes, high-rise gated community apartments, and gated villa township layouts.
- **Scroll Performance Optimization**:
  - **Intersection Observer**: Native viewport observation for triggering counter statistics animations (e.g. `150+ Projects`) and scroll-reveal fade animations.
  - **Throttling via `requestAnimationFrame`**: Restricts styling operations (like the sticky header toggle and back-to-top button appearance) to match screen paint cycles, completely preventing scroll lag.
- **Consultation WhatsApp Integration**:
  - A responsive inquiry form that validates customer details, parses selected project types (e.g., *Bespoke Structural Renovation*), and constructs a pre-formatted message that redirects users directly to WhatsApp.
  - Form dropdown select field features dynamic floating label transitions to prevent text overlaps.
  - Pre-filled custom information greeting texts are added to all direct WhatsApp buttons.
- **Responsive Navigation**: Built-in hamburger navigation menu for smooth navigation on mobile, tablet, and desktop screens.
- **SEO Semantic HTML5**: Standard tags (`<header>`, `<main>`, `<section>`, `<footer>`) with proper metadata schemas, unique item IDs, and alternative image attributes.

---

## 📂 Project Structure

```
├── assets/
│   ├── hero_villa.png         # Luxury modern villa at dusk (Hero background)
│   ├── apartment_tower.png    # Modern Indian high-rise gated community apartment
│   ├── indian_home.png        # Contemporary custom Indian home facade
│   ├── community_layout.png   # Gated community township layout
│   ├── commercial.png         # Modern commercial office building
│   └── interior.png           # High-end lobby lounge design
├── index.html                 # Semantic structure & cache-buster tags
├── style.css                  # Custom resets, typography variables, grid, and animations
├── script.js                  # performance scroll-throttles, observers, and WhatsApp logic
└── README.md                  # Project documentation
```

---

## 🛠️ Local Setup

Since this is a fully static website, you do not need to install complex dependencies or frameworks.

### Method 1: Local File System
Double-click **`index.html`** in your file explorer to open the page directly in any modern web browser.

### Method 2: Local Server (Recommended)
Starting a local server handles relative file requests and browser security policies natively.

**Using Python:**
Run the following command inside the project directory:
```bash
python -m http.server 8080
```
Open **`http://localhost:8080`** in your browser.

**Using Node.js (http-server):**
```bash
npx http-server -p 8080
```
Open **`http://localhost:8080`** in your browser.

---

## ⚙️ Customization Guide

### 1. Changing Brand Colors
You can update variables inside the `:root` pseudo-class in **`style.css`**:
```css
:root {
    --color-primary-dark: #070707; /* Deep background color */
    --color-gold: #d4af37;         /* Accent gold color */
    --color-border: rgba(212, 175, 55, 0.15); /* Gold outline accents */
}
```

### 2. Updating Contact Numbers & Form Recipients
To change the WhatsApp recipient or telephone links, search and replace **`8886677777`** inside `index.html` and `script.js`.
*   **HTML Links**: Update `<a href="tel:+918886677777">` and `<a href="https://wa.me/918886677777">`
*   **JS Variable**: Update `const whatsappNumber = '918886677777';` in `script.js`.

### 3. Adding/Editing Portfolio Projects
Projects are configured inside `<div class="projects-grid">` in **`index.html`**. You can add new card blocks matching this template:
```html
<div class="project-card reveal">
    <img src="assets/your_new_image.png" class="project-img" alt="Project Description">
    <div class="project-overlay">
        <span class="project-category">Project Category</span>
        <h3 class="project-title">Project Name</h3>
        <a href="#contact" class="project-link">Inquire Project <i class="fa-solid fa-angle-right"></i></a>
    </div>
</div>
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE details for permissions.
