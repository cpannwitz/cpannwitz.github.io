import React from 'react'
import Box from '../Box/Box'

interface BlogListProps {
  children?: React.ReactNode
}

const BlogList = ({ children }: BlogListProps) => {
  return (
    <Box pt='1rem' allChildren='margin-bottom: 4rem;'>
      {children}
    </Box>
  )
}

export default BlogList
