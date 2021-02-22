import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Page404Content = () => {
  const page404 = useStaticQuery(
    graphql`
      query {
        ...Get404Logo
        ...Get404Page
      }
    `
  )
  const imgProps = {
    src: page404.logo404.publicURL,
    alt: page404.logo404.name
  }

  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: page404.page404.html || '' }} />
      <Styled404 {...imgProps} />
    </Container>
  )
}

const Page404 = () => {
  return <Page404Content />
}

export default Page404

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Styled404 = styled.img`
  margin-top: 2rem;
  width: 80%;
`
