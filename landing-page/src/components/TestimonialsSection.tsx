"use client";
import { useState } from "react";
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
    {
      mensaje:
        "Nunca pensé que podría volver a sentirme así con mi cuerpo. Gracias por todo el acompañamiento y empuje.",
      imagen: "/testimonio4.jpg",
    },
    {
      mensaje:
        "¡Cambió mi vida! Más energía, mejor ánimo y una figura que no creía posible.",
      imagen: "/testimonio5.jpg",
    },
    {
      mensaje:
        "Estoy feliz con el progreso que tuve. Tu guía fue clave, ¡gracias infinitas!",
      imagen: "/testimonio6.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, testimonios.length - 3)
    );
  };

  const visibleTestimonios = testimonios.slice(currentIndex, currentIndex + 3);

  return (
    <section className={styles.testimonios} id="testimonios">
      <h2 className={styles.titulo}>Testimonios</h2>

      <div className={styles.sliderContainer}>
        <button
          className={styles.flecha}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        <div className={styles.sliderWrapper}>
          {visibleTestimonios.map((testimonio, index) => (
            <div key={index} className={styles.tarjetaTestimonio}>
              <img src={testimonio.imagen} alt={`Testimonio ${index + 1}`} />
              <p className={styles.mensaje}>{testimonio.mensaje}</p>
            </div>
          ))}
        </div>

        <button
          className={styles.flecha}
          onClick={handleNext}
          disabled={currentIndex >= testimonios.length - 3}
        >
          ▶
        </button>
      </div>
    </section>
  );
}
