import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { communities } from "@/lib/content";

export const metadata = { title: "Comunidades" };

export default function CommunitiesPage() {
  return (
    <>
      <PageHero eyebrow="Hay un lugar para vos" title="Comunidades">
        <p>Distintas etapas, edades e historias. Una misma casa y una misma fe.</p>
      </PageHero>
      <section className="communities-preview communities-preview--page"><div className="shell"><div className="community-grid">
        {communities.map((community) => (
          <Link className="community-card community-card--large" href={`/comunidades/${community.slug}`} key={community.slug} style={{ background: community.accent, color: community.foreground }}>
            <span>{community.eyebrow}</span><h2>{community.name}</h2><p>{community.description}</p><b>Conocer la comunidad →</b>
          </Link>
        ))}
      </div></div></section>
    </>
  );
}
