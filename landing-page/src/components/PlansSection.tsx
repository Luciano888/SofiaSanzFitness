import styles from './styles/PlansSection.module.css';

export default function PlansSection() {
  const planes = [
    {
      nombre: 'Plan de Entrenamiento',
      precio: '$20',
      descripcion: `• Acceso a tu plan de entrenamiento desde la app
• Rutinas con videos demostrativos y descripción técnica de los ejercicios
• Visualización de series, repeticiones, descansos y cargas
• Registro de progreso: peso, hidratación, medidas corporales
• E-books de recetas saludables y guías de alimentación
• Actualizaciones periódicas de tus entrenamientos
• Todo desde tu celular o computadora, en una app fácil de usar`,
    },
    {
      nombre: 'Plan de Entrenamiento y plan de alimentación',
      precio: '$40',
      descripcion: `• Plan de alimentación diseñado por un nutricionista asignado.
• Plan adaptado a tus objetivos, tu composición corporal, tus horarios y tu estilo de vida.
• Entrenamiento personalizado a través de la app (videos, series, repeticiones, descanso, carga e hidratación).
• Seguimiento de tus progresos y cargas de entrenamiento.
• Acceso a e-books de recetas saludables.
Todo desde una misma aplicación, accesible desde cualquier dispositivo.`,
    },
    {
      nombre: 'Método wellness «VIP»',
      precio: '$60',
      descripcion: `• Plan nutricional adaptado a tu cuerpo, objetivos y tiempos, realizado por un nutricionista asignado.
• Seguimiento médico con deportólogo y endocrinólogo si necesitás suplementación.
• Coaching motivacional con psicólogo especializado en deporte.
• Clases de yoga para potenciar tu bienestar físico y emocional.
• Taller de gimnasia hipopresiva para fortalecer el core y mejorar postura.
• Taller de hipertrofia de piernas para ganar fuerza y volumen muscular.
• Acompañamiento constante durante todo el proceso.`,
    },
  ];

  return (
    <section id="planes" className={styles.section}>
      <h2 className={styles.titulo}>Planes de Entrenamiento</h2>
      <div className={styles.cardsContainer}>
        {planes.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h3>{plan.nombre}</h3>
            <p className={styles.precio}>{plan.precio}</p>
            <p className={styles.descripcion}>{plan.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
