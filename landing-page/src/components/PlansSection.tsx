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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      descripcion: `
        Acceso a tu plan de entrenamiento desde la app
        • Rutinas con videos demostrativos y descripción técnica de los ejercicios
        • Visualización de series, repeticiones, descansos y cargas
        • Registro de progreso: peso, hidratación, medidas corporales
        • E-books de recetas saludables y guías de alimentación`,
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
      descripcion: `
        • Plan de alimentación diseñado por un nutricionista asignado.
        • Plan adaptado a tus objetivos, tu composición corporal, tus horarios y tu estilo de vida.
        • Entrenamiento personalizado a través de la app (videos, series, repeticiones, descanso, carga e hidratación).
        • Seguimiento de tus progresos y cargas de entrenamiento.`,
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
      descripcion: `
        • Plan nutricional adaptado a tu cuerpo, objetivos y tiempos, realizado por un nutricionista asignado.
        • Seguimiento médico con deportólogo y endocrinólogo si necesitás suplementación.
        • Coaching motivacional con psicólogo especializado en deporte.
        • Clases de yoga para potenciar tu bienestar físico y emocional.`,
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
      <br />
      <h2 className={styles.titulo}>Planes de Entrenamiento</h2>
      <div className={styles.cardsContainer}>
        {planes.map((plan, index) => (
          <div
            key={index}
            className={`${styles.card} rounded-2xl shadow-lg`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Imagen destacada */}
            <div className={styles.imageContainer}>
              <img
                src={plan.imagen}
                alt={plan.nombre}
                className={styles.imagen}
              />
            </div>

            {/* Contenido estático visible por defecto */}
            <div className={`${styles.staticContent} text-center p-4`}>
              <h3 className={styles.tituloCard}>{plan.nombre}</h3>
              <p className={styles.precio}>{plan.precio}</p>

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
            </div>

            {/* Tarjeta de descripción deslizante (overlay) */}
            <div
              className={`${styles.overlayDescription} ${
                hoveredCard === index ? styles.showOverlay : ""
              }`}
            >
              <h3 className={styles.overlayTituloCard}>{plan.nombre}</h3>{" "}
              {/* Opcional: repetir el título */}
              <p className={styles.overlayPrecio}>{plan.precio}</p>{" "}
              {/* Opcional: repetir el precio */}
              <ul className={styles.descriptionList}>
                {plan.descripcion
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, i) => (
                    <li key={i}>✓ {line.trim().replace(/^•\s*/, "")}</li>
                  ))}
              </ul>
            </div>

            {/* Formulario (fuera del flujo del hover para que no se deslice con el overlay) */}
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
        ))}
      </div>
    </section>
  );
}
