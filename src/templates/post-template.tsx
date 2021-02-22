import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { PostData, PostDataHTML } from '../typings'
import PrevNextPost from '../components/PrevNextPost/PrevNextPost'
import BlogPost from '../components/BlogPost/BlogPost'
import SEO from '../components/SEO/SEO'
import Box from '../components/Box/Box'
import BackToBlog from '../components/BlogPost/BackToBlog'

interface PostPageData {
  markdownRemark: PostDataHTML
}

interface PostPageContext {
  id: string
  slug: string
  nextPost: null | PostData
  prevPost: null | PostData
}

const PostTemplate = ({ data, pageContext }: PageProps<PostPageData, PostPageContext>) => {
  const { markdownRemark } = data
  const { nextPost, prevPost } = pageContext
  return (
    <>
      <SEO pageData={markdownRemark.frontmatter} isBlogPost={true} />
      <BackToBlog />
      <Box m='2rem 0'>
        <BlogPost data={markdownRemark} />
      </Box>
      <PrevNextPost nextPost={nextPost} prevPost={prevPost} />
    </>
  )
}

export default PostTemplate

export const query = graphql`
  query PostTemplateQuery($id: String!, $imgMaxWidth: Int!, $imgQuality: Int!, $dateFormat: String!) {
    markdownRemark(id: { eq: $id }) {
      ...GetPost
    }
  }
`
