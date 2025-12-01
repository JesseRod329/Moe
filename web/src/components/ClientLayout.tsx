'use client';

import { useState, useEffect } from 'react';
import SpeedometerLoader from './SpeedometerLoader';
import Layout from './Layout';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <SpeedometerLoader onFinished={() => setLoading(false)} />}
            <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <Layout>{children}</Layout>
            </div>
        </>
    );
}
