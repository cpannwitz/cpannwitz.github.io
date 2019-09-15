import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import BlogNode from "../components/BlogNode/BlogNode"

const BlogIndex = ({ location, data }) => {
  const { title } = data.site.siteMetadata
  const { edges } = data.allMdx

  return (
    <Layout location={location} title={title}>
      <SEO title="Blog" />
      {edges.map(({ node }) => (
        <BlogNode node={node} key={node.frontmatter.slug}></BlogNode>
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 150)
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY, HH:mm")
            description
            keywords
            slug
            thumbnail {
              childImageSharp {
                fixed(width: 80) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
