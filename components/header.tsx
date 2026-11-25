import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

const links = [
  ["Quiénes somos", "/quienes-somos"],
  ["Comunidades", "/comunidades"],
  ["Reuniones", "/reuniones"],
  ["Contacto", "/contacto"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
        <Link className="button button--dark header-action" href="/visitanos">Visitanos</Link>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú">Menú</summary>
          <nav>
            {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link href="/oracion">Oración y agradecimientos</Link>
            <Link href="/decidi-seguir-a-jesus">Decidí seguir a Jesús</Link>
            <Link href="/donar">Donar</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
