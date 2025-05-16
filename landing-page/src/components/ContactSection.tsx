import styles from './styles/ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contacto" className={styles.section}>
      <h2>Suscribite</h2>
      <p>Ingresá tu email y te contactamos:</p>
      <form>
        <input type="email" placeholder="Tu email" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
