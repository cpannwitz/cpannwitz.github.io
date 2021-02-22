import React from 'react'
import { Link } from 'gatsby'
import Box from '../Box/Box'
import { ArrowRightCircle as ArrowIcon } from 'react-feather'
import Thumbnail from '../Thumbnail/Thumbnail'
import BlogMeta from '../BlogPost/BlogMeta'
import useIsMobile from '../useIsMobile'
import { PostData } from '../../typings'

interface BlogListItemProps extends PostData {}

const BlogListItem = ({ frontmatter }: BlogListItemProps) => {
  const { thumbnail, slug, title, description, date, category } = frontmatter
  const postLink = `/blog${slug}`

  const isMobile = useIsMobile()

  return (
    <Box horizontal key={slug}>
      {!isMobile && <Thumbnail postLink={postLink} thumbnail={thumbnail} />}
      <Box vertical>
        <h2>
          <Link to={postLink}>{title}</Link>
        </h2>
        <BlogMeta date={date} category={category} />
        {isMobile && <Thumbnail postLink={postLink} thumbnail={thumbnail} />}
        <p>{description}</p>
        <Link to={postLink}>
          Read post <ArrowIcon size={18} />
        </Link>
      </Box>
    </Box>
  )
}

export default BlogListItem
