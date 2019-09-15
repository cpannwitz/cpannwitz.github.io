import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./Navbar.module.css"

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
    <nav className={css.navbar}>
      <Link to="/">
        <img
          className={css.logo}
          src={data.file.publicURL}
          alt={data.file.name}
        />
      </Link>
      <Link to="/" activeClassName={css.activelink}>
        Blog
      </Link>
    </nav>
  )
}

export default Navbar
