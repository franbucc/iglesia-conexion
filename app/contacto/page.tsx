import { PageHero } from "@/components/page-hero";
import { ConnectionForm } from "@/components/forms/connection-form";
import { site } from "@/lib/content";

export const metadata = { title: "Contacto" };

export default function ContactPage() {
  return <><PageHero eyebrow="Hablemos" title="Queremos conocerte."><p>Si tenés una pregunta o querés saber más sobre Conexión, escribinos.</p></PageHero><section className="form-section"><div className="shell form-layout"><div><span className="eyebrow">Contacto</span><h2>Conectate con nosotros.</h2><p>{site.email}<br />{site.address}</p></div><ConnectionForm type="contact" /></div></section></>;
}
