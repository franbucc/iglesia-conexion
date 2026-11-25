import { PageHero } from "@/components/page-hero";
import { ConnectionForm } from "@/components/forms/connection-form";

export const metadata = { title: "Planeá tu visita" };

export default function VisitPage() {
  return <><PageHero eyebrow="Bienvenido a casa" title="Planeá tu visita"><p>Dejanos tus datos y nuestro equipo te acompaña para que sepas qué esperar.</p></PageHero><section className="form-section"><div className="shell form-layout"><div><span className="eyebrow">Tu primera vez</span><h2>Nos va a encantar conocerte.</h2><p>Completá el formulario y te contactamos con horarios, ubicación y toda la información necesaria.</p></div><ConnectionForm type="contact" buttonLabel="Quiero visitar Conexión" showMessage={false} /></div></section></>;
}
