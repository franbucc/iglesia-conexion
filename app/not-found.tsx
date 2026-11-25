import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div><span className="eyebrow">404</span><h1>Esta página no está disponible.</h1><Link className="button button--blue" href="/">Volver al inicio</Link></div></section>;
}
