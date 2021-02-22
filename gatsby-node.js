'use strict'

const path = require(`path`)
const config = require('./config.js')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/post-template.tsx`)
  const projectTemplate = path.resolve(`./src/templates/project-template.tsx`)

  // fetch blog post and project data, to create pages
  const data = await graphql(`
    {
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "${config.content.blogPostsPath}" }, frontmatter: {draft: {ne: true}} }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          id
          frontmatter {
            slug
            title
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "${config.content.projectsPath}" }, frontmatter: {draft: {ne: true}} }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panicOnBuild(`There was an error loading blog posts / projects!`, result.errors)
    return
  }

  // * render all project pages
  const allProjects = data.data.projects.nodes

  if (!allProjects || allProjects.length <= 0) {
    reporter.panicOnBuild(`There are no projects!`)
    return
  }

  allProjects.forEach(project => {
    createPage({
      path: '/projects' + project.frontmatter.slug,
      component: projectTemplate,
      context: {
        id: project.id,
        slug: project.frontmatter.slug,
        imgMaxWidth: config.maxWidth,
        imgQuality: config.content.imgQuality,
        dateFormat: config.content.dateFormat
      }
    })
  })

  // * render all blog post pages
  const allPosts = data.data.blog.nodes

  if (!allPosts || allPosts.length <= 0) {
    reporter.panicOnBuild(`There are no blog posts!`)
    return
  }

  allPosts.forEach((post, index) => {
    const nextPost = index === 0 ? null : allPosts[index - 1]
    const prevPost = index === allPosts.length - 1 ? null : allPosts[index + 1]
    createPage({
      path: '/blog' + post.frontmatter.slug,
      component: postTemplate,
      context: {
        id: post.id,
        slug: post.frontmatter.slug,
        prevPost,
        nextPost,
        imgMaxWidth: config.maxWidth,
        imgQuality: config.content.imgQuality,
        dateFormat: config.content.dateFormat
      }
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      filterBlog: {
        'fileAbsolutePath': { 'regex': config.content.blogPostsPath },
        'frontmatter': { 'draft': { 'ne': true } }
      },
      filterProjects: {
        'fileAbsolutePath': { 'regex': config.content.projectsPath },
        'frontmatter': { 'draft': { 'ne': true } }
      },
      sort: config.content.sort,
      imgMaxWidth: config.maxWidth,
      imgQuality: config.content.imgQuality,
      dateFormat: config.content.dateFormat
    }
  })
}

exports.onCreateNode = ({ node }) => {
  // * create blog post / project fallback data
  // the node should be located in 'content/blog/' to be considered
  // const isBlogPost = new RegExp(/content\/blog\//).test(node.fileAbsolutePath)
  const isBlogPost = new RegExp(config.blogPostsPath).test(node.fileAbsolutePath)
  // the node should be located in 'content/projects/' to be considered
  // const isProject = new RegExp(/content\/projects\//).test(node.fileAbsolutePath)
  const isProject = new RegExp(config.projectsPath).test(node.fileAbsolutePath)
  if (node.internal.type === 'MarkdownRemark' && (isBlogPost || isProject)) {
    // if there's no date, set it to now
    if (!node.frontmatter.date) {
      node.frontmatter.date = new Date().toISOString()
    }
    // if there's no description, set it to empty
    if (!node.frontmatter.description) {
      node.frontmatter.description = ''
    }
    // if there's no thumbnail, use the 404 logo
    if (!node.frontmatter.thumbnail) {
      node.frontmatter.thumbnail = '../../assets/logo-404.svg'
    }
    // if there are no keywords or a category, set them to empty
    if (!node.frontmatter.keywords) {
      node.frontmatter.keywords = []
    }
    if (!node.frontmatter.category) {
      node.frontmatter.category = ''
    }
  }
}
