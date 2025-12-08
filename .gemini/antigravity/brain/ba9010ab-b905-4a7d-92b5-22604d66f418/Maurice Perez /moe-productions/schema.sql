-- Customers table
create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  created_at timestamptz default now()
);

-- Bookings table
create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id) on delete cascade,
  bike_type text not null, -- 'e-bike', 'e-scooter', 'other'
  main_issue text not null,
  preferred_time_window text,
  diagnostic_ack boolean default false,
  status text not null default 'new', -- 'new', 'confirmed', 'completed', 'cancelled'
  source text default 'website',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Optional: services table for internal use
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  base_price numeric(10,2),
  category text, -- 'tires', 'drive', 'brakes', 'custom', 'maintenance'
  active boolean default true
);

-- Optional: join table if you want to attach services to bookings later
create table if not exists booking_services (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  service_id uuid references services(id) on delete restrict,
  quantity integer default 1
);

-- Simple updated_at trigger
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger bookings_set_updated_at
before update on bookings
for each row
execute procedure set_updated_at();
