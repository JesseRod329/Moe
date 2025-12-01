import BookingDetailClient from './BookingDetailClient';

// Required for static export with dynamic routes
// Return empty array - this admin page will work via client-side routing
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
    // Empty array means no static pages will be generated
    // The page will still work via client-side navigation
    return [];
}

export default function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return <BookingDetailClient params={params} />;
}
