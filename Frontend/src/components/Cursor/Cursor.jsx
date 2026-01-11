import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const activate = (e) => {
      const rect = e.target.getBoundingClientRect();

      cursor.classList.add("active");
      cursor.style.width = `${rect.width + 14}px`;
      cursor.style.height = `${rect.height + 14}px`;
      cursor.style.borderRadius = "10px";
    };

    const deactivate = () => {
      cursor.classList.remove("active");
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.borderRadius = "50%";
    };

    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("button, a, .nav-link").forEach((el) => {
      el.addEventListener("mouseenter", activate);
      el.addEventListener("mouseleave", deactivate);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor"></div>;
}
