'use strict'

module.exports = {
  metaData: {
    title: 'pnwtz',
    description: 'Stories of Project Management & Web Development.',
    icon: './content/assets/icon.png',
    author: 'Christian Pannwitz',
    siteUrl: process.env.NODE_ENV === 'development' ? 'localhost:8000' : 'https://pnwtz.me',
    email: 'ch.von.pa@gmail.com',
    job: 'Project Manager | Fullstack Web Developer',
    keywords: ['Webdesign', 'UX Design', 'Web Developer', 'Fullstack', 'React'],
    socialURLs: {
      twitter: 'https://twitter.com/unrealchrisp',
      github: 'https://github.com/cpannwitz',
      linkedin: 'https://www.linkedin.com/in/christianpannwitz/',
      devrant: 'https://devrant.com/users/unrealchrisp'
    },
    twitterHandle: '@unrealchrisp',
    language: 'en'
  },
  maxWidth: 760,
  content: {
    pagesPath: `/content/pages/`,
    assetsPath: `/content/assets/`,
    blogPostsPath: `/content/blog/`,
    projectsPath: `/content/projects/`,
    sort: { 'fields': 'frontmatter___date', 'order': 'DESC' },
    imgQuality: 75,
    dateFormat: 'MMMM DD, YYYY'
  }
}
