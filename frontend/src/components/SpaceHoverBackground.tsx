import { useEffect, useRef } from "react";

export default function SpaceHoverBackground() {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!meshRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      meshRef.current.style.background = `
        radial-gradient(ellipse 55% 35% at ${x}% ${y}%, rgba(124,79,255,0.20), transparent 55%),
        radial-gradient(ellipse 80% 50% at 20% -10%, rgba(124,79,255,0.15), transparent 60%),
        radial-gradient(ellipse 60% 40% at 85% 15%,  rgba(59,130,246,0.11), transparent 55%),
        radial-gradient(ellipse 50% 60% at 10% 90%,  rgba(236,72,153,0.09), transparent 55%),
        #060912
      `;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={meshRef}
        className="mesh-bg"
        style={{ transition: "background 0.35s ease" }}
      />
      <div className="stars" />
    </>
  );
}
