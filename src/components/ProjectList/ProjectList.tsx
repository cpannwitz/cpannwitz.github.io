import React from 'react'
import Box from '../Box/Box'

interface ProjectListProps {
  children?: React.ReactNode
}

const ProjectList = ({ children }: ProjectListProps) => {
  return (
    <Box pt='1rem' allChildren='margin-bottom: 4rem;'>
      {children}
    </Box>
  )
}

export default ProjectList
