"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./styles/PlansSection.module.css";
import {
  FaMobileAlt,
  FaAppleAlt,
  FaHeartbeat,
  FaBook,
  FaUserMd,
  FaUserFriends,
} from "react-icons/fa";

export default function PlansSection() {
  const [formVisibleIndex, setFormVisibleIndex] = useState<number | null>(null);
  const formRefs = useRef<HTMLFormElement[]>([]);

  const planes = [
    {
      nombre: "Plan de Entrenamiento",
      precio: "$20",
      imagen: "anual.jpg",
      iconos: [
        { icono: <FaMobileAlt />, texto: "App fácil de usar" },
        { icono: <FaBook />, texto: "E-books y guías" },
        { icono: <FaHeartbeat />, texto: "Seguimiento y rutinas" },
      ],
    },
    {
      nombre: "Plan de Alimentación y Entrenamiento",
      precio: "$40",
      imagen: "mensual.jpg",
      iconos: [
        { icono: <FaAppleAlt />, texto: "Nutrición personalizada" },
        { icono: <FaMobileAlt />, texto: "App con entrenamientos" },
        { icono: <FaBook />, texto: "Recetas y progreso" },
      ],
    },
    {
      nombre: "Método wellness «VIP»",
      precio: "$60",
      imagen: "trimestral.jpg",
      iconos: [
        { icono: <FaUserMd />, texto: "Soporte médico" },
        { icono: <FaHeartbeat />, texto: "Clases exclusivas" },
        { icono: <FaUserFriends />, texto: "Coaching y referidos" },
      ],
    },
  ];

  useEffect(() => {
    if (formVisibleIndex !== null && formRefs.current[formVisibleIndex]) {
      formRefs.current[formVisibleIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [formVisibleIndex]);

  return (
    <section id="planes" className={styles.section}>
      <h2 className={styles.titulo}>Planes de Entrenamiento</h2>
      <div className={styles.cardsContainer}>
        {planes.map((plan, index) => (
          <div key={index} className={`${styles.card} rounded-2xl shadow-lg`}>
            {/* Imagen destacada */}
            <div className={styles.imageContainer}>
              <img
                src={plan.imagen}
                alt={plan.nombre}
                className={styles.imagen}
              />
            </div>

            {/* Contenido */}
            <div className={`${styles.content} text-center p-4`}>
              <h3 className={styles.tituloCard}>{plan.nombre}</h3>
              <p className="text-lg text-gray-600 mb-3">{plan.precio}</p>

              {/* Fila horizontal de iconos */}
              <div className={styles.iconosRow}>
                {plan.iconos.map((item, i) => (
                  <div key={i} className={styles.iconoItem}>
                    <div className={styles.icono}>{item.icono}</div>
                    <span className={styles.textoIcono}>{item.texto}</span>
                  </div>
                ))}
              </div>

              {/* Botón */}
              <button
                className={styles.boton}
                onClick={() =>
                  setFormVisibleIndex(formVisibleIndex === index ? null : index)
                }
              >
                Quiero inscribirme
              </button>

              {/* Formulario */}
              {formVisibleIndex === index && (
                <form
                  className={`${styles.formulario} mt-4`}
                  id={`formulario-inscripcion-${index}`}
                  ref={(el) => (formRefs.current[index] = el!)}
                >
                  <input type="text" placeholder="Tu nombre" required />
                  <input type="email" placeholder="Tu correo" required />
                  <textarea placeholder="¿Tenés alguna consulta?"></textarea>
                  <button type="submit">Enviar</button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
