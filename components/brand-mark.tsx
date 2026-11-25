import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-mark${light ? " brand-mark--light" : ""}`} href="/" aria-label="Conexión, inicio">
      conexión
    </Link>
  );
}
