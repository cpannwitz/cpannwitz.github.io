'use strict'

const config = require('./config.js')

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_REFRESH: true
  },
  siteMetadata: config.metaData,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: config.metaData.siteUrl
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}${config.content.blogPostsPath}`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}${config.content.pagesPath}`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}${config.content.projectsPath}`,
        name: `projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}${config.content.assetsPath}`,
        name: `assets`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: config.maxWidth,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: config.maxWidth,
              height: 'auto',
              preload: 'auto',
              muted: true,
              autoplay: false,
              playsinline: true,
              controls: true,
              loop: true
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // eslint-disable-next-line max-len
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20" style="margin: 0 0 -0.2rem 0.7rem; "><path fill="white" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `autolink-headers`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true
            }
          },
          'gatsby-remark-prismjs',
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.metaData.title,
        short_name: config.metaData.title,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#222a39',
        display: 'standalone',
        icon: config.metaData.icon,
        theme_color_in_head: false,
        crossOrigin: `use-credentials`
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const siteUrl = site.siteMetadata.siteUrl

              return allMarkdownRemark.edges.map(edge => {
                const slug = edge.node.frontmatter.slug
                const postText = `
                  <div style="margin-top=55px; font-style: italic;">(You can read this article on my blog <a href="${
                    siteUrl + slug
                  }">pnwtz.me</a>.)</div>
                `

                let html = edge.node.html
                // Hacky workaround for https://github.com/gaearon/overreacted.io/issues/65
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: siteUrl + slug,
                  guid: siteUrl + slug,
                  custom_elements: [{ 'content:encoded': html + postText }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex: "/content/blog/" } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        slug
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'pnwtz - RSS Feed',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/'
            // optional configuration to specify external rss feed, such as feedburner
            // link: 'https://feeds.feedburner.com/gatsby/blog'
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-simple-analytics`
  ]
}
