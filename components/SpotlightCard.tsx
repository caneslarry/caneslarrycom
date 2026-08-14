'use client';

import { CSSProperties, MouseEvent, ReactNode, useState } from 'react';

export default function SpotlightCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const move = (event: MouseEvent<globalThis.HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };
  return (
    <div
      onMouseMove={move}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={
        {
          '--spot-x': `${position.x}px`,
          '--spot-y': `${position.y}px`,
          '--spot-opacity': active ? 1 : 0,
        } as CSSProperties
      }
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}
