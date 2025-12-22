'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AdminAuthProps {
    onLogin: () => void;
}

export default function AdminAuth({ onLogin }: AdminAuthProps) {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Admin credentials (only for Moe)
    const ADMIN_CREDENTIALS = {
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
        if (identifier.toLowerCase() === ADMIN_CREDENTIALS.username.toLowerCase() &&
            password === ADMIN_CREDENTIALS.password) {
            // Store login state
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminName', 'Moe');
            onLogin();
        } else {
            setError('Invalid admin credentials');
        }

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
                    <p className="text-gray-400">Admin Dashboard</p>
                    <p className="text-red-400 text-sm mt-2">🔒 Authorized Access Only</p>
                </div>

                {/* Auth Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-white">Admin Login</h2>
                        <p className="text-gray-400 text-sm mt-1">Enter your admin credentials</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                                placeholder="Enter admin username"
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
                                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl hover:from-red-600 hover:to-orange-600 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Authenticating...
                                </span>
                            ) : (
                                'Access Admin Panel'
                            )}
                        </button>
                    </form>
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
