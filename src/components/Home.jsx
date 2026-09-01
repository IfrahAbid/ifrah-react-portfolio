function Home() {
  return (
    <section id="home">
      <div className="home-text">
        <p className="intro">WELCOME TO MY PORTFOLIO</p>

        <h1>Hello, I'm Ifrah Abid</h1>

        <h2>Computer Science Undergraduate</h2>

        <p>
          I am interested in web development and software development.
          I enjoy learning modern technologies and building useful projects.
        </p>

        <div className="home-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="home-image">
        <img src="/ifrah.jpg" alt="Ifrah Abid" />
      </div>
    </section>
  )
}

export default Home