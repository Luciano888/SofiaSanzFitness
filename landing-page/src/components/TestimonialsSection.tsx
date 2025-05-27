import styles from './styles/TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const testimonios = [
    { nombre: 'Ana', mensaje: 'Nunca pensé que un plan online pudiera tener tanto impacto en mi vida. Empecé sin motivación, con muchas dudas y un poco de miedo, pero el seguimiento personalizado y la claridad de cada rutina me ayudaron a comprometerme conmigo misma. Hoy me siento más fuerte, con más energía y, lo más importante, feliz con mi proceso. ¡Gracias por acompañarme en cada paso!' },
    { nombre: 'Laura', mensaje: 'Probé muchísimos métodos y rutinas antes, pero siempre sentía que me dejaban sola. Esta vez fue diferente: el plan es súper completo, los videos me ayudaron a corregir posturas y los e-books me cambiaron la forma de alimentarme. Además, tener todo en una app me hizo la vida más fácil. Ya bajé 6kg y gané mucha confianza en mí misma.' },
    { nombre: 'Micaela', mensaje: 'Lo que más valoro es la contención. No se trata solo de entrenar, sino de entender mi cuerpo, mis límites y cómo cuidarme. El enfoque es integral, y eso marca la diferencia. Recibo seguimiento constante, ajustes en los entrenamientos según mi avance, y siempre me siento escuchada. Recomiendo este método a cualquiera que busque resultados reales y duraderos.' },
  ];

  return (
    <section id="testimonios" className={styles.section}>
      <h2 className={styles.titulo}>Testimonios</h2>
      <div className={styles.testimonios}>
        {testimonios.map((t) => (
          <div key={t.nombre} className={styles.card}>
            <p>"{t.mensaje}"</p>
            <strong>- {t.nombre}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
