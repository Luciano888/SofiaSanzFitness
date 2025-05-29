"use client";
import styles from "./styles/AboutMeSection.module.css";

export default function AboutMeSection() {
  return (
    <section id="sobremi" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="sobremi.jpeg"
            alt="Sofía Sanz"
            className={styles.image}
          />
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Sobre mí</h2>
          <p className={styles.description}>
            Soy atleta y entrenadora hace mas de 10 años. Estudie en las mejores academias de buenos aires y me prepare a nivel competitivo con los mejores preparadores del mundo. Di mis propios workshops en distintos lugares de Argentina. Yo trasforme mi propio cuerpo año a año ganando los mejores reconocimientos a nivel deportivo en Sudamerica. Hoy me dedico a ayudar a las personas a cambiar sus habitos, llevándolas a una vida mas saludable, valorando cada progreso y sosteniéndolos a lo largo del tiempo. Mi vocación hay por hoy, no es solo transformar cuerpos sino la relación de las personas con la actividad física y la alimentación saludable, aceptándose mas y castigándose menos. Quiero ayudarte a cambiar eso que tanto te molesta y se que puedo hacerlo. Comencemos tu transformación!
          </p>
        </div>
      </div>
    </section>
  );
}
