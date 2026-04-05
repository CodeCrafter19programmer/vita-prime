-- VitaPrime Uganda — Supabase Database Schema
-- Run this in Supabase SQL Editor

-- ─────────────────────────────────────────
-- PRODUCTS
-- ─────────────────────────────────────────
create table if not exists products (
  id               bigserial primary key,
  slug             text unique not null,
  name             text not null,
  subtitle         text,
  category         text not null,
  tag              text default '',
  price            integer not null,          -- in UGX
  original_price   integer,
  rating           numeric(2,1) default 5.0,
  review_count     integer default 0,
  description      text,
  bottle_hue       text default '155',
  cap_color        text default '#4A7D42',
  in_stock         boolean default true,
  image_url        text,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- Row Level Security
alter table products enable row level security;
create policy "Anyone can read products" on products for select using (true);
create policy "Only admins can modify products" on products for all
  using (auth.jwt() ->> 'role' = 'admin');

-- ─────────────────────────────────────────
-- ORDERS
-- ─────────────────────────────────────────
create type order_status as enum ('pending','confirmed','dispatched','delivered','cancelled');
create type payment_method as enum ('mtn','airtel','card','cod');

create table if not exists orders (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid references auth.users(id),
  customer_name    text not null,
  customer_phone   text not null,
  customer_email   text,
  delivery_address text not null,
  delivery_city    text not null default 'Kampala',
  items            jsonb not null,             -- [{product_id, name, qty, price}]
  subtotal         integer not null,
  delivery_fee     integer default 5000,
  total            integer not null,
  status           order_status default 'pending',
  payment_method   payment_method not null,
  payment_ref      text,
  notes            text,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

alter table orders enable row level security;
create policy "Users can read own orders" on orders for select
  using (auth.uid() = user_id);
create policy "Anyone can create orders" on orders for insert
  with check (true);

-- ─────────────────────────────────────────
-- NEWSLETTER SUBSCRIBERS
-- ─────────────────────────────────────────
create table if not exists newsletter_subscribers (
  id            bigserial primary key,
  email         text unique not null,
  subscribed_at timestamptz default now()
);

alter table newsletter_subscribers enable row level security;
create policy "Only admins can read subscribers" on newsletter_subscribers
  for select using (auth.jwt() ->> 'role' = 'admin');
create policy "Anyone can subscribe" on newsletter_subscribers
  for insert with check (true);

-- ─────────────────────────────────────────
-- REVIEWS
-- ─────────────────────────────────────────
create table if not exists reviews (
  id          bigserial primary key,
  product_id  bigint references products(id) on delete cascade,
  user_id     uuid references auth.users(id),
  rating      int check (rating between 1 and 5),
  title       text,
  body        text,
  verified    boolean default false,
  created_at  timestamptz default now()
);

alter table reviews enable row level security;
create policy "Anyone can read reviews" on reviews for select using (true);
create policy "Authenticated users can write reviews" on reviews for insert
  with check (auth.role() = 'authenticated');

-- ─────────────────────────────────────────
-- SEED PRODUCTS
-- ─────────────────────────────────────────
insert into products (slug, name, subtitle, category, tag, price, original_price, rating, review_count, description, bottle_hue, cap_color) values
  ('wellwoman-original', 'Wellwoman Original',   'Complete Women''s Multi',      'womens',  'bestseller', 42000, 52000, 5.0, 412, 'Complete multivitamin formula designed for women.',                        '340', '#C9627A'),
  ('wellman-sport',      'Wellman Sport',         'Performance Men''s Multi',     'mens',    'bestseller', 48000, null,  5.0, 287, 'Performance multivitamin for active men.',                                 '155', '#2D7A4F'),
  ('omega-3-pro',        'Omega-3 Pro Max',       'Ultra-Pure Fish Oil',          'omega',   'new',        38000, 45000, 4.0, 156, 'Ultra-pure concentrated fish oil. 1000mg EPA+DHA per capsule.',           '210', '#2A6090'),
  ('wellkid-gummies',    'Wellkid Smart',         'Children''s Gummies',          'kids',    'bestseller', 35000, null,  5.0, 534, 'Delicious sugar-free gummies for growing children aged 4–12.',            '85',  '#5A8F2A'),
  ('collagen-beauty',    'Collagen Beauty',       'Marine Collagen + Vit C',      'beauty',  'new',        55000, 65000, 5.0, 198, 'Marine collagen with vitamin C for skin, nails and hair.',                '28',  '#C07835'),
  ('vitamin-d3',         'Vitamin D3 5000IU',     'High-Strength Sunshine Vitamin','vitamins','sale',      28000, 38000, 4.0, 321, 'High-strength Vitamin D3 softgels for immunity & bone density.',          '45',  '#B08820'),
  ('immune-defence',     'Immune Defence',        'Immunity Complex',             'immune',  'bestseller', 32000, 40000, 5.0, 445, 'Powerful immunity complex with Vitamin C, zinc & elderberry.',            '165', '#1A7060'),
  ('glucosamine-max',    'Glucosamine Max',       'Joint & Bone Formula',         'joint',   '',           45000, null,  4.0, 89,  'Advanced joint formula with glucosamine, chondroitin & MSM.',             '25',  '#9A5820');
