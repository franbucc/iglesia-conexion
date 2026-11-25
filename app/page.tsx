import Link from "next/link";
import { communities, meetings } from "@/lib/content";

export default function Home() {
  const meeting = meetings[0];
  return (
    <>
      <section className="home-hero">
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <div className="shell home-hero-inner">
          <span className="eyebrow eyebrow--light">Bienvenido a casa</span>
          <h1>Hay un lugar<br />para vos.</h1>
          <p>Somos una iglesia para gente que no iría a una iglesia. Somos conexión, amor y comunidad.</p>
          <div className="button-row">
            <Link className="button button--light" href="/visitanos">Planeá tu visita</Link>
            <Link className="text-link text-link--light" href="/quienes-somos">Conocé nuestra historia <span>→</span></Link>
          </div>
        </div>
        <div className="hero-words" aria-hidden="true">JESÚS · CASA · COMUNIDAD · PROPÓSITO ·</div>
      </section>

      <section className="intro-section">
        <div className="shell split-intro">
          <span className="section-index">01</span>
          <div>
            <span className="eyebrow">Esto es Conexión</span>
            <h2>Una iglesia relevante transformando vidas con el mensaje de Jesús.</h2>
            <Link className="text-link" href="/quienes-somos">Quiénes somos <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="meeting-band">
        <div className="shell meeting-layout">
          <div>
            <span className="eyebrow eyebrow--light">Nos encontramos</span>
            <h2>{meeting.day}<br /><strong>{meeting.time} hs</strong></h2>
          </div>
          <div className="meeting-detail">
            <p>{meeting.description}</p>
            <span>{meeting.location}</span>
            <Link className="button button--light" href="/reuniones">Ver reuniones</Link>
          </div>
        </div>
      </section>

      <section className="communities-preview">
        <div className="shell">
          <div className="section-heading">
            <div><span className="eyebrow">Encontrá tu lugar</span><h2>Comunidades</h2></div>
            <Link className="text-link" href="/comunidades">Ver todas <span>→</span></Link>
          </div>
          <div className="community-grid">
            {communities.slice(0, 6).map((community) => (
              <Link
                className="community-card"
                href={`/comunidades/${community.slug}`}
                key={community.slug}
                style={{ background: community.accent, color: community.foreground }}
              >
                <span>{community.eyebrow}</span>
                <h3>{community.name}</h3>
                <p>{community.description}</p>
                <b>Conocer más →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="next-steps">
        <div className="shell">
          <span className="eyebrow">Estamos para vos</span>
          <h2>Tu próximo paso puede empezar hoy.</h2>
          <div className="step-grid">
            <Link href="/oracion"><span>01</span><h3>Necesito oración</h3><b>Escribinos →</b></Link>
            <Link href="/decidi-seguir-a-jesus"><span>02</span><h3>Decidí seguir a Jesús</h3><b>Quiero saber más →</b></Link>
            <Link href="/contacto"><span>03</span><h3>Quiero conectarme</h3><b>Hablemos →</b></Link>
          </div>
        </div>
      </section>
    </>
  );
}
