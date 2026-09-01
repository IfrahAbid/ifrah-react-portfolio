function Education() {
  const education = {
    degree: "BS Computer Science",
    university: "University of Chakwal",
    semesters: "Completed 6 of 8 Semesters",
    graduation: "Expected Graduation: 2027"
  }

  return (
    <section id="education">
      <div className="section-title">
        <p>MY EDUCATION</p>
        <h2>Education</h2>
      </div>

      <div className="education-card">
        <div>
          <h3>{education.degree}</h3>
          <p>{education.university}</p>
        </div>

        <div className="education-info">
          <p>{education.semesters}</p>
          <p>{education.graduation}</p>
        </div>
      </div>
    </section>
  )
}

export default Education