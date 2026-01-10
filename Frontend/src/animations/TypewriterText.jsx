import { useEffect, useRef, useState } from "react";

export default function TypewriterText({
  text,
  speed = 150,
  className = "",
}) {
  const [displayed, setDisplayed] = useState("");
  const [hasTyped, setHasTyped] = useState(false); // ✅ NEW
  const ref = useRef(null);

  useEffect(() => {
    if (hasTyped) return; // ✅ already typed → do nothing

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped) {
          let index = 0;
          setDisplayed("");

          const interval = setInterval(() => {
            index++;
            setDisplayed(text.slice(0, index));

            if (index >= text.length) {
              clearInterval(interval);
              setHasTyped(true); // ✅ lock typing forever
            }
          }, speed);

          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [text, speed, hasTyped]);

  return (
    <h1 ref={ref} className={className}>
      {displayed}
      <span className="cursor">|</span>
    </h1>
  );
}
