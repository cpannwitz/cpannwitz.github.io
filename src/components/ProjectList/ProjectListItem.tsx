import React from 'react'
import { Link } from 'gatsby'
import Box from '../Box/Box'
import { ArrowRightCircle as ArrowIcon } from 'react-feather'
import Thumbnail from '../Thumbnail/Thumbnail'
import BlogMeta from '../BlogPost/BlogMeta'
import useIsMobile from '../useIsMobile'
import { ProjectData } from '../../typings'

interface ProjectListItemProps extends ProjectData {}

const ProjectListItem = ({ frontmatter }: ProjectListItemProps) => {
  const postLink = `/projects${frontmatter.slug}`
  const { thumbnail, slug, title, description, date, keywords } = frontmatter

  const isMobile = useIsMobile()
  return (
    <Box horizontal key={slug}>
      {!isMobile && <Thumbnail postLink={postLink} thumbnail={thumbnail} />}
      <Box vertical>
        <h2>
          <Link to={postLink}>{title}</Link>
        </h2>
        <BlogMeta date={date} keywords={keywords} />
        {isMobile && <Thumbnail postLink={postLink} thumbnail={thumbnail} />}
        <p>{description}</p>
        <Link to={postLink}>
          View project <ArrowIcon size={18} />
        </Link>
      </Box>
    </Box>
  )
}

export default ProjectListItem
