import { BrandMark } from "@/components/brand-mark";
import styles from "./under-construction.module.css";

export function UnderConstruction() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <BrandMark />
        </div>
        <span>Iglesia Conexión</span>
      </header>

      <section className={styles.content}>
        <p className={styles.status}>
          <i aria-hidden="true" /> Próximamente
        </p>

        <h1>
          Estamos construyendo
          <br />
          <em>algo nuevo.</em>
        </h1>

        <p className={styles.copy}>
          Somos conexión, amor y comunidad. Muy pronto vas a encontrar acá un nuevo
          espacio para conocernos y compartir la vida.
        </p>

      </section>

      <footer className={styles.footer}>
        <span>Buenos Aires, Argentina</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
