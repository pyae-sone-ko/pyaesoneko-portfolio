import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Resume from "./Components/Resume.jsx";
import Footer from "./Components/Footer.jsx";
// import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Resume />
      <Footer />
      {/* <Contact/> */}
    </div>
  );
}

export default App;
