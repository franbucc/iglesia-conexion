import { PageHero } from "@/components/page-hero";
import { values } from "@/lib/content";

export const metadata = { title: "Quiénes somos" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Nuestra casa" title="Somos Conexión.">
        <p>Una iglesia donde las personas pueden encontrarse con Jesús, construir comunidad y descubrir propósito.</p>
      </PageHero>
      <section className="content-section">
        <div className="shell editorial-grid">
          <div><span className="eyebrow">Misión</span><h2>Formar discípulos de Cristo con un profundo amor por la Palabra de Dios.</h2></div>
          <p>Llenos del Espíritu Santo, queremos influenciar cada esfera de la sociedad con una fe viva, cercana y transformadora.</p>
        </div>
      </section>
      <section className="content-section content-section--soft">
        <div className="shell"><span className="eyebrow">Lo que valoramos</span><div className="values-grid">
          {values.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div></div>
      </section>
    </>
  );
}
