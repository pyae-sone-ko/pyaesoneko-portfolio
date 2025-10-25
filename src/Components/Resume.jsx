import React from "react";
import Projects from "./Projects.jsx";

function Resume() {
  return (
   <>
   <section id="about" style={{ marginTop: "40px" }}>
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "var(--shadow)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>About Me</h2>
        <p style={{ color: "var(--muted)" }}>
          I’m a Software Developer with 3 years of experience specializing in React.js,
          JavaScript, and back-end integration. I enjoy building scalable, secure,
          and user-focused software solutions that combine creativity and technology.
        </p>

        <h3>Experience</h3>
        <ul style={{ color: "var(--muted)" }}>
          <li><b>Security Officer</b> — Calop Aeroground, LAX (2024–Present)</li>
          <li><b>Software Engineer</b> — Royal Garland (2020–2022)</li>
          <li><b>Freelance React Developer</b> — Self-Employed (2023)</li>
        </ul>

        <h3>Education</h3>
        <ul style={{ color: "var(--muted)" }}>
          <li>University of Gloucestershire (UK) — BSc Computing</li>
          <li>University of Computer Studies (Myanmar) — Computer Science</li>
        </ul>

        <h3>Skills</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {["React", "JavaScript", "HTML/CSS", "Node.js", "REST APIs", "MongoDB", "Git"].map(
            (skill) => (
              <span
                key={skill}
                style={{
                  background: "#f1f6ff",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  color: "#21407a",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
    
<section id="projects" style={{ marginTop: "40px" }}>
  <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "var(--shadow)",
        }}
      >
    <Projects/>
    </div>
</section>
    

    </>
  );
}

export default Resume;
