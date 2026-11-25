import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { meetings } from "@/lib/content";

export const metadata = { title: "Reuniones" };

export default function MeetingsPage() {
  return (
    <><PageHero eyebrow="Te esperamos" title="Reuniones"><p>Vení como estás. Queremos conocerte y compartir este tiempo con vos.</p></PageHero>
      <section className="content-section"><div className="shell meeting-list">{meetings.map((meeting) => <article key={meeting.id}>
        <div><span>{meeting.day}</span><strong>{meeting.time} hs</strong></div><div><h2>{meeting.title}</h2><p>{meeting.description}</p><small>{meeting.location}</small></div>
      </article>)}</div></section>
      <section className="simple-cta"><div className="shell"><h2>¿Es tu primera vez?</h2><p>Contanos y te ayudamos a planear tu visita.</p><Link className="button button--light" href="/visitanos">Planeá tu visita</Link></div></section>
    </>
  );
}
