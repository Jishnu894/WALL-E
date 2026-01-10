import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function BlurText({
  text,
  delay = 120,
  className = "",
}) {
  const words = text.split(" ");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h1
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
          animate={
            visible
              ? { opacity: 1, filter: "blur(0px)", y: 0 }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: index * (delay / 1000),
          }}
          style={{ marginRight: "10px" }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
