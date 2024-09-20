import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <>
      <div className="homeStyle">
        <video autoPlay loop muted>
          <source
            src="https://videos.pexels.com/video-files/856987/856987-sd_640_360_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="mainTitle">
          <Typewriter
            words={["HELLO", "I'm SOLAFA", "Front-End Engineer"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={40}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </div>
        <div className="skillsWorlds">
          <Typewriter
            words={[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "REACT JS",
              "BOOTSTRAP",
              "TAILWIND CSS",
              "MATIRAL UI",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </div>

        <div className="contactDiv">
          <div className="contact-card">
            <div className="contact-item">
              <a href="slaftamyr8@gmail.com">
                email
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/email.png"
                  alt="Email Icon"
                />
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://www.linkedin.com/in/solafa-ameer"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                  alt="LinkedIn Icon"
                />
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://wa.me/249129512940"
                target="_blank"
                rel="noopener noreferrer"
              >
                whatsapp
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png"
                  alt="WhatsApp Icon"
                />
              </a>
            </div>
            <div className="contact-item">
              <a
                href="https://t.me/AMARETA1"
                target="_blank"
                rel="noopener noreferrer"
              >
                telegram
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/telegram.png"
                  alt="Telegram Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
