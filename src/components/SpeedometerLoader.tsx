import { useEffect, useState } from 'react';

export default function SpeedometerLoader({ onFinished }: { onFinished: () => void }) {
    const [speed, setSpeed] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const duration = 2500; // 2.5 seconds total
        const interval = 20; // update every 20ms
        const steps = duration / interval;
        const increment = 40 / steps; // target speed 40

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep <= steps) {
                setSpeed((prev) => Math.min(prev + increment, 40));
            } else {
                clearInterval(timer);
                // Flash effect or hold for a moment
                setTimeout(() => {
                    setOpacity(0);
                    setTimeout(onFinished, 500); // Wait for fade out
                }, 200);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [onFinished]);

    if (opacity === 0) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500"
            style={{ opacity }}
        >
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-white/10 animate-pulse" />

                {/* Speedometer Arc (CSS Conic Gradient) */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `conic-gradient(from 225deg, var(--neon-blue) 0%, var(--neon-green) ${(speed / 40) * 270}deg, transparent ${(speed / 40) * 270}deg)`,
                        maskImage: 'radial-gradient(transparent 65%, black 66%)',
                        WebkitMaskImage: 'radial-gradient(transparent 65%, black 66%)',
                        transform: 'rotate(0deg)'
                    }}
                />

                {/* Digital Readout */}
                <div className="flex flex-col items-center z-10">
                    <span className="text-6xl font-bold text-white font-mono tracking-tighter">
                        {Math.round(speed)}
                    </span>
                    <span className="text-sm text-neon-blue font-bold tracking-widest uppercase mt-1">
                        MPH
                    </span>
                </div>
            </div>

            <div className="mt-8 text-neon-green font-mono text-sm tracking-widest animate-pulse">
                SPINNING UP DIAGNOSTICS...
            </div>

            {/* Background decoration lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
                <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
            </div>
        </div>
    );
}
