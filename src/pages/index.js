import React from "react"
import Layout from "../components/layout"
import ArticleList from "../components/articleList"

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
    </p>
    <ArticleList />
    </Layout>
  )
}



export default IndexPage