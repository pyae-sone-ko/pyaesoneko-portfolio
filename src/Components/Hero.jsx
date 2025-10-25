import React from "react";
import BlobAvatar from "./BlobAvatar.jsx";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        gap: "20px",
        alignItems: "center",
        background: "white",
        borderRadius: "20px",
        boxShadow: "var(--shadow)",
        padding: "40px",
      }}
    >
      <div className="intro">
        <h4 style={{ color: "var(--muted)", marginBottom: "8px" }}>HEY THERE!</h4>
        <h1 style={{ fontSize: "40px", margin: "0 0 10px" }}>I'm Pyae Sone Ko</h1>
        <p style={{ color: "var(--muted)" }}>
          Software Developer based in Los Angeles with 3 years of experience in
          full-stack development, API integrations, and UI/UX design.
        </p>

        <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
          <a href="#contact" className="btn primary">
            Hire / Contact
          </a>
          <a href="#projects" className="btn secondary" style={{ border: "1px solid var(--accent1)", color: "var(--accent1)" }}>
            View Work
          </a>
        </div>

        <div style={{ marginTop: "30px", color: "var(--muted)", fontSize: "14px" }}>
          📞 +1 (213) 923-0337 <br />
          ✉️ pyaesoneko.connect@gmail.com <br />
          🌍 Los Angeles, United States
        </div>
      </div>

      <BlobAvatar />
    </section>
  );
}

export default Hero;
