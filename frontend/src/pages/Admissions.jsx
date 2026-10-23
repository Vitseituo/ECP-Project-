const steps = [
  'Check the current year admission notification on the official site.',
  'Review programme eligibility (marks, subjects, entrance if any).',
  'Complete the application form (online or offline as announced).',
  'Submit documents per the admissions checklist.',
  'Attend counselling / interview / entrance when required.',
  'Pay fees and confirm enrollment before the deadline.',
]

export default function Admissions() {
  return (
    <section className="section page-top">
      <div className="container narrow">
        <h1>Admissions</h1>
        <p className="lead">
          Sample admission workflow. Replace with official dates, fees, and rules from
          your college prospectus.
        </p>

        <article className="card stack">
          <h2>How to apply (sample)</h2>
          <ol className="numbered-list">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="card stack">
          <h2>Eligibility overview (sample)</h2>
          <ul className="bullet-list">
            <li>UG: Pass in 10+2 or equivalent from a recognised board.</li>
            <li>PG: Relevant bachelor&apos;s degree from a recognised university.</li>
            <li>Some programmes may require entrance tests or interviews.</li>
          </ul>
        </article>

        <div className="card highlight">
          <p>
            <strong>Important:</strong> This demo does not publish real application
            deadlines or fee amounts. Contact the admissions office for current
            information.
          </p>
        </div>
      </div>
    </section>
  )
}
