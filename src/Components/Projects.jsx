import React from "react";

function Projects() {
  const projects = [
    {
      name: "Restaurant POS System",
      desc: "A real-time POS web app built with React.js, Node.js, and Firebase."
    },
    {
      name: "Lottery Checker",
      desc: "React app allowing users to check lottery results quickly and securely."
    },
    {
      name: "Course Sharing Platform",
      desc: "A web platform for teachers to upload and share educational videos."
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "25px" }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            background: "rgba(120, 29, 255, 0.06)",
            border: "1px solid #8400ff46",
            borderRadius: "15px",
            padding: "20px",
            width: "260px",
            textAlign: "left"
          }}>
            <h3 style={{ color: "#8d1ffbb6" }}>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;