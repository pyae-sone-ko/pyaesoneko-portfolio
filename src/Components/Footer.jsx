import React from "react";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        color: "var(--muted)",
        marginTop: "30px",
        paddingBottom: "20px",
      }}
    >
      © {new Date().getFullYear()} Pyae Sone Ko — Built with React
    </footer>
  );
}

export default Footer;
