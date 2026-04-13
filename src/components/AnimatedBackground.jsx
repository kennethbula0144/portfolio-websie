import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ isDark }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const frameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Particle system
    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x - this.radius > width) this.x = -this.radius;
        if (this.x + this.radius < 0) this.x = width + this.radius;
        if (this.y - this.radius > height) this.y = -this.radius;
        if (this.y + this.radius < 0) this.y = height + this.radius;
      }

      draw(ctx) {
        ctx.fillStyle = isDark
          ? `rgba(167, 139, 250, ${this.alpha})`
          : `rgba(139, 92, 246, ${this.alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    particlesRef.current = particles;

    // Draw connecting lines
    const drawConnections = () => {
      const maxDist = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.2;
            ctx.strokeStyle = isDark
              ? `rgba(167, 139, 250, ${opacity})`
              : `rgba(139, 92, 246, ${opacity * 0.5})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      drawConnections();

      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{
        display: 'block',
        zIndex: 0,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default AnimatedBackground;
