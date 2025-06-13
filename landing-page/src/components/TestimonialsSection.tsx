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
  const [maxIndex, setMaxIndex] = useState(testimonios.length - 1);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calcularMaxIndex = () => {
      if (cardRef.current && wrapperRef.current) {
        const wrapperWidth = wrapperRef.current.clientWidth;
        const isMobile = window.innerWidth <= 768;

        const cardWidth = isMobile
          ? wrapperWidth
          : cardRef.current.offsetWidth;

        const style = getComputedStyle(cardRef.current);
        const marginRight = parseInt(style.marginRight || "0", 10);
        const totalCardOffset = cardWidth + marginRight;

        setCardOffset(totalCardOffset);

        const visibleCards = Math.ceil(wrapperWidth / totalCardOffset);
        const maxVisibleIndex = testimonios.length - visibleCards;

        setMaxIndex(Math.max(0, maxVisibleIndex));
      }
    };

    calcularMaxIndex();
    window.addEventListener("resize", calcularMaxIndex);
    return () => window.removeEventListener("resize", calcularMaxIndex);
  }, [testimonios.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
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

        <div className={styles.sliderWrapper} ref={wrapperRef}>
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
                <img src={testimonio.imagen} alt={`Testimonio ${index + 1}`} />
                <p className={styles.mensaje}>{testimonio.mensaje}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.flecha}
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
        >
          ▶
        </button>
      </div>
    </section>
  );
}
