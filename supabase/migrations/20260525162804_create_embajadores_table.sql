create table if not exists public.embajadores (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  instagram text not null,
  location text not null,
  email text not null,
  whatsapp text not null,
  status text not null default 'new',
  source text not null default 'embajadores_landing',
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.embajadores enable row level security;

create index if not exists embajadores_created_at_idx
  on public.embajadores (created_at desc);

create index if not exists embajadores_email_idx
  on public.embajadores (email);
