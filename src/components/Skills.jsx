function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C++",
    "C#",
    "Python",
    "SQL"
  ]

  return (
    <section id="skills">
      <div className="section-title">
        <p>MY SKILLS</p>
        <h2>Technologies I Work With</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span>SKILL</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills