import Image from 'next/image';
import styles from './styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.logo}>
            <a href="#inicio">
              <Image src="/logo.jpg" alt="Logo" width={100} height={79} />
            </a>
          </li>
          <li className={styles.navItem}><a href="#inicio" className={styles.navLink}>Inicio</a></li>
          <li className={styles.navItem}><a href="#planes">Planes</a></li>
          <li className={styles.navItem}><a href="#testimonios">Testimonios</a></li>
        </ul>
      </nav>
    </header>
  );
}
