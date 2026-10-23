import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Kristu Jayanti College</h3>
          <p className="muted">
            Sample college website for demonstration. Replace content in the{' '}
            <code>data/</code> folder with your official information.
          </p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/chatbot">AI Assistant</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact (sample)</h4>
          <p className="muted">Sample Campus, Bengaluru 560077</p>
          <p className="muted">+91 00000 00000</p>
          <p className="muted">info@example-college.edu</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Sample college website. Not an official site.</p>
        </div>
      </div>
    </footer>
  )
}
