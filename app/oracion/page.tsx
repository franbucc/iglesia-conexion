import { PageHero } from "@/components/page-hero";
import { ConnectionForm } from "@/components/forms/connection-form";

export const metadata = { title: "Oración y agradecimientos" };

export default function PrayerPage() {
  return <><PageHero eyebrow="No estás solo" title="Queremos orar por vos."><p>También queremos celebrar con vos. Compartinos tu pedido o agradecimiento.</p></PageHero><section className="form-section"><div className="shell form-layout"><div><span className="eyebrow">Oración y agradecimientos</span><h2>Tu historia importa.</h2><p>El mensaje será recibido de manera privada por el equipo de Conexión.</p></div><ConnectionForm type="prayer" buttonLabel="Enviar mensaje" /></div></section></>;
}
