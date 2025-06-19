// HeroSlider.tsx
"use client";
import styles from "./styles/HeroSlider.module.css";

export default function HeroSlider() {
  return (
    <section className={styles.hero}>
      <img
        src="/sofia-horizontal2.jpg"
        alt="Entrenamiento"
        className={styles.backgroundImage}
      />
      <div className={styles.overlayText}>
        <h1>ENTRENEMOS JUNTAS</h1>
        <p>Transformá tu cuerpo y mente</p>
      </div>
    </section>
  );
}
