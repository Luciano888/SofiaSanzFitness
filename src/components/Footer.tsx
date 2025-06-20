import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} - Todos los derechos reservados.</p>
      <div>
        <a href="https://www.instagram.com/sofiasanz_ok?igsh=MWY4YTdxYWIzd2p6OA%3D%3D" target='blank'>Instagram</a>
        <a href="https://www.tiktok.com/@sofiasanz50?_t=ZS-8xMTyVQNDxA&_r=1" target='blank'>TikTok</a>
      </div>
    </footer> 
  );
}
