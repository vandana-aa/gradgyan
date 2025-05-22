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
      <header>
      We help students ace MS admissions, internships, and placements — with standout SOPs, professional resumes, and real-world mock interviews.
      </header>
        
<section>
  <h2>Our Services</h2>
  <ul>
    <li>
      ✍️ <strong>SOP Writing & Editing</strong><br />
      Craft a compelling story for your Master's application. We help you brainstorm, write, and perfect your Statement of Purpose — no templates, no fluff.
    </li>
    <li>
      📄 <strong>Resume Building & Review</strong><br />
      Get a professional, ATS-friendly resume tailored to placements, internships, or grad school applications. From scratch or revamp — we've got you.
    </li>
    <li>
      🎤 <strong>Mock Interviews (Technical & Behavioral)</strong><br />
      HR, technical, or MS interview prep — we simulate real-world interview rounds and give detailed, actionable feedback.
    </li>
    <li>
      🔗 <strong>LinkedIn & Application Review</strong><br />
      Optimize your LinkedIn profile and get expert reviews on your entire application package to maximize your chances.
    </li>
    <li>
      📑 <strong>Research Paper Writing and Proofreading</strong><br />
      Get guidance on writing and refining academic papers for publication or coursework — with grammar, flow, and formatting checks.
    </li>
  </ul>
</section>


      
  <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
     <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose Us</h2>
  
     <ul className="list-disc list-inside text-gray-700 text-lg space-y-3 max-w-2xl mx-auto">
    <li>🎓 Built by NITK Alumni</li>
    <li>💯 100+ Students Helped (MS, Placements & Internships)</li>
    <li>✨ 100% Personalized — No Templates</li>
    <li>🔁 Unlimited Revisions on SOPs & Resumes</li>
    <li>⏱️ Fast Turnaround — 48–72 Hours</li>
    <li>💸 Affordable, Student-Friendly Pricing</li>
    <li>👨‍🏫 Real-time Personalized 1-on-1 Help</li>
    <li>💬 Honest, Peer-to-Peer Guidance</li>
     </ul>
      </section>


      <section>
  <h2>Meet the Team</h2>
  <p>
    We are a team of <strong>graduated students from NITK Surathkal</strong>, one of India’s top engineering institutes. 
    Each of us has personally navigated the challenges of college Placements, Internships both on-campus and off-campus and Graduate school admissions — and now, we’re here to help you do the same.
  </p>

  <p>
    Our team includes individuals placed in top tech companies, as well as those admitted to world-renowned universities like 
    <strong> University of Texas at Austin</strong>, <strong>University of Michigan</strong>, <strong>Columbia</strong>, 
    <strong>UC San Diego</strong>, and <strong>NYU</strong>.
  </p>

  <p>
    Whether you’re applying for <strong> Internships, Placements, or Graduate school</strong>, we’ve got you covered. From crafting 
    standout SOPs and resumes to preparing for interviews and reviewing LinkedIn profiles — we provide personalized guidance 
    that’s affordable, honest, and effective.
  </p>

  <p>
    At GradGyan, our motivation is simple: We want to democratize access to quality mentorship and ensure that every student 
    has the tools they need to succeed — without spending thousands on agencies or consultants.
  </p>
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
        <p>DM us on Instagram : <strong>gradgyan.in</strong></p>
        <p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScOTtnDLF_CQqbzUqjk8cenCHdUBIU6xtzscdvr96c8y9X5Uw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn">
            Fill Out Service Request Form
          </a>
        </p>
      </section>

      <footer>
       <p> © 2025 GradGyan · Built with ❤️ by NITKians</p>
        All rights reserved.
      </footer>
    </div>
  );
}

export default App;
