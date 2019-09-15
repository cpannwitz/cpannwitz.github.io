import React from "react"
import "./prismtheme-dark.css"
import "./global.css"
import Navbar from "../Navbar/Navbar"
import Bio from "../Bio/Bio"

const Layout = props => {
  const { children } = props

  // let root = document.documentElement
  // function toggleColor() {
  //   setColorstate(!colorstate)
  //   if (colorstate) {
  //     root.style.setProperty("--main-color", "#efefff")
  //     root.style.setProperty("--main-bgcolor", "#272f4e")
  //   } else {
  //     root.style.setProperty("--main-color", "#272f4e")
  //     root.style.setProperty("--main-bgcolor", "#efefff")
  //   }
  // }

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
