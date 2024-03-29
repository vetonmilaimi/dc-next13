"use client"
import { useState } from "react"
import Link from 'next/link'
import Toolbar from '../Toolbar'
import styles from './mobileNav.module.scss'
import Backdrop from "../Backdrop"

const MobileNav: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const clickHandler = () => {
    setOpenDrawer(!openDrawer)
  }

  if (openDrawer) document.body.style.overflow = "hidden"

  return (
    <>
      {
        !openDrawer && <Toolbar drawerClickHandler={clickHandler} />
      }
      {
        openDrawer && <>
          <Backdrop clickHandler={() => {
            setOpenDrawer(false)
          }} />
          <nav className={styles.mobileNav}>
            <Toolbar drawerClickHandler={clickHandler} />
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