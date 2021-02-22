import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { AllPosts } from '../typings'
import BlogList from '../components/BlogList/BlogList'
import BlogListItem from '../components/BlogList/BlogListItem'
import SEO from '../components/SEO/SEO'

type BlogPageProps = PageProps<{
  allMarkdownRemark: AllPosts
}>

const title = `Blog`
const BlogPage = ({ data, uri }: BlogPageProps) => {
  const blogListContent = data.allMarkdownRemark.nodes.map(props => {
    return <BlogListItem key={props.id} {...props} />
  })
  return (
    <>
      <SEO pageData={{ slug: uri, title: title }} />
      <h1>{title}</h1>
      <BlogList>{blogListContent}</BlogList>
    </>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query GetAllPostsQuery(
    $filterBlog: MarkdownRemarkFilterInput!
    $sort: MarkdownRemarkSortInput!
    $imgMaxWidth: Int!
    $imgQuality: Int!
    $dateFormat: String!
  ) {
    ...GetAllPosts
  }
`
