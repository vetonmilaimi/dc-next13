import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt } from 'react-icons/fa'
import { IoLocation } from "react-icons/io5"

import styles from "./footer.module.scss"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.firstRow}>
        <div className={styles.footerSection}>
          <h3 className={styles.title}>Duraj-com</h3>
          <p className={styles.description}>
            Duraj-com bën punimin dhe montimin e hekurit të farkuarë.
            Që nga fillimet tona vitet 2003-2004 kemi punuar vetëm me punimin e hekurit.
            Cilësia, dizajnet dhe mbi të gjitha siguria e garantuar.
          </p>

          <ul className={styles.socialIcons}>
            <li>
              <Link href="https://www.facebook.com/durajcom/" target={"_blank"}>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/durajcom/" target={"_blank"}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/watch?v=DAHhCQ4FzoA&" target={"_blank"}>
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link href="tel:+38344560885" target={"_blank"}>
                <FaPhoneAlt />
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerSection}`}>
          <h3 className={styles.title}>Kontakti</h3>
          <hr className={styles.line} />
          <p className={styles.items}><span className={styles.icon}><IoLocation /></span>Rruga Zgatarit, Fshati Bresanë, Komuna Dragash</p>
          <hr className={styles.line} />
          <p className={styles.items}><span className={styles.icon}><FaPhoneAlt /></span>+383 44 560 885</p>
          <hr className={styles.line} />
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.title}>Katalogu</h3>
          <ul className={styles.links}>
            <li>
              <Link href="catalogue/doors">Dyer dhe taraba</Link>
            </li>
            <li>
              <Link href="catalogue/stairs">Gilindera për shkallë</Link>
            </li>
            <li>
              <Link href="catalogue/terraces">Terasa</Link>
            </li>
          </ul>
        </div>

      </div>
      <div className={styles.secondRow}>
        <p>© Copyright Duraj-com Metal</p>
      </div>
    </footer>
  )
}

export default Footer