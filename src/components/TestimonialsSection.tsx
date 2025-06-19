'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import styles from './styles/TestimonialsSection.module.css';

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

  return (
<section className={styles.testimonios} id="testimonios">
  <h2 className={styles.titulo}>Testimonios</h2>

  <div className={styles.sliderWrapper}>
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className={styles.slider}
    >
      {testimonios.map((testimonio, index) => (
        <SwiperSlide key={index} className={styles.tarjetaTestimonio}>
          <img src={testimonio.imagen} alt={`Testimonio ${index + 1}`} />
          <p className={styles.mensaje}>{testimonio.mensaje}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
}
