@tailwind base;
@tailwind components;
@tailwind utilities;

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #080808;
  --bg2: #101010;
  --bg3: #161616;
  --surface: #1a1a1a;
  --border: rgba(255,255,255,0.07);
  --border2: rgba(255,255,255,0.12);
  --accent: #C8F97D;
  --accent2: #A8E44A;
  --text: #EDEDE9;
  --muted: #888884;
  --dim: #555552;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  overflow-x: hidden;
  cursor: none;
}

html, body, #root {
  width: 100%;
  min-height: 100%;
}

/* Noise overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1000;
  opacity: 0.4;
}

/* Cursor */
.cursor {
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(200,249,125,0.4);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9998;
  transition: width 0.2s, height 0.2s, border-color 0.2s;
}

/* Nav */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s, background 0.3s;
}

nav.scrolled {
  background: rgba(8,8,8,0.92);
  backdrop-filter: blur(12px);
  border-color: var(--border);
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  text-decoration: none;
}

.nav-logo span { color: var(--accent); }

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--accent); }

.nav-cta {
  color: var(--accent) !important;
  border: 1px solid rgba(200,249,125,0.3);
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  transition: background 0.2s !important;
}

.nav-cta:hover { background: rgba(200,249,125,0.08) !important; }

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 4rem 5rem;
  position: relative;
  overflow: hidden;
}

.hero-bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: clamp(8rem, 18vw, 20rem);
  font-weight: 800;
  color: rgba(255,255,255,0.018);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.05em;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero-badge::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.7); }
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin-bottom: 2rem;
}

.hero-title .line2 {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.25);
}

.hero-title .accent { color: var(--accent); }

.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
}

.hero-desc {
  max-width: 420px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.75;
}

.hero-roles {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.35rem;
}

.hero-role {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--dim);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.hero-role:hover { color: var(--muted); }

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--dim);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-hint svg { animation: arrowDown 1.5s ease infinite; }

@keyframes arrowDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

/* Marquee */
.marquee-bar {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 0.9rem 0;
  overflow: hidden;
  white-space: nowrap;
  background: var(--bg2);
}

.marquee-track {
  display: inline-flex;
  animation: marquee 25s linear infinite;
}

.marquee-item {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0 2.5rem;
}

.marquee-item span { color: var(--accent); margin-right: 2.5rem; }

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Sections */
section { padding: 7rem 4rem; }

.section-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--accent);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 3.5rem;
}

.section-label::after {
  content: '';
  flex: 1;
  max-width: 60px;
  height: 1px;
  background: rgba(200,249,125,0.3);
}

.section-label .num { color: var(--dim); margin-right: 0.25rem; }

/* About */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
}

.about-heading {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 2rem;
}

.about-heading em {
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.3);
}

.about-text {
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

.about-goal {
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  border-left: 2px solid var(--accent);
  background: rgba(200,249,125,0.04);
  border-radius: 0 8px 8px 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.8;
  font-style: italic;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.stat-cell {
  padding: 1.75rem;
  background: var(--bg3);
  transition: background 0.2s;
}

.stat-cell:hover { background: var(--surface); }

.stat-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.4rem;
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--dim);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.edu-card {
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.75rem;
  background: var(--bg3);
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  transition: background 0.2s, border-color 0.2s;
}

.edu-card:hover { background: var(--surface); border-color: var(--border2); }

.edu-icon {
  width: 44px;
  height: 44px;
  background: rgba(200,249,125,0.08);
  border: 1px solid rgba(200,249,125,0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.edu-school {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.edu-degree { font-size: 0.85rem; color: var(--muted); margin-bottom: 0.6rem; }

.edu-year {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  background: rgba(200,249,125,0.08);
  border: 1px solid rgba(200,249,125,0.15);
  padding: 0.2rem 0.6rem;
  border-radius: 2rem;
  display: inline-block;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.skill-card {
  background: var(--bg3);
  padding: 2.25rem 1.75rem;
  transition: background 0.25s;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.skill-card:hover { background: var(--surface); }
.skill-card:hover::before { transform: scaleX(1); }

.skill-icon {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: block;
  filter: grayscale(1) brightness(1.5);
  transition: filter 0.2s;
}

.skill-card:hover .skill-icon { filter: none; }

.skill-name {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.tag {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--dim);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 0.25rem 0.6rem;
  border-radius: 2rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: color 0.2s, border-color 0.2s;
}

.skill-card:hover .tag { color: var(--muted); border-color: var(--border2); }

/* Projects */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
}

.project-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem 2.5rem;
  background: var(--bg3);
  transition: background 0.25s, padding-left 0.3s;
  text-decoration: none;
  color: inherit;
}

.project-row:hover { background: var(--surface); padding-left: 3rem; }

.project-num {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--dim);
  letter-spacing: 0.1em;
  min-width: 30px;
}

.project-name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
}

.project-desc { font-size: 0.85rem; color: var(--dim); }

.project-meta {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.project-tag {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--accent);
  background: rgba(200,249,125,0.08);
  border: 1px solid rgba(200,249,125,0.15);
  padding: 0.3rem 0.7rem;
  border-radius: 2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.coming-soon {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--dim);
  border: 1px solid var(--border);
  padding: 0.3rem 0.7rem;
  border-radius: 2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.more-soon {
  margin-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--dim);
  letter-spacing: 0.06em;
}

/* Contact */
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4.5vw, 4rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
}

.contact-heading .ghost {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.2);
}

.contact-sub {
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 380px;
  font-size: 0.95rem;
}

.contact-links { display: flex; flex-direction: column; gap: 1rem; }

.contact-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg3);
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.25s, background 0.25s, transform 0.2s;
}

.contact-link:hover { border-color: var(--border2); background: var(--surface); transform: translateX(4px); }

.contact-link-label { display: flex; align-items: center; gap: 0.85rem; }

.contact-link-icon {
  width: 36px;
  height: 36px;
  background: rgba(200,249,125,0.08);
  border: 1px solid rgba(200,249,125,0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.contact-link-text {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
}

.contact-link-sub {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--dim);
  margin-top: 0.1rem;
  letter-spacing: 0.04em;
}

.contact-link-arrow {
  color: var(--dim);
  font-size: 1rem;
  transition: color 0.2s, transform 0.2s;
}

.contact-link:hover .contact-link-arrow { color: var(--accent); transform: translate(3px,-3px); }

/* CTA */
.big-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--accent);
  color: #080808;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: background 0.2s, transform 0.2s;
}

.big-cta:hover { background: var(--accent2); transform: translateY(-2px); }

/* Footer */
footer {
  border-top: 1px solid var(--border);
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer p {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--dim);
  letter-spacing: 0.06em;
}

footer p span { color: var(--accent); }

/* Fade-up animations */
.fade-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.fade-up.d1 { transition-delay: 0.15s; }
.fade-up.d2 { transition-delay: 0.3s; }

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 900px) {
  nav { padding: 1.25rem 2rem; }
  .nav-links { display: none; }
  .hero { padding: 0 2rem 4rem; }
  .hero-bottom { flex-direction: column; align-items: flex-start; }
  section { padding: 5rem 2rem; }
  .about-grid, .contact-wrapper { grid-template-columns: 1fr; gap: 3rem; }
  .skills-grid { grid-template-columns: 1fr 1fr; }
  .project-row { grid-template-columns: auto 1fr; }
  .project-meta { display: none; }
  footer { padding: 2rem; flex-direction: column; gap: 1rem; text-align: center; }
}

