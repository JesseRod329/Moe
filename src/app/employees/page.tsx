'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import EmployeeAuth from '@/components/EmployeeAuth';

export default function EmployeesPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('tasks');
    const [employeeName, setEmployeeName] = useState('');

    // Check login status on mount
    useEffect(() => {
        const loggedIn = sessionStorage.getItem('employeeLoggedIn') === 'true';
        const name = sessionStorage.getItem('employeeName') || 'Technician';
        setIsLoggedIn(loggedIn);
        setEmployeeName(name);
        setIsLoading(false);
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setEmployeeName(sessionStorage.getItem('employeeName') || 'Technician');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('employeeLoggedIn');
        sessionStorage.removeItem('employeeName');
        setIsLoggedIn(false);
    };

    // Live data placeholders
    const [tasks, setTasks] = useState<any[]>([]);
    const [inventory, setInventory] = useState<any[]>([]);

    useEffect(() => {
        if (isLoggedIn) {
            // fetchTasks();
            // fetchInventory();
        }
    }, [isLoggedIn]);

    // Show loading state
    if (isLoading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-neon-green/30 border-t-neon-green rounded-full animate-spin" />
            </div>
        );
    }

    // Show login page if not logged in
    if (!isLoggedIn) {
        return <EmployeeAuth onLogin={handleLogin} />;
    }

    // Show employee dashboard
    return (
        <div className="bg-black min-h-screen pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-40">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Employee Portal</h1>
                        <p className="text-gray-400">Welcome back, <span className="text-neon-green">{employeeName}</span>.</p>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <button
                            onClick={() => setActiveTab('tasks')}
                            className={`px-4 py-2 rounded-lg font-bold transition-colors ${activeTab === 'tasks' ? 'bg-neon-green text-black' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                        >
                            My Tasks
                        </button>
                        <button
                            onClick={() => setActiveTab('database')}
                            className={`px-4 py-2 rounded-lg font-bold transition-colors ${activeTab === 'database' ? 'bg-neon-blue text-black' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                        >
                            Parts Database
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded-lg font-bold bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {activeTab === 'tasks' && (
                    <div className="grid grid-cols-1 gap-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Current Assignments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tasks.length > 0 ? tasks.map((task) => (
                                <div key={task.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-neon-green/50 transition-colors group">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${task.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                            {task.priority} Priority
                                        </span>
                                        <span className="text-gray-500 text-sm">{task.due}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">{task.title}</h3>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className={`text-sm font-medium ${task.status === 'In Progress' ? 'text-neon-blue' : task.status === 'Completed' ? 'text-neon-green' : 'text-gray-400'}`}>
                                            {task.status}
                                        </span>
                                        <button className="text-sm text-white bg-white/10 px-3 py-1 rounded hover:bg-white/20">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-full py-20 text-center bg-white/5 border border-white/10 rounded-xl">
                                    <p className="text-gray-500">No tasks assigned yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'database' && (
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Parts Inventory</h2>
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                            <table className="min-w-full divide-y divide-white/10">
                                <thead className="bg-black/50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Part Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock Level</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {inventory.length > 0 ? inventory.map((item) => (
                                        <tr key={item.id} className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neon-green">{item.stock}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.location}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-neon-blue hover:text-white transition-colors">Request Restock</button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-10 text-center text-gray-500">
                                                Inventory data coming soon.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
