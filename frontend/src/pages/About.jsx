export default function About() {
  return (
    <section className="section page-top">
      <div className="container narrow">
        <h1>About the college</h1>
        <p className="lead">
          <strong>Sample content.</strong> This page describes a fictional profile
          structured like a real college site. Replace with official history, vision,
          and mission from{' '}
          <a href="https://www.kristujayanti.edu.in/" target="_blank" rel="noreferrer">
            kristujayanti.edu.in
          </a>{' '}
          when you deploy.
        </p>

        <article className="card stack">
          <h2>Our story (sample)</h2>
          <p>
            Founded as a sample institution in 1999 (placeholder year), the college
            aims to combine rigorous academics with values-based education. Programmes
            span commerce, management, sciences, and liberal arts.
          </p>
        </article>

        <div className="card-grid two">
          <article className="card">
            <h3>Vision (sample)</h3>
            <p>To nurture competent professionals with ethical leadership.</p>
          </article>
          <article className="card">
            <h3>Mission (sample)</h3>
            <p>
              To deliver quality teaching, research opportunities, and community
              engagement in a supportive campus environment.
            </p>
          </article>
        </div>

        <article className="card stack">
          <h2>Departments (sample)</h2>
          <ul className="bullet-list">
            <li>Commerce and Management</li>
            <li>Computer Science and IT</li>
            <li>Life Sciences</li>
            <li>Humanities and Languages</li>
            <li>Social Sciences</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
