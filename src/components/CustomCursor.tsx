import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for fine pointer (mouse), not touch screens
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('a, button, input, textarea, select, [role="button"], .interactive-cursor');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let frameId: number;
    const loop = () => {
      // Smooth trailing spring/lerp
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setTrailingPos({ x: currentX, y: currentY });
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Soft trailing glow aura */}
      <div
        className="fixed rounded-full -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color] duration-300 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '64px' : '36px',
          height: isHovered ? '64px' : '36px',
          background: isHovered
            ? 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, rgba(168, 85, 247, 0.15) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 70%)',
          filter: 'blur(4px)',
        }}
      />

      {/* Sharp central pinpoint dot */}
      <div
        className="fixed rounded-full -translate-x-1/2 -translate-y-1/2 transition-[transform,background-color] duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '10px' : '5px',
          height: isHovered ? '10px' : '5px',
          backgroundColor: isHovered ? '#fbbf24' : '#ffffff',
          boxShadow: isHovered
            ? '0 0 12px #f59e0b, 0 0 20px #c084fc'
            : '0 0 6px rgba(255, 255, 255, 0.8)',
        }}
      />
    </div>
  );
};
