"use client";
import { useState } from "react";
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
  const [mobileOverlayIndex, setMobileOverlayIndex] = useState<number | null>(
    null
  );

  // 👉 Teléfono de WhatsApp (sin + ni espacios)
  const PHONE = "376663918";
  const BASE_TEXT =
    "¡Hola Sofi! Quiero inscribirme al siguiente plan de entrenamiento:";

  const planes = [
    {
      nombre: "Entrenamiento Personalizado",
      precio: "ARS 80.000 x 6 semanas",
      imagen: "anual.jpg",
      iconos: [
        { icono: <FaMobileAlt />, texto: "App fácil de usar" },
        { icono: <FaBook />, texto: "E-books y guías" },
        { icono: <FaHeartbeat />, texto: "Seguimiento y rutinas" },
      ],
      descripcion: `
        • Rutina adaptada a tus objetivos, nivel y tiempos.
        • Acceso a app con videos, series, repeticiones y descansos.
        • Cambios de rutina y seguimiento cada 15 días.
        • Soporte constante para dudas y acompañamiento.`,
    },
    {
      nombre: "Entrenamiento + Nutrición",
      precio: "ARS 80.000 x 6 semanas",
      imagen: "trimestral2.jpg",
      iconos: [
        { icono: <FaAppleAlt />, texto: "Nutrición personalizada" },
        { icono: <FaMobileAlt />, texto: "App con entrenamientos" },
        { icono: <FaBook />, texto: "Recetas y progreso" },
      ],
      descripcion: `
        • Todo lo incluido en el plan anterior.
        • Plan nutricional personalizado por nutricionista.
        • Seguimiento integral cada 15 días.
        • Asesoría continua y comunicación directa.`,
    },
    {
      nombre: "Método Wellness – glúteos más grandes en 12 semanas",
      imagen: "competicion2.jpeg",
      iconos: [
        { icono: <FaUserMd />, texto: "Soporte médico" },
        { icono: <FaHeartbeat />, texto: "Clases exclusivas" },
        { icono: <FaUserFriends />, texto: "Coaching y referidos" },
      ],
      descripcion: `
        • Videollamada inicial personalizada, hablemos sobre tu objetivo! 
        • Alto rendimiento: entrenamientos avanzados para nivel competitivo, acceso exclusivo a nuestra app con videos explicativos⁠.
        • Plan 100% personalizado.
        • Con cambios cada 15 días.
        • Equipo multidisciplinario a tu lado: nutricionista, deportólogo, clases de yoga y coach motivacional.
        • Comunidad activa con apoyo constante y motivación diaria.`,
    },
  ];

  const getWaLink = (planNombre: string, planPrecio?: string) => {
    const text = `${BASE_TEXT}%0A ${planNombre} ¡Gracias!`;
    return `https://api.whatsapp.com/send?phone=${PHONE}&text=${text}`;
  };

  return (
    <section id="planes" className={styles.section}>
      <h2 className={styles.titulo}>Planes de Entrenamiento</h2>

      <div className={styles.cardsContainer}>
        {planes.map((plan, index) => (
          <div key={index} className={`${styles.card} rounded-2xl shadow-lg`}>
            {/* Imagen */}
            <div className={styles.imageContainer}>
              <img
                src={plan.imagen}
                alt={plan.nombre}
                className={styles.imagen}
              />
            </div>

            {/* Contenido visible */}
            <div className={`${styles.staticContent} text-center p-4`}>
              <h3 className={styles.tituloCard}>
                {index === 2 ? (
                  <>
                    Método Wellness <br />
                    – glúteos más grandes en 12 semanas
                  </>
                ) : (
                  plan.nombre
                )}
              </h3>

              {/* Mostrar precio si hay, o mantener altura si no */}
              <p className={styles.precio}>
                {plan.precio ? plan.precio : "\u00A0"}
              </p>

              {/* Íconos con margin extra solo para la tercera tarjeta */}
              <div
                className={`${styles.iconosRow} ${
                  index === 2 ? styles.extraMarginTop : ""
                }`}
              >
                {plan.iconos.map((item, i) => (
                  <div key={i} className={styles.iconoItem}>
                    <div className={styles.icono}>{item.icono}</div>
                    <span className={styles.textoIcono}>{item.texto}</span>
                  </div>
                ))}
              </div>

              {/* Botón WhatsApp */}
              <a
                href={getWaLink(plan.nombre, plan.precio)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.boton}
              >
                Quiero inscribirme
              </a>

              {/* Botón ver detalles (solo mobile) */}
              <button
                className={styles.mobileVerDetallesBtn}
                onClick={() => setMobileOverlayIndex(index)}
              >
                Ver detalles
              </button>
            </div>

            {/* Overlay con descripción */}
            <div
              className={`${styles.overlayDescription} ${
                mobileOverlayIndex === index ? styles.showOverlayMobile : ""
              }`}
            >
              <h3 className={styles.overlayTituloCard}>{plan.nombre}</h3>
              {plan.precio && (
                <p className={styles.overlayPrecio}>{plan.precio}</p>
              )}
              <ul className={styles.descriptionList}>
                {plan.descripcion
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, i) => (
                    <li key={i}>{line.trim()}</li>
                  ))}
              </ul>

              <button
                className={styles.mobileVolverBtn}
                onClick={() => setMobileOverlayIndex(null)}
              >
                Volver
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
