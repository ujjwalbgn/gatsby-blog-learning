import React from "react"
import { Link } from "gatsby"
import * as styles from "./article.module.scss"

const Article = props => {
  return (
    <Link to={props.to}>
      <article className={styles.articleBox} key={props.id}>
        <div className={styles.left}>
          <img
            src={"https://source.unsplash.com/150x150/?" + props.keywords}
            alt={props.title}
          />
        </div>
        <div className={styles.right}>
          <h3>{props.title}</h3>
          <div className={styles.date}>{props.date}</div>
          <div>
            {props.excerpt}
          </div>
        </div>

      </article>
    </Link>
  )
}

export default Article
