import Image from 'next/image';
import styles from './styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={100} height={79} />
          </li>
          <li className={styles.navItem}><a href="#">Inicio</a></li>
          <li className={styles.navItem}><a href="#sobremi">Sobre mí</a></li>
          <li className={styles.navItem}><a href="#planes">Planes</a></li>
          <li className={styles.navItem}><a href="#testimonios">Testimonios</a></li>
          <div className={styles.menu}>
          </div>
        </ul>
      </nav>
    </header>
  );
}
