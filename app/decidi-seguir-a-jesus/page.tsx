import { PageHero } from "@/components/page-hero";
import { ConnectionForm } from "@/components/forms/connection-form";

export const metadata = { title: "Decidí seguir a Jesús" };

export default function DecisionPage() {
  return <><PageHero eyebrow="Un nuevo comienzo" title="Decidí seguir a Jesús."><p>Es una decisión importante y queremos acompañarte en tus próximos pasos.</p></PageHero><section className="form-section"><div className="shell form-layout"><div><span className="eyebrow">Queremos acompañarte</span><h2>No tenés que caminar solo.</h2><p>Dejanos tus datos para que alguien de nuestro equipo pueda ponerse en contacto con vos.</p></div><ConnectionForm type="decision" buttonLabel="Quiero dar el próximo paso" showMessage={false} /></div></section></>;
}
