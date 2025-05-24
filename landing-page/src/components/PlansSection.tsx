'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './styles/PlansSection.module.css';

export default function PlansSection() {
  const [formVisibleIndex, setFormVisibleIndex] = useState(null);

  const planes = [
    {
      nombre: 'Plan de Entrenamiento',
      precio: '$20',
      descripcion: `• Acceso a tu plan de entrenamiento desde la app
• Rutinas con videos demostrativos y descripción técnica de los ejercicios
• Visualización de series, repeticiones, descansos y cargas
• Registro de progreso: peso, hidratación, medidas corporales`,
    },
    {
      nombre: 'Plan de Entrenamiento y plan de alimentación',
      precio: '$40',
      descripcion: `• Plan de alimentación diseñado por un nutricionista asignado.
• Plan adaptado a tus objetivos, tu composición corporal, tus horarios y tu estilo de vida.
• Entrenamiento personalizado a través de la app.`,
    },
    {
      nombre: 'Método wellness «VIP»',
      precio: '$60',
      descripcion: `• Plan nutricional adaptado a tu cuerpo, objetivos y tiempos, realizado por un nutricionista asignado.
• Seguimiento médico con deportólogo y endocrinólogo si necesitás suplementación.
• Coaching motivacional con psicólogo especializado en deporte.`,
    },
  ];

  // Refs para cada formulario
  const formRefs = useRef([]);

  useEffect(() => {
    if (formVisibleIndex !== null && formRefs.current[formVisibleIndex]) {
      // Scroll suave al formulario activo
      formRefs.current[formVisibleIndex].scrollIntoView({
  behavior: 'smooth',
  block: 'center',
});

    }
  }, [formVisibleIndex]);

  return (
    <section id="planes" className={styles.section}>
      <h2 className={styles.titulo}>Planes de Entrenamiento</h2>
      <div className={styles.cardsContainer}>
        {planes.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h3>{plan.nombre}</h3>
            <p className={styles.precio}>{plan.precio}</p>
            <p className={styles.descripcion}>{plan.descripcion}</p>

            <button
              className={styles.boton}
              onClick={() =>
                setFormVisibleIndex(formVisibleIndex === index ? null : index)
              }
            >
              Quiero inscribirme
            </button>

            {formVisibleIndex === index && (
              <form
                className={styles.formulario}
                id={`formulario-inscripcion-${index}`}
                ref={(el) => (formRefs.current[index] = el)}
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
