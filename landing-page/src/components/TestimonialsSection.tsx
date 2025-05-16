import styles from './styles/TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const testimonios = [
    { nombre: 'Ana', mensaje: '¡Me encantaron las clases!' },
    { nombre: 'Laura', mensaje: 'Muy recomendable y profesional.' },
    { nombre: 'Micaela', mensaje: 'Ahora entreno feliz todos los días.' },
  ];

  return (
    <section id="testimonios" className={styles.section}>
      <h2>Testimonios</h2>
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
