"use client";
import { useState, useRef, useEffect } from "react";
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
        "Te envío el chequeo de las 6 semanas. Bajé 8kg, me cambió el cuerpo, estoy fascinada con el resultado, el abdominal plano.",
      imagen: "/testimonio4.jpg",
    },
    {
      mensaje:
        "Mi semana 3 y 4. Tengo el cuerpo más definido, pude subir 3 kilos estoy muy contenta, a mí me cuesta mucho subir de peso así que gracias por ayudarme en esta meta que tengo.",
      imagen: "/testimonio5.jpg",
    },
    {
      mensaje:
        "Ya terminé el quinto challenge! Me fue súper bien, vi más cambios con el trabajo pesado e intenso! Vamos por más.",
      imagen: "/testimonio6.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardOffset, setCardOffset] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      const style = getComputedStyle(cardRef.current);
      const marginRight = parseInt(style.marginRight || "0", 10);
      setCardOffset(width + marginRight);
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, testimonios.length - 1)
    );
  };

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
          <div
            className={styles.sliderInner}
            style={{
              transform: `translateX(-${currentIndex * cardOffset}px)`,
            }}
          >
            {testimonios.map((testimonio, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className={styles.tarjetaTestimonio}
              >
                <img
                  src={testimonio.imagen}
                  alt={`Testimonio ${index + 1}`}
                />
                <p className={styles.mensaje}>{testimonio.mensaje}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.flecha}
          onClick={handleNext}
          disabled={currentIndex >= testimonios.length - 1}
        >
          ▶
        </button>
      </div>
    </section>
  );
}

