import { PageHero } from "@/components/page-hero";

export const metadata = { title: "Donar" };

export default function DonatePage() {
  return <><PageHero eyebrow="Generosidad" title="Somos parte de algo más grande."><p>Tu generosidad nos permite seguir construyendo comunidad y acercando el mensaje de Jesús.</p></PageHero><section className="content-section"><div className="shell donation-card"><div><span className="eyebrow">Transferencia</span><h2>Datos para donar</h2><p>Los datos bancarios y el QR se incorporarán cuando sean entregados por la iglesia.</p></div><div className="qr-placeholder" aria-label="Espacio reservado para código QR">QR</div></div></section></>;
}
