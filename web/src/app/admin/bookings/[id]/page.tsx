import BookingDetailClient from './BookingDetailClient';

// Required for static export with dynamic routes
export async function generateStaticParams() {
    // For static export, we need to return at least an empty array
    // Since this is an admin page accessed client-side, we return empty
    // The page will work via client-side routing after deployment
    return [];
}

// Disable static generation for this dynamic route
export const dynamicParams = true;
export const dynamic = 'force-dynamic';

export default function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return <BookingDetailClient params={params} />;
}
