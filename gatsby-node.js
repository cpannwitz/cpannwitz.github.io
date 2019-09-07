const path = require(`path`)

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              categories
            }
            body
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const posts = data.allMdx.edges

    posts.forEach((post, index) => {
      // TODO: support next and previous posts
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node
      actions.createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          id: post.node.id,
          slug: post.node.fields.slug,
          // previous,
          // next,
        },
      })
    })
  })

// * =============================================================================================
// * ================================= WEBPACK =============================================
// * =============================================================================================

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        $components: path.resolve(__dirname, "src/components"),
      },
    },
  })
}

// * =============================================================================================
// * ================================= NODE =============================================
// * =============================================================================================

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: "id",
      node,
      value: node.id,
    })

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title,
    })

    createNodeField({
      name: "description",
      node,
      value: node.frontmatter.description,
    })

    createNodeField({
      name: "slug",
      node,
      value: node.frontmatter.slug,
    })

    createNodeField({
      name: "date",
      node,
      value: node.frontmatter.date || "",
    })

    createNodeField({
      name: "banner",
      node,
      banner: node.frontmatter.banner,
    })

    createNodeField({
      name: "categories",
      node,
      value: node.frontmatter.categories || [],
    })

    createNodeField({
      name: "keywords",
      node,
      value: node.frontmatter.keywords || [],
    })
  }
}
