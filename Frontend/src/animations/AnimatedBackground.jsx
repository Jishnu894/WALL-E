import Orb from "./Orb";

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // 👈 TRUE CENTER
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Orb size={700} hue={330} speed={0.4} />
    </div>
  );
}
