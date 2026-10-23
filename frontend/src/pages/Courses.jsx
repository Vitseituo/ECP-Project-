const ugCourses = [
  'B.Com (sample tracks)',
  'BBA',
  'BCA',
  'B.Sc — Life Sciences / Computer Science (sample)',
  'BA — Journalism, Psychology, English (sample combinations)',
]

const pgCourses = ['M.Com', 'MBA', 'MCA', 'M.Sc (selected disciplines — sample)']

export default function Courses() {
  return (
    <section className="section page-top">
      <div className="container">
        <h1>Courses &amp; programmes</h1>
        <p className="section-intro">
          Sample programme list for the chatbot and website. Update{' '}
          <code>data/courses.txt</code> with your official catalogue.
        </p>

        <div className="card-grid two">
          <article className="card">
            <h2>Undergraduate</h2>
            <ul className="bullet-list">
              {ugCourses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h2>Postgraduate</h2>
            <ul className="bullet-list">
              {pgCourses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </article>
        </div>

        <p className="muted note">
          Eligibility, duration, and fees are not listed here intentionally. Ask the AI
          assistant only about information present in the data files, or contact
          admissions for authoritative details.
        </p>
      </div>
    </section>
  )
}
