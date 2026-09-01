function Projects() {
  const projects = [
    {
      title: "Library Management System",
      technology: "C# | WPF | XAML",
      description:
        "A desktop application for managing books, students and library records."
    },
    {
      title: "Bank Account Management System",
      technology: "C++",
      description:
        "A program for managing bank accounts and performing basic account operations."
    },
    {
      title: "Recipe Book App",
      technology: "React Native",
      description:
        "A mobile recipe application designed to display and organize different recipes."
    }
  ]

  return (
    <section id="projects">
      <div className="section-title">
        <p>MY WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <span>PROJECT</span>

            <h3>{project.title}</h3>

            <p className="technology">{project.technology}</p>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects