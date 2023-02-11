import styles from "./heroSection.module.scss"

interface Props {
  title: any
}

const HeroSection: React.FC<Props> = ({title}) => {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.title}>{title.title}</h1>
      <p className={styles.quote}>{title.quote}</p>
    </div>
  )
}

export default HeroSection