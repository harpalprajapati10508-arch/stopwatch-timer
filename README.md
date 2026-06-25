# ⏱️ Stopwatch Timer Web Application

A responsive Stopwatch Timer built with **HTML5, CSS3, and Vanilla JavaScript**. No frameworks, no external libraries, no CDN dependencies — pure front-end fundamentals.

![No Framework](https://img.shields.io/badge/Framework-None-informational)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)

## 🔗 Live Demo

> _Add your GitHub Pages link here after deployment, e.g._
> https://harpalprajapati10508-arch.github.io/stopwatch-timer/

## 📋 Overview

This project displays a stopwatch styled like a digital chronograph dial, with three controls:

- **Start** — begins (or resumes) the timer
- **Stop** — pauses the timer using `clearInterval()`
- **Reset** — stops the timer and returns the display to `00 : 00 : 00`

Time is shown in **HH : MM : SS** format and updates in real time.

## ✨ Features

- Accurate elapsed-time calculation using `Date.now()` timestamps (immune to `setInterval` drift)
- Resume-from-pause functionality — clicking Start after Stop continues from where it left off
- Guards against multiple intervals being created on repeated Start clicks
- Fully responsive layout (desktop + mobile)
- Modern dial-style UI with animated state indicator (Ready / Running / Paused)
- Accessible: visible keyboard focus states, `aria-live` region for the display, and respects `prefers-reduced-motion`

## 🗂️ Project Structure

```
stopwatch-timer/
├── index.html      # Markup and structure
├── style.css       # Styling, layout, responsiveness, animations
├── script.js       # Stopwatch logic (start/stop/reset/resume)
└── README.md       # Project documentation
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (custom properties, conic/radial gradients, flexbox)
- Vanilla JavaScript (DOM manipulation, `setInterval`, `clearInterval`)

## 🚀 Getting Started

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/stopwatch-timer.git
   ```
2. Open the folder in VS Code:
   ```bash
   cd stopwatch-timer
   code .
   ```
3. Open `index.html` directly in your browser, or use the **Live Server** extension in VS Code for auto-reload.

No build step, no dependencies to install.

## 🧪 Testing Checklist

- [ ] Start begins counting from `00 : 00 : 00`
- [ ] Stop pauses the timer at the current value
- [ ] Start (after Stop) resumes from the paused value, not from zero
- [ ] Reset stops the timer and returns display to `00 : 00 : 00`
- [ ] Clicking Start repeatedly does not speed up or break the timer
- [ ] Layout looks correct on desktop, tablet, and mobile widths
- [ ] Hover and focus states work on all buttons

## 🎯 Learning Outcomes

- HTML page structure
- CSS styling, custom properties, and hover/focus effects
- JavaScript DOM manipulation
- Working with timers and intervals (`setInterval` / `clearInterval`)
- Event handling
- Real-time UI updates
- Responsive, accessible front-end design

## 📦 Deliverables

- `index.html`
- `style.css`
- `script.js`
- GitHub repository
- Live demo (GitHub Pages)

## 📄 License

This project was created for internship submission purposes.
