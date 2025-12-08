# Supabase MCP Setup Guide

## Setting up Supabase MCP in Cursor

1. **Get your Supabase credentials:**
   - Go to your Supabase project dashboard: https://app.supabase.com
   - Navigate to Settings > API
   - Copy your:
     - Project URL
     - `anon` public key

2. **Configure MCP in Cursor:**
   - Open Cursor Settings
   - Go to Features > MCP
   - Add a new MCP server with:
     - **Name**: Supabase
     - **Command**: (This depends on your MCP setup - check your MCP documentation)
     - **Environment Variables**:
       - `SUPABASE_URL`: Your project URL
       - `SUPABASE_KEY`: Your anon key (or service role key for admin operations)

3. **Alternative: Direct Integration**
   If you're using Supabase MCP as a separate service, you may need to:
   - Install the Supabase MCP server package
   - Configure it with your credentials
   - Ensure it's accessible from Cursor

## Environment Variables

Create a `.env.local` file in the `web` directory with:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Database Setup

1. Run the schema from `web/supabase/schema.sql` in your Supabase SQL Editor
2. The schema includes:
   - `customers` table
   - `bookings` table (with `booking_date` and `booking_time` columns)
   - `services` table
   - `booking_services` join table

## Testing the Connection

Once set up, you can test the connection by:
1. Starting the dev server: `npm run dev`
2. Visiting the booking page: http://localhost:3002/booking
3. Trying to create a booking

## Troubleshooting

If you get "The string did not match the expected pattern" error:
- Ensure time slots are in `HH:MM:SS` format (already fixed in the code)
- Check that the database columns `booking_date` and `booking_time` exist
- Verify the schema has been applied correctly

