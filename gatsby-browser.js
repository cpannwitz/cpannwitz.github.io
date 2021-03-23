/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// add base CSS (water.css)
import 'water.css/out/water.min.css'
// add CSS for markdown syntax highlighting via PrismJS
import 'prism-themes/themes/prism-nord.css'

// wrap the page element with DefaultLayout
// to prevent remounting navbar etc.
import React from 'react'
import DefaultLayout from './src/layouts/default-layout'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <DefaultLayout {...props}>{element}</DefaultLayout>
}
