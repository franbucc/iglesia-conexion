import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { UnderConstruction } from "@/components/under-construction";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://conexioniglesia.com"),
  title: { default: "Iglesia Conexión", template: "%s | Iglesia Conexión" },
  description: site.description,
  openGraph: { title: "Iglesia Conexión", description: site.description, locale: "es_AR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isSiteLive = process.env.NEXT_PUBLIC_SITE_MODE === "live";

  return (
    <html lang="es">
      <body>
        {isSiteLive ? (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        ) : (
          <UnderConstruction />
        )}
      </body>
    </html>
  );
}
