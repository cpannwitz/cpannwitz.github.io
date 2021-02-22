import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { SiteMetadata } from '../../typings'
import SocialLinks from '../AboutMe/SocialLinks'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const data = useStaticQuery<SiteMetadata>(
    graphql`
      query {
        ...SiteMetadata
      }
    `
  )
  const { author, email, socialURLs } = data.site.siteMetadata
  return (
    <StyledFooter>
      <small>© {author}</small>
      <SocialLinks small={true} email={email} {...socialURLs}></SocialLinks>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  border: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  background-color: var(--background-alt);
`
