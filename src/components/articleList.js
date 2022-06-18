import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Article from "./article"

const ArticleList = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            date(formatString: "MMMMM YYYY")
            keywords
          }
          excerpt
        }
      }
    }
  }
  `)

  return (
    <div>
      {data.allMdx.edges.map(({ node }) => (
        <Article
          id={node.id}
          to="/"
          keyword={node.frontmatter.keyword}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
          keywords={node.frontmatter.keywords}
        />
      ))}
    </div>
  )
}

export default ArticleList
