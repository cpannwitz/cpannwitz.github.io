---
title: "Introduction to GatsbyJS"
slug: "/introduction-to-gatsby"
date: "2021-02-19T10:51:14Z"
description: "Start building your own blog with GatsbyJS"
category: "blog"
keywords: ["gatsbyjs", "blog", "markdown"]
draft: true
---

## Parts

mandatory files & folders:
- `package.json` -> configuration of project & its dependencies
- `gatsby-config.js` -> configuration of Gatsby and its plugins
- `gatsby-node.js` -> configuration of page creation process
- `src/pages/index.[js|tsx]` -> automatic creation of index pages via file

typical files & folders:
- `gatsby-browser.js` -> configuration of browser specifics, e.g. CSS-file imports
- `gatsby-ssr.js` -> configuration of server side rendering specifics
- `src/layouts/*.[js|tsx]` -> use layout components for different page types
- `src/templates/*.[js|tsx]` -> use template components for different layout types
- `src/components/*.[js|tsx]` -> all components you need to create your layout and functionality