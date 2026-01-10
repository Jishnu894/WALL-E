import AnimatedBackground from "../../animations/AnimatedBackground";
import TypewriterText from "../../animations/TypewriterText";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100vw",            // 👈 FULL WIDTH (CRITICAL)
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* ORB */}
      <AnimatedBackground />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
        }}
      >
        <TypewriterText
          text="WALL·E"
          speed={150}
          className="text-8xl font-extrabold mb-6 tracking-wide"
        />

        <p style={{ opacity: 0.8, marginBottom: "32px" }}>
          Your daily companion for better money habits
        </p>

        <button
          style={{
            padding: "14px 32px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.4)",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
