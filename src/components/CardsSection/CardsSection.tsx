import Link from "next/link"
import styles from "./cardsSection.module.scss"

interface Props {
  cards: [
    title: string,
    catalogue: {
      desc: string,
      image: string,
      category: string
    }
  ]
}

const CardsSection: React.FC<Props> = ({ cards }) => {
  return (
    <div className={styles.catalogue}>
      <div className={styles.cards}>
        {
          cards.map((item: any, index: number) => {
            return (
              <div className={styles.card} key={index}>
                <picture>
                  <source srcSet={`${process.env.REACT_APP_API_URL}/${item.catalogue.image}`} type="image/webp image/jpg image/png" />
                  <img src={`${process.env.REACT_APP_API_URL}/${item.catalogue.image}`} alt="text" className={styles.image} />
                </picture>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>

                <Link href={`${item.link}`} className={styles.button} >Shiko më shumë</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CardsSection
