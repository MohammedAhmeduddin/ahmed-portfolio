import { useEffect, useState } from "react";

export default function SpaceHoverBackground() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `
            radial-gradient(circle at ${position.x}% ${position.y}%, rgba(168,85,247,0.22), transparent 18%),
            radial-gradient(circle at 20% 20%, rgba(59,130,246,0.14), transparent 24%),
            radial-gradient(circle at 80% 80%, rgba(236,72,153,0.10), transparent 24%),
            #05070d
          `,
        }}
      />

      <div className="space-stars absolute inset-0 opacity-30" />
    </div>
  );
}
