import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SocialLinks from './SocialLinks'
import Avatar from './Avatar'
import Box from '../Box/Box'
import { AvatarFile, SiteMetadata } from '../../typings'

type GetAboutMeQuery = AvatarFile & SiteMetadata
interface AboutMeProps {}

const AboutMe = ({}: AboutMeProps) => {
  const data = useStaticQuery<GetAboutMeQuery>(
    graphql`
      query {
        ...GetAboutMe
      }
    `
  )
  const { avatar } = data
  const { email, author, job, socialURLs } = data.site.siteMetadata

  return (
    <Box horizontal>
      <Avatar src={avatar.publicURL} alt={avatar.name} title={author} loading='lazy' />

      <Box vertical verticalRhythm ml='1rem'>
        <b>{author}</b>
        <small>{job}</small>
        <SocialLinks email={email} {...socialURLs} />
      </Box>
    </Box>
  )
}

export default AboutMe
