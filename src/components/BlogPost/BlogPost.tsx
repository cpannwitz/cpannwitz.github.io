import React from 'react'
import styled from 'styled-components'
import { PostDataHTML } from '../../typings'
import Thumbnail from '../Thumbnail/Thumbnail'
import BlogMeta from './BlogMeta'

interface BlogPostProps {
  data: PostDataHTML
}

const BlogPost = ({ data: { frontmatter, html } }: BlogPostProps) => {
  const { thumbnail, title, date, category } = frontmatter
  return (
    <Container>
      <h1>{title}</h1>
      <BlogMeta date={date} category={category} />
      {thumbnail && <Thumbnail thumbnail={thumbnail} />}
      <div dangerouslySetInnerHTML={{ __html: html || '' }} />
    </Container>
  )
}

export default BlogPost

const Container = styled.div``
