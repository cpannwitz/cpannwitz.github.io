import React from 'react'
import { GitHub, Linkedin, Twitter, Mail } from 'react-feather'
import DevRantIcon from './DevRantIcon'
import Box from '../Box/Box'

interface SocialLinksProps {
  email: string
  github: string
  twitter: string
  linkedin: string
  devrant: string
  small?: boolean
}

const SocialLinks = ({ email, github, twitter, linkedin, devrant, small }: SocialLinksProps) => {
  const size = small ? 18 : 24
  const strokeWidth = small ? 2 : 1.5
  return (
    <Box horizontal horizontalRhythm>
      <a href={`mailto:${email}`}>
        <Mail size={size} strokeWidth={strokeWidth} />
      </a>
      <a href={github} target='_blank' rel='noopener noreferrer'>
        <GitHub size={size} strokeWidth={strokeWidth} />
      </a>
      <a href={twitter} target='_blank' rel='noopener noreferrer'>
        <Twitter size={size} strokeWidth={strokeWidth} />
      </a>
      <a href={linkedin} target='_blank' rel='noopener noreferrer'>
        <Linkedin size={size} strokeWidth={strokeWidth} />
      </a>
      <a href={devrant} target='_blank' rel='noopener noreferrer'>
        <DevRantIcon size={size} strokeWidth={strokeWidth} />
      </a>
    </Box>
  )
}

export default SocialLinks
