import React, { useContext } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ThemeContext from '../Theme/ThemeContext'

interface GetLogosMainQuery {
  light: { name: string; publicURL: string }
  dark: { name: string; publicURL: string }
}

interface LogoProps {}
const Logo = ({}: LogoProps) => {
  // fetch light and dark version of logo image
  const logo = useStaticQuery<GetLogosMainQuery>(
    graphql`
      query {
        ...GetLogosMain
      }
    `
  )

  // use light or dark logo based on current theme
  const { isDark } = useContext(ThemeContext)
  // build src and alt attributes based on theme
  const imgProps = {
    src: isDark ? logo.light.publicURL : logo.dark.publicURL,
    alt: isDark ? logo.light.name : logo.dark.name
  }

  return (
    <StyledLogo>
      <Link to='/'>
        <img {...imgProps} />
      </Link>
    </StyledLogo>
  )
}

export default Logo

const StyledLogo = styled.div`
  padding-top: 1rem;
  width: 25%;
  max-width: 9rem;
`
