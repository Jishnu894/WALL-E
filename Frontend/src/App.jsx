import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Why from "./components/Why/Why";
import How from "./components/How/How";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // 🎯 Target cursor logic
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "target-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <>
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "home" && (
        <>
          <Hero />
          <Why />
          <How />
          <Features />
          <Footer />
          <Cursor />
        </>
      )}

      {activeSection === "why" && <Why />}
      {activeSection === "how" && <How />}
      {activeSection === "features" && <Features />}
    </>
  );
}
