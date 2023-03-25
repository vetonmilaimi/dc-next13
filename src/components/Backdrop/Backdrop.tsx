import styles from "./backdrop.module.scss"

interface Props {
  clickHandler: () => void
}

const Backdrop: React.FC<Props> = ({ clickHandler }) => {
  return (
    <div className={styles.backdrop} onClick={clickHandler}></div>
  )
}

export default Backdrop