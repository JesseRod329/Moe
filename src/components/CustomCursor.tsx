'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A'
            );
        };

        window.addEventListener('mousemove', updateCursor);
        return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

    return (
        <>
            <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, input, select, textarea {
          cursor: none;
        }
      `}</style>
            <div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
                }}
            >
                <div className="relative w-full h-full">
                    {/* Outer Ring */}
                    <div className={`absolute inset-0 rounded-full border border-neon-green opacity-80 transition-all duration-300 ${isPointer ? 'border-neon-blue scale-110' : ''}`} />

                    {/* Inner Dot */}
                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-neon-green rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--neon-green)]" />

                    {/* Crosshair lines (HUD style) */}
                    <div className="absolute top-0 left-1/2 w-[1px] h-2 bg-neon-green/50 -translate-x-1/2" />
                    <div className="absolute bottom-0 left-1/2 w-[1px] h-2 bg-neon-green/50 -translate-x-1/2" />
                    <div className="absolute top-1/2 left-0 w-2 h-[1px] bg-neon-green/50 -translate-y-1/2" />
                    <div className="absolute top-1/2 right-0 w-2 h-[1px] bg-neon-green/50 -translate-y-1/2" />
                </div>
            </div>
        </>
    );
}
