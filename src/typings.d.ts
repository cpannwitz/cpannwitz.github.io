interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.png'
declare module '*.svg'
declare module '*.jpg'

export interface AvatarFile {
  avatar: {
    publicURL: string
    name: string
  }
}

export interface MetaData {
  title: string
  description: string
  author: string
  siteUrl: string
  email: string
  job: string
  keywords: string[]
  socialURLs: {
    github: string
    twitter: string
    linkedin: string
    devrant: string
  }
  twitterHandle: string
  language: string
}
export interface SiteMetadata {
  site: {
    siteMetadata: MetaData
  }
}

// ======================================
// === BLOGPOSTS
// ======================================

export interface AllPosts {
  nodes: PostData[]
}

export interface PostData {
  id: string
  frontmatter: PostFrontmatter
}
export interface PostDataHTML extends PostData {
  html: string
}

export interface PostFrontmatter {
  title: string
  slug: string
  date: string
  description: string
  keywords: string[]
  category: string
  thumbnail: Thumbnail
}

export interface Thumbnail {
  publicURL
  extension
  name
  childImageSharp?: {
    fluid: {
      aspectRatio: number
      sizes: string
      src: string
      srcSet: string
      srcSetWebp: string
      srcWebp: string
      tracedSVG: string
    }
  }
}

// ======================================
// === PROJECTS
// ======================================

export interface AllProjects {
  nodes: ProjectData[]
}

export interface ProjectData {
  id: string
  frontmatter: ProjectFrontmatter
}
export interface ProjectDataHTML extends ProjectData {
  html: string
}

export interface ProjectFrontmatter {
  title: string
  slug: string
  date: string
  description: string
  keywords: string[]
  thumbnail: Thumbnail
}
