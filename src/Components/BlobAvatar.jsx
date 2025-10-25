import React from "react";
import Me from "../Assets/Me.jpeg";

function BlobAvatar() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "320px",
          height: "320px",
          borderRadius: "46% 54% 55% 45% / 40% 50% 50% 60%",
          background: "linear-gradient(160deg,var(--accent1),var(--accent2))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 30px 60px rgba(155,59,255,0.2)",
          animation: "float 6s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "210px",
            height: "210px",
            background: "#fff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            fontWeight: "700",
            color: "#213b6c",
            boxShadow: "0 14px 40px rgba(11,27,43,0.1)",
          }}
        >
          <img 
          src={Me}
           style={{
              width: "200px",
              height: "auto",
              borderRadius: "14px", 
           }}/>
        </div>
      </div>

      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        `}
      </style>
    </div>
  );
}

export default BlobAvatar;
