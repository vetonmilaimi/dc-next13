import styles from "./bottomHero.module.scss"

const BottomHero: React.FC = () => {
  return (
    <div className={styles.bottomHero}>
      <div className={styles.box}>
        <h1>01</h1>
        <h3>Cilësia dhe Siguria</h3>
        <p>Duraj-com gjithmonë kujdeset për cilësin e produkteve dhe sigurin e tyre.</p>
      </div>
      <div className={styles.box}>
        <h1>02</h1>
        <h3>Dizajne unike</h3>
        <p>Përveç dizajneve që i shikoni çdokund tek Duraj-com ju mund të kërkoni diqka unike sipas shijes tuaj.</p>
      </div>

      <div className={styles.box}>
        <h1>03</h1>
        <h3>lorem Ipsum</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ex possimus saepe placeat ullam </p>
      </div>
    </div>
  )
}

export default BottomHero