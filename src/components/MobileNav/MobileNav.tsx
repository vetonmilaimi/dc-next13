"use client"
import { useState } from "react"
import Link from 'next/link'
import Toolbar from '../Toolbar'
import styles from './mobileNav.module.scss'

const MobileNav: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const clickHandler = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
      {
        !openDrawer && <Toolbar drawerClickHandler={clickHandler} />
      }
      {
        openDrawer && <>


          <nav className={styles.mobileNav}>
            <Toolbar drawerClickHandler={clickHandler} />
            {/* <h1>
              <a href="">
                Duraj-Com
              </a>
            </h1> */}
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
        </>
      }

    </>
  )
}

export default MobileNav