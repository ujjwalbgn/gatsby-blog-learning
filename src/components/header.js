import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./header.module.scss"

const Header = () => {
  const HeaderLinks = (to, text) => {
    return (
      <Link className={styles.link} to={to}>
        {text}
      </Link>
    )
  }

  const homeButton = (to, text) => {
    return (
      <Link className={styles.button} to={to}>
        {text}
      </Link>
    )
  }

  const SocialButton = (site, username) => {
    let style = ""
    let url = ""

    if (site === "twitter") {
      style = styles.buttonTwitter
      url = "https://twitter.com/" + username
    } else if (site === "linkedin") {
      style = styles.buttonLinkedin
      url = "https://www.linkedin.com/in/" + username
    } else if (site === "github") {
      style = styles.buttonGithub
      url = "https://github.com/ " + username
    }

    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={style}>&nbsp;</div>
      </a>
    )
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.container}>
      <div className={styles.row}>
        {homeButton("/", data.site.siteMetadata.title)}
        {SocialButton("github", "ujjwalbgn")}
        {SocialButton("linkedin", "ujjwalbgn")}
        {SocialButton("twitter", "??????????")}
      </div>

      <div className={styles.row}>
        {HeaderLinks("/", "ARTICLES")}
        {HeaderLinks("/about", "ABOUT")}
        {HeaderLinks("/blog", "BLOG")}
      </div>
    </header>
  )
}

export default Header
