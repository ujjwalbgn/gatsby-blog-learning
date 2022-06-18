import React from "react"
import Layout from "../components/layout"
import * as styles from "./404.module.scss"

const pageNotFound = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className={styles.header}>Page Not Found </h1>
        <p className={styles.errorMessage}>
          The page you are looking for does not exist.
        </p>
      </div>
    </Layout>
  )
}

export default pageNotFound
