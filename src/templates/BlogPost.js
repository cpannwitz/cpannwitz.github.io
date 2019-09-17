import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import css from "./BlogPost.module.css"

import "gitalk/dist/gitalk.css"
import gitalkConfig from "../utils/gitalk-config"

// Prevent webpack window problem
const isBrowser = typeof window !== "undefined"
const Gitalk = isBrowser ? require("gitalk") : undefined

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const { title, slug } = this.props.data.mdx.frontmatter
    const GitTalkInstance = new Gitalk({
      ...gitalkConfig,
      title: title,
      id: slug,
    })
    GitTalkInstance.render("gitalk-container")
  }

  render() {
    const { mdx: post, site } = this.props.data
    const siteTitle = site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article className={css.article}>
          <header className={css.header}>
            <h1 className={css.title}>{post.frontmatter.title}</h1>
            <small className={css.date}>{post.frontmatter.date}</small>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>

        <div id="gitalk-container" />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        categories
        keywords
      }
      body
    }
  }
`
