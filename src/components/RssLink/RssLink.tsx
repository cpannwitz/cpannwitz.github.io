import React from 'react'
import styled from 'styled-components'
import { Rss } from 'react-feather'

interface RssLinkProps {}

const RssLink = ({}: RssLinkProps) => {
  return (
    <StyledLink href='/rss.xml' target='_blank' rel='noopener noreferrer'>
      <Rss size={24} />
    </StyledLink>
  )
}

export default RssLink

const StyledLink = styled.a`
  /* apply link cursor  */
  cursor: pointer;

  /* on hover rotate icon, color, bgcolor */
  svg {
    color: #ccc;
    transition: 0.25s ease-in;
    transform-origin: 50% 50%;
    border-radius: 50%;
    padding: 0.5rem;
    &:hover {
      /* color: white; */
      transform: scale(1.2);
      background-color: var(--background);
    }
  }
`
