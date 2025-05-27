// PlansSection.js
'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './styles/PlansSection.module.css';
import { FaDumbbell, FaAppleAlt, FaHeartbeat } from 'react-icons/fa'; // íconos

export default function PlansSection() {
  const [formVisibleIndex, setFormVisibleIndex] = useState(null);
  const formRefs = useRef([]);

  const planes = [
    {
      nombre: 'Plan de Entrenamiento',
      precio: '$20',
      imagen: 'anual.jpg',
      iconos: [
        { icono: <FaDumbbell />, texto: 'Rutinas personalizadas' },
        { icono: <FaHeartbeat />, texto: 'Seguimiento de progreso' },
        { icono: <FaAppleAlt />, texto: 'Videos técnicos' },
      ],
    },
    {
      nombre: 'Entrenamiento + Alimentación',
      precio: '$40',
      imagen: 'mensual.jpg',
      iconos: [
        { icono: <FaAppleAlt />, texto: 'Plan alimenticio' },
        { icono: <FaDumbbell />, texto: 'Ejercicios en app' },
        { icono: <FaHeartbeat />, texto: 'Adaptado a objetivos' },
      ],
    },
    {
      nombre: 'Método wellness «VIP»',
      precio: '$60',
      imagen: 'trimestral.jpg',
      iconos: [
        { icono: <FaHeartbeat />, texto: 'Seguimiento médico' },
        { icono: <FaAppleAlt />, texto: 'Nutrición personalizada' },
        { icono: <FaDumbbell />, texto: 'Coaching deportivo' },
      ],
    },
  ];

  useEffect(() => {
    if (formVisibleIndex !== null && formRefs.current[formVisibleIndex]) {
      formRefs.current[formVisibleIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [formVisibleIndex]);

  return (
    <section id="planes" className={styles.section}>
      <h2 className={styles.titulo}>Planes de Entrenamiento</h2>
      <div className={styles.cardsContainer}>
        {planes.map((plan, index) => (
          <div key={index} className={styles.card}>
            <img src={plan.imagen} alt={plan.nombre} className={styles.imagen} />
            <h3>{plan.nombre}</h3>
            <p className={styles.precio}>{plan.precio}</p>
            <div className={styles.iconos}>
              {plan.iconos.map((item, i) => (
                <div key={i} className={styles.iconoTexto}>
                  {item.icono}
                  <span>{item.texto}</span>
                </div>
              ))}
            </div>
            <button
              className={styles.boton}
              onClick={() => setFormVisibleIndex(formVisibleIndex === index ? null : index)}
            >
              Quiero inscribirme
            </button>

            {formVisibleIndex === index && (
              <form className={styles.formulario} ref={(el) => (formRefs.current[index] = el)}>
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
