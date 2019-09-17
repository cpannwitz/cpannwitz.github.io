import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./Navbar.module.css"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Sun, Moon } from "react-feather"

const Navbar = () => {
  const logo = useStaticQuery(graphql`
    {
      light: file(extension: { eq: "svg" }, name: { eq: "logo-pnwtz-white" }) {
        publicURL
        name
      }
      dark: file(extension: { eq: "svg" }, name: { eq: "logo-pnwtz-blue" }) {
        publicURL
        name
      }
    }
  `)

  return (
    <nav className={css.navbar}>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <>
            <Link to="/">
              {theme === "dark" ? (
                <img
                  className={css.logo}
                  src={logo.light.publicURL}
                  alt={logo.light.name}
                />
              ) : (
                <img
                  className={css.logo}
                  src={logo.dark.publicURL}
                  alt={logo.dark.name}
                />
              )}
            </Link>
            <div className={css.navbarright}>
              <Link
                to="/"
                partiallyActive={true}
                activeClassName={css.activelink}
              >
                Blog
              </Link>

              <input
                id="toggle"
                hidden
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <label for="toggle" className={css.toggle}>
                {theme === "light" ? <Moon></Moon> : <Sun></Sun>}
              </label>
            </div>
          </>
        )}
      </ThemeToggler>
    </nav>
  )
}

export default Navbar
