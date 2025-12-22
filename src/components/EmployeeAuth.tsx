'use client';

import { useState } from 'react';
import Link from 'next/link';

interface EmployeeAuthProps {
    onLogin: () => void;
}

export default function EmployeeAuth({ onLogin }: EmployeeAuthProps) {
    const [mode, setMode] = useState<'login' | 'signup'>('login');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Real credentials
    const REAL_CREDENTIALS = {
        username: 'MoeP',
        password: 'Winter26'
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check credentials
        if (identifier.toLowerCase() === REAL_CREDENTIALS.username.toLowerCase() &&
            password === REAL_CREDENTIALS.password) {
            // Store login state
            sessionStorage.setItem('employeeLoggedIn', 'true');
            sessionStorage.setItem('employeeName', identifier);
            onLogin();
        } else {
            setError('Invalid credentials');
        }

        setIsLoading(false);
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // For demo, just show success and switch to login
        setMode('login');
        setError('');
        alert('Account created! Please login with your credentials.');

        setIsLoading(false);
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center px-6 py-20">
            <div className="w-full max-w-md">
                {/* Logo/Header */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-block">
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Moe <span className="text-neon-green">Productions</span>
                        </h1>
                    </Link>
                    <p className="text-gray-400">Employee Portal</p>
                </div>

                {/* Auth Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    {/* Tabs */}
                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={() => setMode('login')}
                            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${mode === 'login'
                                    ? 'bg-neon-green text-black'
                                    : 'bg-white/5 text-gray-400 hover:text-white'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setMode('signup')}
                            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${mode === 'signup'
                                    ? 'bg-neon-green text-black'
                                    : 'bg-white/5 text-gray-400 hover:text-white'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    {mode === 'login' && (
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Email, Phone, or Employee ID
                                </label>
                                <input
                                    type="text"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all"
                                    placeholder="Enter email, phone, or ID"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-neon-green text-black font-bold rounded-xl hover:bg-neon-green/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,127,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Logging in...
                                    </span>
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </form>
                    )}

                    {/* Signup Form */}
                    {mode === 'signup' && (
                        <form onSubmit={handleSignup} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Email, Phone, or Employee ID
                                </label>
                                <input
                                    type="text"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all"
                                    placeholder="Enter email, phone, or ID"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all"
                                    placeholder="Create a password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-neon-green text-black font-bold rounded-xl hover:bg-neon-green/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,127,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Creating account...
                                    </span>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </form>
                    )}
                </div>

                {/* Back Link */}
                <div className="mt-8 text-center">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
