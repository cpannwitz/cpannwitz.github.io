import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import { rhythm, scale } from "../utils/typography"

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
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <MDXRenderer title="WHAT">{post.body}</MDXRenderer>
          {/* <section dangerouslySetInnerHTML={{ __html: post.body }} /> */}
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          {/* <footer>
          </footer> */}
        </article>

        <div id="gitalk-container" />

        {/* <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
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
