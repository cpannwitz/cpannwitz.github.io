import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { PostData } from '../../typings'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'

interface LinkBuild extends PostData {
  right?: boolean
  left?: boolean
}
const LinkBuild = ({ right, left, frontmatter }: LinkBuild) => {
  const link = `/blog${frontmatter.slug}`
  const title = right ? 'Previous' : 'Next'
  return (
    <div>
      <small>{title} Post</small>
      <br />
      <StyledLink to={link}>
        {left && <ArrowLeftCircle size={20} />}
        <span>{frontmatter.title}</span>
        {right && <ArrowRightCircle size={20} />}
      </StyledLink>
    </div>
  )
}

interface PrevNextPostProps {
  prevPost: null | PostData
  nextPost: null | PostData
}

const PrevNextPost = ({ prevPost, nextPost }: PrevNextPostProps) => {
  return (
    <Container>
      {nextPost ? <LinkBuild left={true} {...nextPost} /> : <Placeholder />}
      {prevPost ? <LinkBuild right={true} {...prevPost} /> : <Placeholder />}
    </Container>
  )
}

export default PrevNextPost

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
`

const Placeholder = styled.div`
  visibility: hidden;
  &:before {
    content: ' ';
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 1.4;
  & > *:first-child {
    padding-right: 0.3rem;
  }
`
