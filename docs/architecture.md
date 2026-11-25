# Arquitectura evolutiva

## Principio

Las páginas consumen datos tipados desde una única capa de contenido. Hoy esa capa vive en `lib/content.ts`; más adelante puede leer Supabase sin modificar las vistas ni duplicar páginas.

## Dominios previstos

- `communities`: comunidades y sus identidades visuales.
- `meetings`: reuniones, sedes, fechas y recurrencias.
- `events`: actividades y próximos eventos.
- `submissions`: oración, agradecimientos, contacto y decisiones de fe.
- `messages`: mensajes y referencias de YouTube.
- `courses`: Academia Conexión, fechas, cupos e inscripciones.
- `donation_settings`: alias, instrucciones y código QR.
- `profiles`: usuarios y roles administrativos.

## Roles futuros

- `admin`: configuración general y gestión de accesos.
- `editor`: eventos, cursos, reuniones y contenido público.
- `pastoral`: lectura y seguimiento de formularios sensibles.

## Privacidad

Los pedidos de oración, datos de contacto y decisiones de fe no deben quedar expuestos en el cliente ni en registros públicos. El endpoint actual no guarda información hasta que exista una base configurada con permisos por rol.

## Despliegue

El proyecto se construye con `npm run build` y se ejecuta con `npm run start`. En Hostinger se deberán cargar las variables de entorno del archivo `.env.example`.
