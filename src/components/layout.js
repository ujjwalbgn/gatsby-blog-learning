import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "./layout.module.scss"

// import our components
import Header from "./header"
import Footer from "./footer"
import Title from "./title"

const Layout = ({ pageTitle, children }) => {
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
        <div>
            {/* Page Title */}
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <div className={styles.container}>
                <Header /><div className={styles.content}>
                    {/* Title components */}
                    <Title text={pageTitle} />
                    {/* <nav>
                        <Link to="/">Home </Link> |
                        <Link to="/about">About</Link> |
                        <Link to="/blog">Blog</Link>
                    </nav> */}
                    {children}
                </div>
                <Footer>
                    Copyrights 2022 All Rights Reserved
                </Footer>
            </div>
        </div>
    )
}

export default Layout
