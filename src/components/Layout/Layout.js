import React from "react"
import "./prismtheme-dark.css"
import "./global.css"
import Navbar from "../Navbar/Navbar"
import Bio from "../Bio/Bio"
import { version } from "../../../package.json"

const Layout = props => {
  const { children } = props

  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <footer>
        <Bio></Bio>
        <br />
        <small className="copy">
          © {new Date().getFullYear()} built with Gatsby - {version} - Lisa is
          cool (:
        </small>
      </footer>
    </div>
  )
}

export default Layout
