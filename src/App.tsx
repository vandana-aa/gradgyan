import logo from './assets/logo.png'; // Replace this with your logo

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
        <h2>Our Services</h2>
        <ul>
          <li>SOP Writing & Editing</li>
          <li>Resume Building & Review</li>
          <li>Mock Interviews (Technical & Behavioral)</li>
          <li>LinkedIn and Application Review</li>
        </ul>
      </section>

      <section>
        <h2>Why GradGyan?</h2>
        <ul>
          <li>Real-time personalized 1-on-1 help</li>
          <li>Free edits until your final submission</li>
          <li>Affordable pricing (₹300–₹900)</li>
          <li>Quick turnaround (24–48 hours)</li>
        </ul>
      </section>

      <section>
        <h2>Meet the Team</h2>
        <p>
          We are two NITK students with top admits including University of Texas at Austin, University of Michigan, Columbia, UCSD, NYU, and more.
        </p>
        <p>
          Our mission is to help undergrads craft perfect SOPs, resumes, and applications without spending thousands.
        </p>
      </section>

      <section>
        <h2>Testimonials</h2>
        <p>⭐ “My SOP went from average to amazing. Highly recommend!” – Student from NIT Calicut</p>
        <p>⭐ “I cracked my dream admit thanks to GradGyan’s mock interviews.” – Intern at Amazon</p>
      </section>

      <section>
        <h2>FAQs</h2>
        <p><strong>Q:</strong> What’s the process?</p>
        <p><strong>A:</strong> Send us your draft. We edit, review, and schedule a quick call if needed.</p>
        <p><strong>Q:</strong> Is payment before or after?</p>
        <p><strong>A:</strong> We only charge after you're happy with the first review!</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: <strong>gradgyan@gmail.com</strong></p>
        <p>WhatsApp: <strong>+91-XXXXXXXXXX</strong></p>
        <p>
          <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer" className="btn">
            Fill Out Service Request Form
          </a>
        </p>
      </section>

      <footer>
        © 2025 GradGyan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
