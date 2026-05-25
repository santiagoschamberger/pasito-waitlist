alter table public.embajadores
  add column if not exists pasito_reason text not null default '';

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'embajadores_pasito_reason_length'
      and conrelid = 'public.embajadores'::regclass
  ) then
    alter table public.embajadores
      add constraint embajadores_pasito_reason_length
      check (char_length(pasito_reason) <= 600)
      not valid;
  end if;
end $$;

alter table public.embajadores
  validate constraint embajadores_pasito_reason_length;
