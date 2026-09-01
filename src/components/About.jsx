function About() {
  const aboutCards = [
    {
      title: "Who I Am",
      text: "I am a Computer Science student interested in web development and software development."
    },
    {
      title: "What I Do",
      text: "I enjoy learning modern technologies and building useful software projects."
    }
  ]

  return (
    <section id="about">
      <div className="section-title">
        <p>ABOUT ME</p>
        <h2>Who I Am</h2>
      </div>

      <div className="about-content">
        {aboutCards.map((card) => (
          <div className="about-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About