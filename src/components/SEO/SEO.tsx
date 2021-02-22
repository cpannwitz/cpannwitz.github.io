import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import SchemaOrg from './SchemaOrg'
import { MetaData, PostFrontmatter, ProjectFrontmatter, SiteMetadata } from '../../typings'
// @ts-ignore
import icon from '../../../content/assets/icon.png'

interface SEOrawProps extends SEOProps {
  siteMetadata: MetaData
}

const SEOraw = ({ isBlogPost, siteMetadata: meta, pageData: page }: SEOrawProps) => {
  const title = page?.title ? `${page.title} | ${meta.title}` : meta.title
  const description = page?.description || meta.description
  const image = `${meta.siteUrl}${page?.thumbnail?.childImageSharp?.fluid.src || icon}`
  const siteUrl = page?.slug ? `${meta.siteUrl}${page?.slug}` : meta.siteUrl
  const datePublished = isBlogPost && page?.date ? page.date : undefined
  return (
    <>
      <Helmet
        defer={true}
        htmlAttributes={{
          lang: meta.language
        }}
      >
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='image' content={image} />

        <meta property='og:url' content={siteUrl} />
        <meta property='og:type' content={isBlogPost ? 'article' : 'website'} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content={meta.twitterHandle} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={siteUrl}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        author={meta.author}
        defaultTitle={title}
      />
    </>
  )
}

interface SEOProps {
  isBlogPost?: boolean
  pageData?: Partial<PostFrontmatter | ProjectFrontmatter>
}

const SEO = (props: SEOProps) => {
  const data = useStaticQuery<SiteMetadata>(graphql`
    query {
      ...SiteMetadata
    }
  `)

  const { siteMetadata } = data.site
  return <SEOraw siteMetadata={siteMetadata} {...props} />
}

export default SEO
