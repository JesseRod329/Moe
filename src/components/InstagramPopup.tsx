'use client';

import { useState, useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function InstagramPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const popupRef = useRef<HTMLDivElement>(null);

    // Check sessionStorage on mount
    useEffect(() => {
        const dismissed = sessionStorage.getItem('instagramPopupDismissed_v2');
        if (dismissed === 'true') {
            setIsDismissed(true);
        }
    }, []);

    // Show popup every 2 minutes
    useEffect(() => {
        if (isDismissed) return;

        const showPopup = () => {
            // Random position within viewport
            const maxX = window.innerWidth - 300; // popup width
            const maxY = window.innerHeight - 200; // popup height
            const randomX = Math.max(20, Math.floor(Math.random() * maxX));
            const randomY = Math.max(80, Math.floor(Math.random() * maxY));

            setPosition({ x: randomX, y: randomY });
            setIsVisible(true);
        };

        // Show initially after 5 seconds
        const initialTimer = setTimeout(showPopup, 5000);

        // Then every 2 minutes
        const intervalTimer = setInterval(() => {
            if (!isDismissed) {
                showPopup();
            }
        }, 120000); // 2 minutes

        return () => {
            clearTimeout(initialTimer);
            clearInterval(intervalTimer);
        };
    }, [isDismissed]);

    const handleClose = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem('instagramPopupDismissed_v2', 'true');
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (popupRef.current) {
            const rect = popupRef.current.getBoundingClientRect();
            setDragOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
            setIsDragging(true);
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset]);

    if (!isVisible || isDismissed) return null;

    return (
        <div
            ref={popupRef}
            className="fixed z-[100] cursor-move select-none"
            style={{ left: position.x, top: position.y }}
            onMouseDown={handleMouseDown}
        >
            <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-1 rounded-2xl shadow-2xl shadow-pink-500/30 animate-pulse-slow">
                <div className="bg-black rounded-xl p-4 relative">
                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute -top-2 -right-2 bg-white/20 hover:bg-white/40 rounded-full p-1 transition-colors"
                    >
                        <XMarkIcon className="h-4 w-4 text-white" />
                    </button>

                    {/* Content */}
                    <a
                        href="https://instagram.com/moe_production18"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-3 group"
                    >
                        {/* Instagram Icon */}
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </div>

                        {/* Text */}
                        <div>
                            <p className="text-white font-bold text-sm group-hover:text-pink-400 transition-colors">Follow us!</p>
                            <p className="text-gray-400 text-xs">@moe_production18</p>
                        </div>
                    </a>

                    {/* Drag hint */}
                    <p className="text-gray-600 text-[10px] mt-2 text-center">Drag to move • Click X to close</p>
                </div>
            </div>
        </div>
    );
}
