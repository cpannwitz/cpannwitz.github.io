import React from 'react'
import styled from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import AboutMe from '../components/AboutMe/AboutMe'
import SEO from '../components/SEO/SEO'

type AboutPageProps = PageProps<{
  aboutpage: {
    html: string
  }
}>

const AboutPage = ({ data, uri }: AboutPageProps) => {
  const { aboutpage } = data
  return (
    <>
      <SEO pageData={{ slug: uri, title: 'About' }} />
      <h1>About</h1>
      <AboutMe />
      <TextContainer dangerouslySetInnerHTML={{ __html: aboutpage.html || '' }} />
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    ...GetAboutPage
  }
`

const TextContainer = styled.div`
  margin-top: 4rem;
`
