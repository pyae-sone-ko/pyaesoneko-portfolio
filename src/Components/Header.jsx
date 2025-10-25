import React from "react";
import "../App.css";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, var(--accent1), var(--accent2))",
            color: "white",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          PSK
        </div>
        <div>
          <div style={{ fontWeight: "700" }}>Pyae Sone Ko</div>
          <div style={{ fontSize: "12px", color: "var(--muted)" }}>
            Software Developer
          </div>
        </div>
      </div>

      <nav style={{ display: "flex", gap: "50px",}}>
        <a href="#about" style={{ paddingRight:"0px",paddingTop:"15px",textDecoration: "none", color: "var(--muted)" }}>
          About
        </a>
        <a href="#projects" style={{ paddingRight:"40px", paddingTop:"15px",textDecoration: "none", color: "var(--muted)" }}>
          Projects
        </a>
        <a
href="https://mail.google.com/mail/?view=cm&fs=1&to=pyaesoneko.connect@gmail.com&su=Job%20Opportunity%20Inquiry&body=Hi%20Pyae,%20We%20would%20like%20to%20connect%20regarding%20a%20potential%20role."
  target="_blank"
  rel="noopener noreferrer"

          className="btn primary"
          style={{ textDecoration: "none" }}
          
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
