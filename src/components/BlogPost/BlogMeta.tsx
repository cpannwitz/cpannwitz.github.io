import React from 'react'
import { Folder as FolderIcon } from 'react-feather'

interface BlogMetaProps {
  date: string
  category?: string
  keywords?: string[]
}

const BlogMeta = ({ date, category, keywords }: BlogMetaProps) => {
  return (
    <small>
      <span>{date}</span>
      {category && (
        <span>
          &nbsp;| <FolderIcon size={13} /> {category}
        </span>
      )}
      {keywords && <span>&nbsp;| {keywords.map(k => `#${k} `)}</span>}
    </small>
  )
}

export default BlogMeta
