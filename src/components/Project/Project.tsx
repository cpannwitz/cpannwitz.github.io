import React from 'react'
import styled from 'styled-components'
import { ProjectDataHTML } from '../../typings'
import BlogMeta from '../BlogPost/BlogMeta'
import Thumbnail from '../Thumbnail/Thumbnail'

interface ProjectProps {
  data: ProjectDataHTML
}

const Project = ({ data: { frontmatter, html } }: ProjectProps) => {
  const { thumbnail, title, date, keywords } = frontmatter
  return (
    <Container>
      <h1>{title}</h1>
      <BlogMeta date={date} keywords={keywords} />
      {thumbnail && <Thumbnail thumbnail={thumbnail} />}
      <div dangerouslySetInnerHTML={{ __html: html || '' }} />
    </Container>
  )
}

export default Project

const Container = styled.div``
