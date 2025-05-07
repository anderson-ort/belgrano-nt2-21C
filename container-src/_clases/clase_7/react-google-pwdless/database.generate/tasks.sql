create table tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  completed boolean default false,
  created_at timestamp default now()
);



insert into tasks (user_id, title, completed)
values 
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Comprar café', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Enviar informe semanal', true),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Revisar PRs en GitHub', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Planificar la reunión del lunes', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Estudiar PWA y Service Workers', true),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Actualizar dependencias del proyecto', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Leer documentación de Supabase', true),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Responder mails pendientes', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Hacer backup de la base de datos', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Diseñar nueva feature', true),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Escribir tests de integración', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Limpiar código legacy', true),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Preparar demo para el cliente', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Agregar validaciones al form', true),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Optimizar rendimiento en mobile', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Publicar nueva versión en staging', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Leer artículo sobre arquitectura hexagonal', true),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Testear funcionalidad offline', false),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Hacer deploy con GitHub Actions', true),
  ('349b0f3e-7750-4e11-9820-688d15a0cbd6', 'Revisar métricas de uso', false);
