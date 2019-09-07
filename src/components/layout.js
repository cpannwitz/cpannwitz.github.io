import React from "react"
import { Link } from "gatsby"
import "horizon-prismjs-theme/theme.css"
import "./global.css"
import { rhythm, scale } from "../utils/typography"
import Navbar from "./navbar"
import Bio from "./bio"

const Layout = props => {
  const { children } = props

  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <footer>
        <Bio></Bio>
        <br />
        <small>© {new Date().getFullYear()} built with React</small>
      </footer>
    </div>
  )
}

export default Layout
