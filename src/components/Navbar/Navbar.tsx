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
              Home
            </Link>
          </li>
          <li>
            <Link href="/catalogue/doors">
              Dyer dhe Taraba
            </Link>
          </li>
          <li>
            <Link href="/catalgue/stairs">
              Gilindera për shkallë
            </Link>
          </li>
          <li>
            <Link href="/catalogue/terraces">
              Terasa
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