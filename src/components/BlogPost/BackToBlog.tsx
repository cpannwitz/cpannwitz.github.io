import { Link } from 'gatsby'
import React from 'react'
import { ArrowLeftCircle } from 'react-feather'

interface BackToBlogProps {}

const BackToBlog = ({}: BackToBlogProps) => {
  const blogLink = `/blog`
  return (
    <Link to={blogLink}>
      <ArrowLeftCircle size={20} /> All Blog Posts
    </Link>
  )
}

export default BackToBlog
