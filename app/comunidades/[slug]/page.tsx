import Link from "next/link";
import { notFound } from "next/navigation";
import { communities } from "@/lib/content";

export function generateStaticParams() { return communities.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = communities.find((item) => item.slug === slug);
  return { title: community?.name || "Comunidad" };
}

export default async function CommunityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = communities.find((item) => item.slug === slug);
  if (!community) notFound();

  return (
    <>
      <section className="community-hero" style={{ background: community.accent, color: community.foreground }}>
        <div className="shell"><span className="eyebrow">{community.eyebrow}</span><h1>{community.name}</h1><p>{community.description}</p></div>
      </section>
      <section className="content-section"><div className="shell community-info">
        <div><span className="eyebrow">Para quién</span><h2>{community.audience}</h2></div>
        <div><span className="eyebrow">Nos encontramos</span><h2>{community.meeting}</h2></div>
      </div></section>
      <section className="simple-cta"><div className="shell"><h2>¿Querés ser parte?</h2><p>Escribinos y te contamos cómo sumarte a {community.name}.</p><Link className="button button--light" href="/contacto">Quiero conectarme</Link></div></section>
    </>
  );
}
