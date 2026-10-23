
import { Link } from 'react-router-dom'

const schools = [
  {
    title: 'Management',
    description: 'Explore programmes in business, commerce and management.',
    icon: '▤',
  },
  {
    title: 'Computer Science',
    description: 'Discover computing, applications and emerging technologies.',
    icon: '⌘',
  },
  {
    title: 'Sciences',
    description: 'Explore scientific learning, research and innovation.',
    icon: '⚗',
  },
  {
    title: 'Humanities',
    description: 'Develop knowledge through social sciences and humanities.',
    icon: '▥',
  },
]

const highlights = [
  'Academic programmes and learning resources',
  'Campus facilities and student activities',
  'Research, innovation and career development',
  'Student support and admission guidance',
]

export default function Home() {
  return (
    <>
      <section className="kj-hero">
        <div className="kj-hero-overlay" />
        <div className="container kj-hero-content">
          <p className="kj-eyebrow">KRISTU JAYANTI</p>
          <h1>Knowledge. Excellence. Service.</h1>
          <p className="kj-hero-description">
            Discover academic opportunities, explore campus life and
            take the next step in your educational journey.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary">
              Explore Programmes
            </Link>
            <Link to="/admissions" className="btn btn-outline">
              Admissions
            </Link>
          </div>
        </div>
      </section>

      <section className="kj-welcome section">
        <div className="container kj-welcome-grid">
          <div>
            <p className="kj-eyebrow">WELCOME TO KRISTU JAYANTI</p>
            <h2 className="section-title">
              Learn, discover and grow
            </h2>
            <p className="section-intro">
              Explore academic programmes, student opportunities and
              campus resources through this locally running university
              website demonstration.
            </p>
            <p>
              Find information about admissions, courses, facilities
              and university services using the navigation menu or
              the AI assistant.
            </p>
            <Link to="/about" className="kj-text-link">
              Discover more about us →
            </Link>
          </div>

          <div className="kj-highlight-panel">
            <p className="kj-eyebrow">EXPLORE THE UNIVERSITY</p>
            <h3>Opportunities for every learner</h3>
            <ul className="check-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <p className="kj-eyebrow">ACADEMIC EXCELLENCE</p>
          <h2 className="section-title">Explore academic areas</h2>
          <p className="section-intro">
            Browse these sample academic categories. Consult the
            official university website for verified schools and
            programme listings.
          </p>

          <div className="card-grid four kj-school-grid">
            {schools.map((school) => (
              <article className="card kj-school-card" key={school.title}>
                <span className="kj-school-icon" aria-hidden="true">
                  {school.icon}
                </span>
                <h3>{school.title}</h3>
                <p>{school.description}</p>
                <Link to="/courses">Explore courses →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kj-eyebrow">YOUR UNIVERSITY JOURNEY</p>
          <h2 className="section-title">How can we help you?</h2>

          <div className="card-grid three">
            <article className="card">
              <h3>Admissions</h3>
              <p>
                Find application guidance, eligibility information
                and admission-related resources.
              </p>
              <Link to="/admissions">Admission information →</Link>
            </article>

            <article className="card">
              <h3>Academic programmes</h3>
              <p>
                Browse course information and learn about available
                study options.
              </p>
              <Link to="/courses">Browse programmes →</Link>
            </article>

            <article className="card">
              <h3>AI student assistant</h3>
              <p>
                Ask questions about university information available
                to your chatbot.
              </p>
              <Link to="/chatbot">Chat with the assistant →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2 className="section-title">Campus and student life</h2>
          <div className="card-grid four">
            <div className="mini-card">Library and learning resources</div>
            <div className="mini-card">Computer labs and technology</div>
            <div className="mini-card">Student clubs and activities</div>
            <div className="mini-card">Sports and campus events</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-strip card kj-contact-strip">
          <div>
            <p className="kj-eyebrow">NEED ASSISTANCE?</p>
            <h2>Have a question about the university?</h2>
            <p className="muted">
              Use the AI assistant or visit the contact page for
              further information.
            </p>
          </div>

          <div className="hero-actions">
            <Link to="/chatbot" className="btn btn-primary">
              Ask the AI assistant
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
