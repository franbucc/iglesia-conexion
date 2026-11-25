import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <BrandMark light />
          <p>Una iglesia relevante transformando vidas con el mensaje de Jesús.</p>
        </div>
        <div>
          <span className="footer-label">Conocenos</span>
          <Link href="/quienes-somos">Quiénes somos</Link>
          <Link href="/comunidades">Comunidades</Link>
          <Link href="/reuniones">Reuniones</Link>
        </div>
        <div>
          <span className="footer-label">Próximos pasos</span>
          <Link href="/oracion">Pedido de oración</Link>
          <Link href="/decidi-seguir-a-jesus">Decidí seguir a Jesús</Link>
          <Link href="/donar">Donar</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Iglesia Conexión</span>
        <span>Buenos Aires, Argentina</span>
      </div>
    </footer>
  );
}
