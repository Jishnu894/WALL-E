import { useEffect, useRef } from "react";

export default function Orb({
  size = 500,
  hue = 260,
  speed = 0.4,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    const center = size / 2;
    let frame = 0;

    const draw = () => {
      frame += speed;
      ctx.clearRect(0, 0, size, size);

      /* ===== CLEAN COLOR-CHANGING ORB ===== */
      const gradient = ctx.createRadialGradient(
        center,
        center,
        size * 0.1,
        center,
        center,
        size * 0.45
      );

      gradient.addColorStop(
        0,
        `hsla(${hue + frame}, 90%, 65%, 1)`
      );
      gradient.addColorStop(
        0.6,
        `hsla(${hue + frame + 30}, 80%, 45%, 0.95)`
      );
      gradient.addColorStop(
        1,
        `hsla(${hue + frame + 60}, 70%, 30%, 0.85)`
      );

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(center, center, size * 0.42, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(draw);
    };

    draw();
  }, [size, hue, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        filter: "blur(40px)",
      }}
    />
  );
}
