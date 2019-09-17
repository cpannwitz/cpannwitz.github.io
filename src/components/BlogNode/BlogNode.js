import React from "react"
import { Link } from "gatsby"
import css from "./BlogNode.module.css"
import Img from "gatsby-image/withIEPolyfill"

const BlogNode = ({ node }) => {
  const postTitle = node.frontmatter.title || node.frontmatter.slug
  return (
    <article className="blog-post">
      <header className={css.header}>
        <Img
          className={css.thumbnail}
          fixed={node.frontmatter.thumbnail.childImageSharp.fixed}
          alt="blog thumbnail"
        ></Img>
        <div>
          <h2>
            <Link style={{ boxShadow: `none` }} to={node.frontmatter.slug}>
              {postTitle}
            </Link>
          </h2>
          <div className={css.hlist}>
            <small>{node.frontmatter.date}</small>
            {node.frontmatter.keywords.map(keyword => (
              <small key={keyword} className={css.chip}>
                {keyword}
              </small>
            ))}
          </div>
        </div>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  )
}

export default BlogNode
