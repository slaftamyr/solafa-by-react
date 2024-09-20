import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="container">
      <div className="profile">
        <img
          src="data:image/jpeg;base64,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"
          alt="Profile"
          className="profile-image"
        />
        <div className="text">
          <h1>Hello, I'm Solafa!</h1>
          <p>
            I'm a passionate Frontend Developer who learned independently from
            various sources. I have a deep understanding of technologies such as
            HTML, CSS, JavaScript and React. And some library like Tailwind CSS,
            Bootstrap, and Material UI.
          </p>
          <p>
            I pride myself on being a quick learner, always eager to embrace new
            challenges and continuously improve my skills.
          </p>

          <div className="contact">
            <div className="cont-item">
              <a href="slaftamyr8@gmail.com">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/email.png"
                  alt="Email Icon"
                />
              </a>
            </div>
            <div className="cont-item">
              <a
                href="https://www.linkedin.com/in/solafa-ameer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                  alt="LinkedIn Icon"
                />
              </a>
            </div>
            <div className="cont-item">
              <a
                href="https://t.me/AMARETA1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/telegram.png"
                  alt="Telegram Icon"
                />
              </a>
            </div>
            <div className="cont-item">
              <a
                href="https://wa.me/249129512940"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png"
                  alt="WhatsApp Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
