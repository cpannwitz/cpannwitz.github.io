import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GitHub, Twitter, Linkedin, Mail } from "react-feather"
import css from "./Bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "avatar" }) {
        publicURL
        name
      }
      site {
        siteMetadata {
          author
          email
          jobDescription
          socialURLs {
            github
            twitter
            linkedin
          }
        }
      }
    }
  `)

  const { email, author, jobDescription, socialURLs } = data.site.siteMetadata

  return (
    <div className={css.bio}>
      <div className={css.avatar}>
        <img src={data.file.publicURL} alt={data.file.name} />
      </div>
      <div className={css.text}>
        <h3>{author}</h3>
        <small>{jobDescription}</small>
        <div className={css.iconrow}>
          <a href={`mailto:${email}`}>
            <Mail strokeWidth={1} size={22}></Mail>
          </a>
          <a href={socialURLs.github} target="_blank" rel="noopener noreferrer">
            <GitHub strokeWidth={1} size={22}></GitHub>
          </a>
          <a
            href={socialURLs.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter strokeWidth={1} size={22}></Twitter>
          </a>
          <a
            href={socialURLs.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin strokeWidth={1} size={22}></Linkedin>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bio
