module.exports = {
  siteMetadata: {
    title: "pnwtz - Blog.",
    author: "Christian Pannwitz",
    siteUrl: "https://pnwtz.me/",
    description: "Stories of frontend engineering.",
    keywords: ["Software Engineer", "Web Developer", "Fullstack", "React"],
    social: {
      twitter: "https://twitter.com/unrealchrisp",
      github: "https://github.com/cpannwitz",
      linkedin: "https://www.linkedin.com/in/christianpannwitz/",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "pnwtz - Blog.",
        short_name: "pnwtz",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#263859",
        display: "standalone",
        icon: "content/assets/icon.png",
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    "gatsby-plugin-catch-links",
  ],
}
