import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"

import styles from "./toolbar.module.scss"

interface Props {
  drawerClickHandler: () => void;
}

const Toolbar: React.FC<Props> = ({ drawerClickHandler}) => {
  return (
    <div className={styles.toolbar}>
      <Link href="/">
        Duraj-com
      </Link>
      <p onClick={drawerClickHandler}>
        <AiOutlineMenu />
      </p>
    </div>
  )
}

export default Toolbar