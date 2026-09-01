import { useState } from "react"

function Contact() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact">
      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>
            <strong>Email:</strong> 24ifrahabida@gmail.com
          </p>

          <p>
            <strong>LinkedIn:</strong> linkedin.com/in/ifrah-a-226852281
          </p>

          <p>
            <strong>Location:</strong> Chakwal, Pakistan
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>

          <button type="submit">Send Message</button>

          {submitted && (
            <p className="success-message">
              Thank you, {name}! Your message has been submitted.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact