# Iglesia Conexión

Base escalable para el sitio institucional de Iglesia Conexión.

## Stack

- Next.js 16 con App Router
- React 19 y TypeScript
- CSS modularizado mediante tokens globales de marca
- API interna preparada para conectar Supabase

## Desarrollo

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Por defecto se muestra la página temporal **En construcción**. Para volver a mostrar
el sitio completo, agregar `NEXT_PUBLIC_SITE_MODE=live` a `.env.local`.

## Variables de entorno

Copiar `.env.example` como `.env.local`. Los formularios permanecen desactivados hasta configurar Supabase, para no perder ni exponer datos personales.

## Contenido

Los contenidos estructurados se encuentran en `lib/content.ts`. Esta capa se puede reemplazar por Supabase sin cambiar los componentes visuales.

## Próximas integraciones

1. Supabase: formularios, autenticación, almacenamiento y panel administrativo.
2. YouTube: mensajes y transmisiones.
3. QR: rutas públicas de oración, agradecimientos y donaciones.
4. Academia: cursos, inscripciones y comprobantes.
5. Hostinger: despliegue automático desde GitHub.
