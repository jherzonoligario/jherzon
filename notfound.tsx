import { useEffect, useRef } from 'react';

const marqueeItems = [
  'HTML & CSS', 'JavaScript', 'Web Development', 'Technical Writing',
  'Microsoft Excel', 'Data Analysis', 'Documentation', 'VS Code',
  'HTML & CSS', 'JavaScript', 'Web Development', 'Technical Writing',
  'Microsoft Excel', 'Data Analysis', 'Documentation', 'VS Code',
];

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const nav = navRef.current;
    if (!cursor || !ring) return;

    let mx = -100, my = -100, rx = -100, ry = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const animCursor = () => {
      cursor.style.transform = `translate(${mx - 5}px,${my - 5}px)`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 18}px,${ry - 18}px)`;
      animId = requestAnimationFrame(animCursor);
    };

    animCursor();
    document.addEventListener('mousemove', onMouseMove);

    const onEnter = () => { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = 'rgba(200,249,125,0.7)'; };
    const onLeave = () => { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(200,249,125,0.4)'; };

    const interactives = document.querySelectorAll('a, button');
    interactives.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });

    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);

    // Fade-up scroll animation
    const elements = document.querySelectorAll('.fade-up');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    elements.forEach(el => obs.observe(el));

    // Safety fallback: reveal everything after 600ms no matter what
    const fallback = setTimeout(() => {
      document.querySelectorAll('.fade-up:not(.visible)').forEach(el => el.classList.add('visible'));
    }, 600);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      interactives.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave); });
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>

      {/* Nav */}
      <nav ref={navRef} id="nav">
        <a href="#" className="nav-logo">J<span>.</span>Oligario</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-bg-text">JO</div>
        <div className="hero-badge">Open to opportunities</div>
        <h1 className="hero-title">
          <div className="line1">Jherzon</div>
          <div className="line2">Oligario<span className="accent">.</span></div>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">A motivated IT student from Pampanga, Philippines — building websites, organizing data, and writing clear documentation one project at a time.</p>
          <div className="hero-roles">
            <span className="hero-role">Web Developer</span>
            <span className="hero-role">Technical Writer</span>
            <span className="hero-role">Database Engineer</span>
            <span className="hero-role">Data Analyst</span>
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M6 1v12M1 8l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-bar">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item"><span>★</span> {item}</span>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about">
        <div className="section-label"><span className="num">01 —</span> About Me</div>
        <div className="about-grid">
          <div className="fade-up">
            <h2 className="about-heading">Curious student. <em>Future</em> developer.</h2>
            <p className="about-text">I'm Jherzon Oligario, an Information Technology student at Guagua National Colleges Inc., based in Bancal, Guagua, Pampanga. I started learning web development in 2024 and have been passionate about building things ever since.</p>
            <p className="about-text">I enjoy creating simple websites, organizing data, and writing documentation that makes complex things easy to understand. Though I haven't had formal employment yet, I've built real skills through school projects — developing responsibility, teamwork, and the drive to deliver results.</p>
            <div className="about-goal">"I am currently focused on improving my skills in web development and aiming to become a professional developer in the future. I am passionate about learning and building projects that help me grow and gain real-world experience."</div>
            <a href="#contact" className="big-cta" style={{ marginTop: '2rem', display: 'inline-flex' }}>Get in Touch →</a>
          </div>
          <div className="fade-up d1">
            <div className="about-stats">
              <div className="stat-cell">
                <div className="stat-num">2024</div>
                <div className="stat-label">Started coding</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">2026</div>
                <div className="stat-label">Expected grad</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">B.S.</div>
                <div className="stat-label">Info Technology</div>
              </div>
              <div className="stat-cell">
                <div className="stat-num">PH</div>
                <div className="stat-label">Pampanga, Philippines</div>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <div className="edu-school">Guagua National Colleges Inc.</div>
                <div className="edu-degree">Bachelor of Science in Information Technology</div>
                <span className="edu-year">Expected Graduation: 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ paddingTop: 0 }}>
        <div className="section-label"><span className="num">02 —</span> Skills &amp; Tools</div>
        <div className="skills-grid fade-up">
          <div className="skill-card">
            <span className="skill-icon">🌐</span>
            <div className="skill-name">Web Development</div>
            <div className="skill-tags">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">VS Code</span>
              <span className="tag">DevTools</span>
            </div>
          </div>
          <div className="skill-card">
            <span className="skill-icon">✍️</span>
            <div className="skill-name">Technical Writing</div>
            <div className="skill-tags">
              <span className="tag">Project Reports</span>
              <span className="tag">System Docs</span>
              <span className="tag">Feature Outlines</span>
              <span className="tag">Website Briefs</span>
            </div>
          </div>
          <div className="skill-card">
            <span className="skill-icon">🗄️</span>
            <div className="skill-name">Database</div>
            <div className="skill-tags">
              <span className="tag">Fundamentals</span>
              <span className="tag">Data Structure</span>
              <span className="tag">Actively Learning</span>
            </div>
          </div>
          <div className="skill-card">
            <span className="skill-icon">📊</span>
            <div className="skill-name">Data Analysis</div>
            <div className="skill-tags">
              <span className="tag">MS Excel</span>
              <span className="tag">Tables</span>
              <span className="tag">Formulas</span>
              <span className="tag">Charts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ paddingTop: 0 }}>
        <div className="section-label"><span className="num">03 —</span> Projects</div>
        <div className="projects-list fade-up">
          <div className="project-row">
            <span className="project-num">01</span>
            <div className="project-info">
              <div className="project-name">Personal Portfolio Website</div>
              <div className="project-desc">A website that showcases my profile, skills, and projects — designed and built with HTML, CSS, and JavaScript.</div>
            </div>
            <div className="project-meta">
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">JavaScript</span>
              <span className="coming-soon">Upload coming soon</span>
            </div>
          </div>
        </div>
        <p className="more-soon">More projects in progress — stay tuned. ✦</p>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="section-label"><span className="num">04 —</span> Get in Touch</div>
        <div className="contact-wrapper">
          <div className="fade-up">
            <h2 className="contact-heading">Let's connect &amp; <span className="ghost">grow</span> together.</h2>
            <p className="contact-sub">I'm always open to learning opportunities, collaborations, and new projects. Whether you want to work together or just say hi — feel free to reach out anytime!</p>
            <a href="mailto:jherzonoligario3@gmail.com" className="big-cta">Send an Email →</a>
          </div>
          <div className="contact-links fade-up d1">
            <a href="mailto:jherzonoligario3@gmail.com" className="contact-link">
              <div className="contact-link-label">
                <div className="contact-link-icon">📧</div>
                <div>
                  <div className="contact-link-text">Email</div>
                  <div className="contact-link-sub">jherzonoligario3@gmail.com</div>
                </div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://github.com/jherzonoligario" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-label">
                <div className="contact-link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#C8F97D">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.04.14 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.86.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-link-text">GitHub</div>
                  <div className="contact-link-sub">github.com/jherzonoligario</div>
                </div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://www.facebook.com/jherzonoligario" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-label">
                <div className="contact-link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#C8F97D">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-link-text">Facebook</div>
                  <div className="contact-link-sub">facebook.com/jherzonoligario</div>
                </div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 <span>Jherzon Oligario</span>. All rights reserved.</p>
        <p>Bancal, Guagua, Pampanga <span>·</span> Philippines</p>
      </footer>
    </>
  );
};

export default Index;
