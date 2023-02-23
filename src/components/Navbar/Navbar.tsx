import MobileNav from "../MobileNav"
import styles from "./Navbar.module.scss"

const Navbar: React.FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        <h1>
          <a href="">
            Duraj-Com
          </a>
        </h1>
        <ul className={styles.list}>
          <li>
            <a href="">
              Ballina
            </a>
          </li>
          <li>
            <a href="">
              Kontaktoni me ne
            </a>
          </li>
          <li>
            <a href="">
              Shërbimet
            </a>
          </li>
          <li>
            <a href="https://duraj.org/catalogue">
              Katalogu
            </a>
          </li>
        </ul>
      </nav>
      <MobileNav />
    </>
  )
}

export default Navbar