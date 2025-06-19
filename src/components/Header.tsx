'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './styles/Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();

  setMenuOpen(false);

  setTimeout(() => {
    const section = document.querySelector(id);
    const header = document.querySelector('header');

    if (section) {
      const headerOffset = header?.offsetHeight || 0;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, 100);
};



  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={100} height={79} />
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          ☰
        </button>

        <ul className={`${styles.navList} ${menuOpen ? styles.show : ''}`}>
          <li className={styles.navItem}>
            <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')}>Inicio</a>
          </li>
          <li className={styles.navItem}>
            <a href="#sobremi" onClick={(e) => handleLinkClick(e, '#sobremi')}>Sobre mí</a>
          </li>
          <li className={styles.navItem}>
            <a href="#planes" onClick={(e) => handleLinkClick(e, '#planes')}>Planes</a>
          </li>
          <li className={styles.navItem}>
            <a href="#testimonios" onClick={(e) => handleLinkClick(e, '#testimonios')}>Testimonios</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
