import React from "react";
import "./MyProjects.css";
import {
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Prayer Times Page",
    description:
      "Using HTML, CSS, and JavaScript along with a library like Tailwind CSS to display prayer times based on the user's location.",
    image:
      "file:///C:/Users/msafat/Desktop/all%20proj/solafa%20ameer%20portfolio/img/prayerTimes.png", // Placeholder image
    link: "#",
  },
  {
    id: 2,
    title: "Image Creator",
    description:
      "Using HTML, CSS, JavaScript, and React along with a library like Material UI. This website generates an image based on the description you provide using artificial intelligence. ",
    image:
      "file:///C:/Users/msafat/Desktop/all%20proj/solafa%20ameer%20portfolio/img/ai.png", // Placeholder image
    link: "http://example.com/project2",
  },
  {
    id: 3,
    title: "Lemona Restaurant",
    description: "Using HTML, CSS only .This website of a restaurant.",
    image:
      "file:///C:/Users/msafat/Desktop/all%20proj/solafa%20ameer%20portfolio/img/LEMONA.png", // Placeholder image
    link: "http://example.com/project3",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "This is the description for Project 4. It contains interesting details about the project.",
    image: "https://via.placeholder.com/150", // Placeholder image
    link: "http://example.com/project4",
  },
  {
    id: 5,
    title: "Project 5",
    description:
      "This is the description for Project 5. It contains interesting details about the project.",
    image: "https://via.placeholder.com/150", // Placeholder image
    link: "http://example.com/project5",
  },
  // You can add more projects here
];

export default function MyProjects() {
  return (
    <div className="proj">
      <div className="projects-container">
        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <a
                  href={project.link}
                  className="project-title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="social-bar">
          <a
            href="https://www.linkedin.com/in/solafa-ameer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/249129512940"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/AMARETA1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
          <a href="mailto:slaftamyr8@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/slaftamyr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
