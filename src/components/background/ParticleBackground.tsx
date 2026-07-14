// import { useEffect, useRef } from "react";

// type Particle = {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   r: number;
// };

// const ParticleBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");

//     if (!ctx) return;

//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     canvas.width = width;
//     canvas.height = height;

//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;

//       canvas.width = width;
//       canvas.height = height;
//     };

//     window.addEventListener("resize", resize);

//     const particles: Particle[] = Array.from({ length: 60 }, () => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       r: Math.random() * 2 + 1,
//     }));

//     let animationId = 0;

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);

//       for (let i = 0; i < particles.length; i++) {
//         const p = particles[i];

//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x <= 0 || p.x >= width) p.vx *= -1;
//         if (p.y <= 0 || p.y >= height) p.vy *= -1;

//         // Dot
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = "#38bdf8";
//         ctx.shadowBlur = 10;
//         ctx.shadowColor = "#38bdf8";
//         ctx.fill();

//         // Lines
//         for (let j = i + 1; j < particles.length; j++) {
//           const q = particles[j];

//           const dx = p.x - q.x;
//           const dy = p.y - q.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < 130) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(q.x, q.y);

//             ctx.strokeStyle = `rgba(56,189,248,${
//               (130 - dist) / 130
//             })`;

//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }

//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 -z-50 opacity-80"
//     />
//   );
// };

// export default ParticleBackground;


import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Mobile detection
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 50;
    const connectionDistance = isMobile ? 70 : 130;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.2 + 0.6,
    }));

    let frameCount = 0;

    const animate = () => {
      frameCount++;
      
      // Throttle on mobile (update every 2 frames)
      if (isMobile && frameCount % 2 === 1) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();
      }

      // Draw connections (reduced on mobile)
      if (!isMobile) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];

            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(56,189,248,${(connectionDistance - dist) / connectionDistance * 0.3})`;
              ctx.lineWidth = 0.3;
              ctx.stroke();
            }
          }
        }
      } else {
        // Mobile: less frequent connections
        if (frameCount % 4 === 0) {
          for (let i = 0; i < particles.length; i += 2) {
            const p = particles[i];
            
            for (let j = i + 1; j < particles.length; j += 2) {
              const q = particles[j];

              const dx = p.x - q.x;
              const dy = p.y - q.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < connectionDistance) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.strokeStyle = `rgba(56,189,248,${(connectionDistance - dist) / connectionDistance * 0.25})`;
                ctx.lineWidth = 0.25;
                ctx.stroke();
              }
            }
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 opacity-60"
      style={{ willChange: "transform" }}
    />
  );
};

export default ParticleBackground;