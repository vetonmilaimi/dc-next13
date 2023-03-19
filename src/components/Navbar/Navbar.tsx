import Link from "next/link"
import MobileNav from "../MobileNav"
import styles from "./Navbar.module.scss"

const Navbar: React.FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <h1>
          <Link href="/">
            Duraj-Com
          </Link>
        </h1>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              Ballina
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              Kontaktoni
            </Link>
          </li>
          <li>
            <Link href="/services">
              Shërbimet
            </Link>
          </li>
          <li>
            <Link href="/catalogue">
              Katalogu
            </Link>
          </li>
        </ul>
      </nav>
      <MobileNav />
    </>
  )
}

export default Navbar