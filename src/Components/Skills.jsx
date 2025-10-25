import React from "react";

function Skills() {
  const skills = ["ReactJS", "JavaScript", "Node.js", "HTML", "CSS", "SQL", "AWS", "Firebase"];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
        {skills.map((skill, i) => (
          <span 
            key={i} 
            style={{
              background: "rgba(0,255,255,0.1)",
              border: "1px solid #00ffff",
              borderRadius: "15px",
              padding: "10px 20px",
              fontSize: "16px"
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;