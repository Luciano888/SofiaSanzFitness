"use client";
import styles from "./styles/AboutMeSection.module.css";

export default function AboutMeSection() {
  return (
    <section id="sobremi" className={styles.aboutSection}>
      <div className={styles.imageWrapper}>
        <img src="/sobremi.jpeg" alt="Sofía Sanz" className={styles.image} />
      </div>

      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Sobre mí</h2>
        <p className={styles.description}>
          Soy atleta y entrenadora hace más de 10 años. Estudié en las mejores
          academias de Buenos Aires y me preparé a nivel competitivo con los
          mejores preparadores del mundo. Di mis propios workshops en distintos
          lugares de Argentina. Yo transformé mi propio cuerpo año a año ganando
          los mejores reconocimientos a nivel deportivo en Sudamérica. Hoy me
          dedico a ayudar a las personas a cambiar sus hábitos, llevándolas a
          una vida más saludable, valorando cada progreso y sosteniéndolos a lo
          largo del tiempo. Mi vocación hoy por hoy no es solo transformar
          cuerpos sino la relación de las personas con la actividad física y la
          alimentación saludable, aceptándose más y castigándose menos. Quiero
          ayudarte a cambiar eso que tanto te molesta y sé que puedo hacerlo.
          ¡Comencemos tu transformación!
        </p>
      </div>
    </section>
  );
}
