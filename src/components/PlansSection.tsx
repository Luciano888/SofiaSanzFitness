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
  const [mobileOverlayIndex, setMobileOverlayIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

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
      imagen: "trimestral2.jpg",
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
      imagen: "competicion2.jpeg",
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
    if (formRef.current && formVisibleIndex !== null) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [formVisibleIndex]);

  return (
    <section id="planes" className={styles.section}>
      <br />
      <h2 className={styles.titulo}>Planes de Entrenamiento</h2>
      <div className={styles.cardsContainer}>
        {planes.map((plan, index) => (
          <div key={index} className={`${styles.card} rounded-2xl shadow-lg`}>
            <div className={styles.imageContainer}>
              <img
                src={plan.imagen}
                alt={plan.nombre}
                className={styles.imagen}
              />
            </div>

            <div className={`${styles.staticContent} text-center p-4`}>
              <h3 className={styles.tituloCard}>{plan.nombre}</h3>
              <p className={styles.precio}>{plan.precio}</p>

              <div className={styles.iconosRow}>
                {plan.iconos.map((item, i) => (
                  <div key={i} className={styles.iconoItem}>
                    <div className={styles.icono}>{item.icono}</div>
                    <span className={styles.textoIcono}>{item.texto}</span>
                  </div>
                ))}
              </div>

              <button
                className={styles.boton}
                onClick={() =>
                  setFormVisibleIndex(formVisibleIndex === index ? null : index)
                }
              >
                Quiero inscribirme
              </button>

              {/* BOTÓN PARA MOBILE: Ver detalles */}
              <button
                className={styles.mobileVerDetallesBtn}
                onClick={() => setMobileOverlayIndex(index)}
              >
                Ver detalles
              </button>
            </div>

            {/* Overlay description con control mobile */}
            <div
              className={`${styles.overlayDescription} ${
                mobileOverlayIndex === index ? styles.showOverlayMobile : ""
              }`}
            >
              <h3 className={styles.overlayTituloCard}>{plan.nombre}</h3>
              <p className={styles.overlayPrecio}>{plan.precio}</p>
              <ul className={styles.descriptionList}>
                {plan.descripcion
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, i) => (
                    <li key={i}>✓ {line.trim().replace(/^•\s*/, "")}</li>
                  ))}
              </ul>

              {/* BOTÓN VOLVER en overlay */}
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

      {/* Formulario ancho al final */}
      {formVisibleIndex !== null && (
        <div className={styles.formWrapper}>
          <form
            ref={formRef}
            className={styles.formularioAncho}
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const nombre = form.nombre.value;
              const email = form.email.value;
              const consulta = form.consulta.value;
              const plan = planes[formVisibleIndex].nombre;

              try {
                const res = await fetch("/api/send-confirmation", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ nombre, email, consulta, plan }),
                });

                if (res.ok) {
                  alert("¡Formulario enviado con éxito! Revisá tu email.");
                  form.reset();
                  setFormVisibleIndex(null);
                } else {
                  alert("Error al enviar el correo. Intentá más tarde.");
                }
              } catch (err) {
                console.error(err);
                alert("Ocurrió un error al enviar el formulario.");
              }
            }}
          >
            <h3>
              Formulario de inscripción al{" "}
              <strong>{planes[formVisibleIndex].nombre}</strong>
            </h3>

            <div className={styles.formGroup}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="consulta">Consulta</label>
              <textarea id="consulta" name="consulta" rows={4}></textarea>
            </div>

            <button type="submit" className={styles.botonEnviar}>
              Enviar
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
