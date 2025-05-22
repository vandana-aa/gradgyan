import logo from './assets/logo.png';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <img src={logo} alt="GradGyan Logo" className="logo" />
        <h1>GradGyan</h1>
        <p>SOPs, Resumes & Interviews — Simplified.</p>
        <a className="btn" href="#contact">Get Started</a>
      </header>

      <section>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem' }}>
          We help students ace MS admissions, internships, and placements — with standout SOPs,
          professional resumes, and real-world mock interviews.
        </p>
      </section>

      <section className="section-alt">
        <h2>Our Services</h2>
        <ul>
          <li>✍️ <strong>SOP Writing & Editing</strong><br />
            Craft a compelling story for your Master's application. We help you brainstorm, write, and perfect your Statement of Purpose — no templates, no fluff.
          </li>
          <li>📄 <strong>Resume Building & Review</strong><br />
            Get a professional, ATS-friendly resume tailored to placements, internships, or grad school applications. From scratch or revamp — we've got you.
          </li>
          <li>🎤 <strong>Mock Interviews</strong><br />
            Simulate real-world interviews with feedback — HR, technical, or grad school.
          </li>
          <li>🔗 <strong>LinkedIn & Application Review</strong><br />
            Get your full application package reviewed and your LinkedIn profile optimized.
          </li>
          <li>📑 <strong>Research Paper Support</strong><br />
            Writing, proofreading, and formatting help for coursework or publication.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why Choose Us</h2>
        <ul>
          <li>🎓 Built by NITK Alumni</li>
          <li>💯 100+ Students Helped</li>
          <li>✨ 100% Personalized — No Templates</li>
          <li>🔁 Unlimited Revisions</li>
          <li>⏱️ Fast Turnaround — 48–72 Hours</li>
          <li>💸 Affordable, Student-Friendly Pricing</li>
          <li>👨‍🏫 Real-time Personalized 1-on-1 Help</li>
          <li>💬 Honest, Peer-to-Peer Guidance</li>
        </ul>
      </section>

      <section className="section-alt">
        <h2>Meet the Team</h2>
        <p>We are <strong>NITK Surathkal</strong> graduates with successful experiences in internships, placements, and graduate school admissions.</p>
        <p>Team members have been placed in top tech firms and admitted to elite schools like <strong>NCSU</strong>, 
          <strong> University of Massachusetts Amherst</strong> , <strong>UC Davis</strong>,<strong> Virginia tech</strong>.</p>
        <p>Whether it's SOPs, resumes, interviews, or LinkedIn — we offer personalized, honest support.</p>
        <p><strong>Our goal</strong>: democratize access to real mentorship and eliminate the need for overpriced consulting.</p>
      </section>

      <section>
        <h2>FAQs</h2>
        <p><strong>Q:</strong> What’s the process?</p>
        <p><strong>A:</strong> Fill out the google form. Send us your draft. We'll schedule a quick call if needed.</p>

        <p><strong>Q:</strong> Is payment before or after?</p>
        <p><strong>A:</strong> We only charge after you're happy with the first review!</p>
      </section>

      <section id="contact" className="section-alt">
        <h2>Contact Us</h2>
        <p>Email: <strong>gradgyan@gmail.com</strong></p>
        <p>DM us on Instagram: <strong>gradgyan.in</strong></p>
        <p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScOTtnDLF_CQqbzUqjk8cenCHdUBIU6xtzscdvr96c8y9X5Uw/viewform?usp=header"
             target="_blank" rel="noopener noreferrer" className="btn">
            Fill Out Service Request Form
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 GradGyan · Built with ❤️ by NITKians</p>
        All rights reserved.
      </footer>
    </div>
  );
}

export default App;
