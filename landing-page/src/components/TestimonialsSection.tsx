import styles from "./styles/TestimonialsSection.module.css";

export default function TestimonialsSection() {
  const testimonios = [
    {
      mensaje:
        "¡Hablame de felicidad! Ya no sé de qué manera agradecerte por estos cambios. Obviamente falta muchísimo pero llevamos solo 5 meses y me enamoré de mí misma! Mil gracias.",
      imagen: "/testimonio1.jpg",
    },
    {
      mensaje:
        "El chequeo de mi segunda semana. ¡Estoy más que feliz con los progresos!",
      imagen: "/testimonio2.jpg",
    },
    {
      mensaje:
        "La verdad estoy más que sorprendido con el cambio, es impresionante como me cambió la forma de la cola, la tengo hecha una piedra literal. Matadoras las rutinas pero increíble los cambios que se generan.",
      imagen: "/testimonio3.jpg",
    },
  ];

  return (
    <section className={styles.testimonios} id="testimonios">
      <h2 className={styles.titulo}>Testimonios</h2>

      <div className={styles.filaTestimonios}>
        {testimonios.map((testimonio, index) => (
          <div key={index} className={styles.tarjetaTestimonio}>
            <img src={testimonio.imagen} alt={`Foto`} />
            <p className={styles.mensaje}>{testimonio.mensaje}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
