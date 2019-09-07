import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "svg" }, name: { eq: "logo-pnwtz-white" }) {
        publicURL
        name
      }
    }
  `)

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src={data.file.publicURL}
          alt={data.file.name}
        />
      </Link>
    </nav>
  )
}

export default Navbar
