# Moe Productions - Electric Bike Service NYC

A Next.js web application for Moe Productions, an electric bike repair service in NYC.

## Features

- Booking system with calendar and time slot selection
- Real-time availability checking
- Admin dashboard for managing bookings
- Responsive design with modern UI

## Tech Stack

- **Framework**: Next.js 15.1.6
- **Styling**: Tailwind CSS 3.4
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JesseRod329/Moe.git
cd Moe
```

2. Install dependencies:
```bash
cd web
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the `web` directory:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up the database:
Run the SQL schema from `web/supabase/schema.sql` in your Supabase SQL editor.

5. Run the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:3002](http://localhost:3002)

## Project Structure

```
web/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   └── lib/              # Utilities and clients
├── supabase/
│   └── schema.sql       # Database schema
└── public/              # Static assets
```

## Features

### Booking System
- Calendar date picker
- Time slot selection (9 AM - 5 PM)
- Real-time availability checking
- Prevents double-booking

### Admin Dashboard
- View all bookings
- Update booking status
- Filter by status and bike type

## License

MIT

# Trigger deployment
