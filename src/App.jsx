import { useState } from 'react';

const skills = [
  {
    icon: 'PY',
    title: 'Python & Django Development',
    description: "Building full-stack web applications with Python and Django, including user authentication and session management using Django's built-in auth system. Certified in Python (Django) from CTTC, Bhubaneswar.",
    tags: ['Python', 'Django', 'SQLite', 'Authentication', 'Sessions'],
    wide: true,
  },
  {
    icon: 'SQL',
    title: 'Databases & SQL',
    description: 'Working with relational databases and SQL, backed by DBMS coursework.',
    tags: ['SQL', 'MySQL', 'SQLite', 'DBMS'],
  },
  {
    icon: 'JV',
    title: 'Programming Languages',
    description: 'Strong programming foundation in C, C++ and Java, with Java Framework (Spring) certification from CTTC, Bhubaneswar.',
    tags: ['Java', 'C', 'C++', 'Spring'],
  },
  {
    icon: 'JS',
    title: 'Front-End Web Development',
    description: 'Building responsive, interactive interfaces with HTML5, CSS3 and JavaScript, using React.js, Bootstrap and Tailwind CSS. Layouts built with CSS Flexbox and Grid for consistent display across devices.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
    wide: true,
  },
  {
    icon: 'GH',
    title: 'Tools & Platforms',
    description: 'Day-to-day development tools for coding, testing and versioning.',
    tags: ['Git/GitHub', 'VS Code', 'MySQL', 'SQLite', 'Postman'],
  },
  {
    icon: 'CS',
    title: 'Core Concepts',
    description: 'Computer science fundamentals from my B.Tech coursework.',
    tags: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
  },
  {
    icon: 'SS',
    title: 'Soft Skills',
    description: 'Skills that help me work well in a team and keep learning.',
    tags: ['Problem-Solving', 'Team Collaboration', 'Communication', 'Adaptability'],
  },
];

const projects = [
  {
    type: 'FULL-STACK WEB / DJANGO',
    title: 'Social Media Web Portal',
    description: "A full-stack social media web application where users can register, create profiles, and interact through posts and likes. Includes user authentication and session management (sign-up, login, logout, password handling) using Django's built-in auth system.",
    tags: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    type: 'FRONT-END / WEB',
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website to showcase my projects, skills, and resume. Built with React.js and Tailwind CSS, with a responsive layout, interactive terminal, and contact form.',
    tags: ['React.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
];

const background = [
  ['JUL 2022 - OCT 2022', 'Full Stack Developer (MERN) Intern', 'Web Bocket Software Pvt. Ltd.'],
  ['SEP 2023 - AUG 2026', 'B.Tech in Computer Science & Engineering', 'Einstein Academy of Technology & Management, Bhubaneswar, Odisha.\nCGPA: 7.46'],
  ['2023', 'Software Training, CTTC', 'Central Tool Room & Training Center, Bhubaneswar.\nACCSA, Python, IoT, Java Framework, AI'],
  ['2022', 'Diploma in Mechanical Engineering', 'Bhubananda Orissa School of Engineering, Cuttack.\nPercentage: 74.58%'],
  ['2018', '12th, Science (PCM, IT)', 'Dhenkanal Jr College, Dhenkanal.'],
  ['2016', 'High School, BSE Odisha', 'Sarangadhar High School, Kamakhyanagar, Dhenkanal.\nPercentage: 84.16%'],
];

const certifications = [
  'Python (Django) - CTTC, Bhubaneswar, 2022',
  'Advance Certification Course in Software Application - CTTC, Bhubaneswar, 2023',
  'IOT Developer - CTTC, Bhubaneswar, 2023',
  'Java Framework (Spring) - CTTC, Bhubaneswar, 2023',
];

const commandOutput = {
  skills: [
    'Languages: Python, Java, C, C++, JavaScript, SQL',
    'Front-End: HTML5, CSS3, React.js, Bootstrap, Tailwind CSS',
    'Tools: Git/GitHub, VS Code, MySQL, SQLite, Postman',
  ],
  projects: [
    '1. Social Media Web Portal (Django)',
    '2. Personal Portfolio Website (HTML/CSS/JS)',
  ],
  education: [
    'B.Tech CSE, Einstein Academy of Technology & Management (CGPA 7.46)',
    'Diploma in Mechanical Engineering, 2022 (74.58%)',
    '12th Science, 2018 | BSE Odisha, 2016 (84.16%)',
  ],
};

function SectionHeading({ eyebrow, children }) {
  return (
    <div className="section-head">
      <div className="section-eyebrow">// {eyebrow}</div>
      <h2 className="section-title">{children}</h2>
    </div>
  );
}

function Tags({ items }) {
  return (
    <div className="tech-pill-container">
      {items.map((item) => <span className="tech-pill transition-colors duration-200 hover:border-cyan-300/40" key={item}>{item}</span>)}
    </div>
  );
}

function Terminal() {
  const [history, setHistory] = useState([
    {
      command: 'whoami',
      lines: [
        'Susanta Kumar Pal | Software Developer (Fresher)',
        'B.Tech CSE Graduate | Python, Java, C, SQL, JavaScript, React.js',
      ],
    },
    {
      command: 'cat availability.json',
      lines: [
        '{',
        '  "status": "Open to Work",',
        '  "role": "Entry-Level Software Developer",',
        '  "location": "Bhubaneswar, Odisha"',
        '}',
      ],
    },
  ]);

  function runCommand(command) {
    setHistory((current) => command === 'clear' ? [] : [...current, { command, lines: commandOutput[command] }]);
  }

  return (
    <div className="terminal-window hero-terminal" aria-label="Interactive portfolio terminal">
      <div className="terminal-header">
        <span className="terminal-dot dot-red" />
        <span className="terminal-dot dot-yellow" />
        <span className="terminal-dot dot-green" />
        <span className="terminal-title">susanta@portfolio: ~</span>
      </div>
      <div className="terminal-body" aria-live="polite">
        {history.map((entry, index) => (
          <div className="terminal-result" key={`${entry.command}-${index}`}>
            <div className="term-line"><span className="term-prompt">susanta@portfolio:~$</span><span className="term-cmd">{entry.command}</span></div>
            <div className="term-output">{entry.lines.map((line) => <div key={line}>{line}</div>)}</div>
          </div>
        ))}
      </div>
      <div className="quick-commands" aria-label="Terminal commands">
        {['skills', 'projects', 'education', 'clear'].map((command) => (
          <button className="cmd-tag transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cyan-300" key={command} onClick={() => runCommand(command)} type="button">{command}</button>
        ))}
      </div>
    </div>
  );
}

function App() {
  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${formData.get('name')}`);
    const body = encodeURIComponent(`From: ${formData.get('name')} (${formData.get('email')})\n\n${formData.get('message')}`);
    window.location.href = `mailto:susantapal687@gmail.com?subject=${subject}&body=${body}`;
  }

  function updateSpotlight(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - bounds.top}px`);
  }

  return (
    <>
      <div className="glow-orb" aria-hidden="true" />
      <div className="site-container">
        <header>
          <nav aria-label="Main navigation">
            <a href="#about" className="logo"><span>&lt;/&gt;</span> Susanta.Kumar<span className="logo-badge">Fresher</span></a>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#capabilities">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#background">Background</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="hero" id="about">
            <div className="hero-copy">
              <div className="badge-status"><span className="pulse" /> Open to Entry-Level Developer Roles</div>
              <div className="section-eyebrow">// Susanta Kumar Pal</div>
              <h1 className="hero-title">Building functional web applications with <span className="gradient-text">Python, Django &amp; React.</span></h1>
              <p className="hero-sub">Recent B.Tech Computer Science &amp; Engineering graduate with a strong foundation in Python, Java, C, SQL and front-end web development. Seeking an entry-level Software Developer role to contribute to real-world products and grow as an engineer.</p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">View Projects <span aria-hidden="true">&rarr;</span></a>
                <a href="/susantakumarpal_cv1.pdf" className="btn btn-outline focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" target="_blank" rel="noreferrer">Download Resume</a>
                <a href="#contact" className="btn btn-outline focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Contact Me</a>
              </div>
              <div className="meta-line">Bhubaneswar, Odisha, India</div>
            </div>
            <Terminal />
          </section>

          <div className="metrics-bar" aria-label="Portfolio metrics">
            {[
              ['7.46', 'B.Tech CGPA'],
              ['6', 'Programming Languages'],
              ['2', 'Projects Built'],
              ['4', 'Certifications'],
            ].map(([value, label]) => <div className="metric-item" key={label}><div className="metric-val tabular-nums">{value}</div><div className="metric-label">{label}</div></div>)}
          </div>

          <section id="capabilities">
            <SectionHeading eyebrow="Skills">Technical Skills</SectionHeading>
            <div className="bento-grid">
              {skills.map((skill) => (
                <article className={`bento-card${skill.wide ? ' span-2' : ''}`} key={skill.title} onMouseMove={updateSpotlight}>
                  <div className="card-spotlight" />
                  <div className="bento-icon">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <Tags items={skill.tags} />
                </article>
              ))}
            </div>
          </section>

          <section id="projects">
            <SectionHeading eyebrow="Projects">Applications I've Built</SectionHeading>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div>
                    <div className="proj-type">{project.type}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Tags items={project.tags} />
                  </div>
                  <div className="project-actions"><a href="https://github.com/susantakumarpal" target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">&rarr;</span></a></div>
                </article>
              ))}
            </div>
          </section>

          <section id="background">
            <SectionHeading eyebrow="Experience & Education">Background</SectionHeading>
            <div className="projects-grid">
              {background.map(([date, title, details]) => (
                <article className="project-card background-card" key={title}>
                  <div className="proj-type">{date}</div>
                  <h3>{title}</h3>
                  <p>{details}</p>
                </article>
              ))}
              <article className="project-card certifications-card">
                <div className="proj-type">CERTIFICATIONS</div>
                <h3>Courses &amp; Certificates</h3>
                <Tags items={certifications} />
              </article>
            </div>
          </section>

          <section id="contact">
            <div className="contact-wrapper">
              <div className="contact-copy">
                <div className="section-eyebrow">// Let's Talk</div>
                <h2>Let’s work together.</h2>
                <p>I am looking for an entry-level Software Developer role where I can contribute to real-world products and keep growing as an engineer.</p>
                <div className="contact-list">
                  <div>Email: <a href="mailto:susantapal687@gmail.com">susantapal687@gmail.com</a></div>
                  <div>Phone: <a href="tel:+917381886687">+91 73818 86687</a></div>
                  <div>GitHub: <a href="https://github.com/susantakumarpal" target="_blank" rel="noreferrer">github.com/susantakumarpal</a></div>
                  <div>LinkedIn: <a href="https://linkedin.com/in/susanta-kumar-pal-1668731b3/" target="_blank" rel="noreferrer">linkedin.com/in/susanta-kumar-pal-1668731b3</a></div>
                  <div>Location: Bhubaneswar, Odisha</div>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label className="sr-only" htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" type="text" className="input-field" placeholder="Your Name" autoComplete="name" required />
                <label className="sr-only" htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" className="input-field" placeholder="Your Work Email" autoComplete="email" required />
                <label className="sr-only" htmlFor="contact-message">Your message</label>
                <textarea id="contact-message" name="message" rows="4" className="input-field" placeholder="Your message..." required />
                <button type="submit" className="btn btn-primary focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">Send Message <span aria-hidden="true">&rarr;</span></button>
              </form>
            </div>
          </section>
        </main>

        <footer>&lt;/&gt; &copy; 2026 Susanta Kumar Pal &middot; Bhubaneswar, Odisha</footer>
      </div>
    </>
  );
}

export default App;