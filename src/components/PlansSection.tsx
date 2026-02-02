"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const planes = [
    {
      nombre: "Plan de Entrenamiento",
      precio: "",
      imagen: "/anual.jpg",
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
      precio: "",
      imagen: "/trimestral2.jpg",
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
      precio: "",
      imagen: "/competicion2.jpeg",
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
              {/* <p className={styles.precio}>{plan.precio}</p> */}

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
              {/* <p className={styles.overlayPrecio}>{plan.precio}</p> */}
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
              setIsSubmitting(true);
              setMessage({ type: null, text: '' });

              const form = e.currentTarget;
              const nombre = form.nombre.value;
              const email = form.email.value;
              const consulta = form.consulta.value;
              const plan = planes[formVisibleIndex].nombre;

              try {
                // Configuración de EmailJS
                const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
                const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
                const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

                // Validar que las variables de entorno estén configuradas
                if (!serviceId || !templateId || !publicKey || 
                    serviceId === "YOUR_SERVICE_ID" || 
                    templateId === "YOUR_TEMPLATE_ID" || 
                    publicKey === "YOUR_PUBLIC_KEY") {
                  setMessage({
                    type: 'error',
                    text: 'EmailJS no está configurado. Por favor, contactá al administrador.'
                  });
                  setIsSubmitting(false);
                  console.error("EmailJS no configurado. Variables de entorno faltantes.");
                  return;
                }

                // Enviar email (el BCC está configurado en el template de EmailJS)
                await emailjs.send(
                  serviceId,
                  templateId,
                  {
                    nombre,
                    email,
                    consulta: consulta || "Sin consulta adicional.",
                    plan,
                    to_email: email, // Se envía al cliente, el BCC se maneja en el template
                  },
                  publicKey
                );

                setMessage({
                  type: 'success',
                  text: '¡Formulario enviado con éxito! Revisá tu email.'
                });
                
                form.reset();
                
                // Cerrar el formulario después de 2 segundos
                setTimeout(() => {
                  setFormVisibleIndex(null);
                  setMessage({ type: null, text: '' });
                }, 2000);
              } catch (err: any) {
                console.error("Error al enviar el formulario:", err);
                let errorMessage = 'Error desconocido';
                
                // EmailJS devuelve errores en diferentes formatos
                if (typeof err === 'string') {
                  errorMessage = err;
                } else if (err?.text) {
                  errorMessage = err.text;
                } else if (err?.message) {
                  errorMessage = err.message;
                } else if (err?.status) {
                  errorMessage = `Error ${err.status}: ${err.text || 'Error en la solicitud'}`;
                } else if (err?.statusText) {
                  errorMessage = err.statusText;
                } else {
                  // Intentar convertir el objeto a string para debugging
                  try {
                    errorMessage = JSON.stringify(err);
                  } catch {
                    errorMessage = 'Error al procesar la solicitud';
                  }
                }
                
                setMessage({
                  type: 'error',
                  text: `Error al enviar el formulario: ${errorMessage}. Verificá que el template de EmailJS esté configurado correctamente con las variables {{nombre}}, {{email}}, {{consulta}} y {{plan}}.`
                });
              } finally {
                setIsSubmitting(false);
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

            {message.type && (
              <div className={`${styles.message} ${styles[message.type]}`}>
                {message.type === 'success' ? '✓' : '⚠'} {message.text}
              </div>
            )}
            
            <button 
              type="submit" 
              className={styles.botonEnviar}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
