import BookingDetailClient from './BookingDetailClient';

// Required for static export with dynamic routes
export async function generateStaticParams() {
    // Return empty array - this page is client-side only
    // Static pages will be generated at runtime via client-side routing
    return [];
}

export default function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return <BookingDetailClient params={params} />;
}
