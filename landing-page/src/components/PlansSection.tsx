import styles from './styles/PlansSection.module.css';

export default function PlansSection() {
  const planes = [
    { nombre: 'Básico', precio: '$20', descripcion: 'Acceso limitado y rutinas iniciales' },
    { nombre: 'Premium', precio: '$40', descripcion: 'Acceso completo y asesoría semanal' },
    { nombre: 'Deluxe', precio: '$60', descripcion: 'Todo incluido y seguimiento diario' },
  ];

  return (
    <section id="planes" className={styles.section}>
      <h2>Planes de entrenamiento</h2>
      <div className={styles.cards}>
        {planes.map((plan) => (
          <div key={plan.nombre} className={styles.card}>
            <h3>{plan.nombre}</h3>
            <p>{plan.precio}</p>
            <p>{plan.descripcion}</p>
            <button>Elegir</button>
          </div>
        ))}
      </div>
    </section>
  );
}
