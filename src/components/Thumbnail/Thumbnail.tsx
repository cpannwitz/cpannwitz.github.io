import React from 'react'
import { Link } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import styled from 'styled-components'
import { Thumbnail as IThumbnail } from '../../typings'
import useIsMobile from '../useIsMobile'

interface ThumbnailImageProps {
  thumbnail: IThumbnail
}

const ThumbnailImage = ({ thumbnail }: ThumbnailImageProps) => {
  if (thumbnail && thumbnail.extension === 'svg') {
    return <img src={thumbnail.publicURL} alt={thumbnail.name} title={thumbnail.name} />
  }

  if (thumbnail && thumbnail.childImageSharp) {
    return <GatsbyImage fluid={thumbnail.childImageSharp.fluid} />
  }

  return null
}

interface ThumbnailProps {
  postLink?: string
  thumbnail: IThumbnail
}
const Thumbnail = ({ postLink, thumbnail }: ThumbnailProps) => {
  const isMobile = useIsMobile()
  if (postLink) {
    return (
      <ThumbnailContainer isMobile={isMobile}>
        <Link to={postLink}>
          <ThumbnailImage thumbnail={thumbnail} />
        </Link>
      </ThumbnailContainer>
    )
  }
  return (
    <ThumbnailContainer fullWidth isMobile={isMobile}>
      <ThumbnailImage thumbnail={thumbnail} />
    </ThumbnailContainer>
  )
}

const ThumbnailContainer = styled.div<{ fullWidth?: boolean; isMobile?: boolean }>`
  min-width: ${p => (p.fullWidth || p.isMobile ? `100%` : `30%`)};
  width: ${p => (p.fullWidth || p.isMobile ? `100%` : `30%`)};
  margin: ${p => (p.fullWidth || p.isMobile ? `2rem 0` : `0 2rem 0 0`)};
`

export default Thumbnail
