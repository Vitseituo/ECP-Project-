export default function Contact() {
  return (
    <section className="section page-top">
      <div className="container">
        <h1>Contact</h1>
        <p className="section-intro">
          Placeholder contact details. Update <code>data/college_info.json</code> with
          official phone numbers and emails.
        </p>

        <div className="card-grid two">
          <article className="card stack">
            <h2>Campus (sample)</h2>
            <p>Sample Campus Address</p>
            <p>Bengaluru, Karnataka 560077</p>
            <p>India</p>
          </article>
          <article className="card stack">
            <h2>Reach us (sample)</h2>
            <p>
              <strong>Phone:</strong> +91 00000 00000
            </p>
            <p>
              <strong>Email:</strong> info@example-college.edu
            </p>
            <p>
              <strong>Admissions:</strong> admissions@example-college.edu
            </p>
            <p>
              <strong>Office hours:</strong> Mon–Fri, 9:00 AM – 4:00 PM (sample)
            </p>
          </article>
        </div>

        <p className="muted note">
          Official site reference:{' '}
          <a href="https://www.kristujayanti.edu.in/" target="_blank" rel="noreferrer">
            www.kristujayanti.edu.in
          </a>
        </p>
      </div>
    </section>
  )
}
