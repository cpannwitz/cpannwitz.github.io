import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "avatar" }) {
        publicURL
        name
      }
    }
  `)

  return (
    <div className="bio">
      <div className="bio-avatar">
        <img src={data.file.publicURL} alt={data.file.name} />
      </div>
      <div className="bio-text">
        <h3>Chris Pannwitz</h3>
        <small>Fullstack-Software-Engineer / Webdesigner</small>
      </div>
    </div>
  )
}

export default Bio
