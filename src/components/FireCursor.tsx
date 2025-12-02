import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
  velocity: { x: number; y: number };
}

function FireCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let particleId = 0;
    let movementTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(movementTimer);
      movementTimer = setTimeout(() => setIsMoving(false), 50);

      // Create new particles
      if (Math.random() > 0.7) {
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
          life: 1,
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: Math.random() * -2 - 1,
          },
        };
        setParticles((prev) => [...prev, newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(movementTimer);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            life: particle.life - 0.02,
            size: particle.size * 0.95,
          }))
          .filter((particle) => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        a, button {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-6 h-6 rounded-full border-2 border-orange-500 transition-transform duration-150 ${isMoving ? 'scale-150' : 'scale-100'}`}>
          <div className="w-2 h-2 rounded-full bg-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Fire particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: 'translate(-50%, -50%)',
            opacity: particle.life,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle,
                rgba(255, 165, 0, ${particle.life}) 0%,
                rgba(255, 69, 0, ${particle.life * 0.8}) 50%,
                rgba(255, 0, 0, ${particle.life * 0.6}) 100%)`,
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 100, 0, ${particle.life * 0.8})`,
            }}
          />
        </div>
      ))}
    </>
  );
}

export default FireCursor;
