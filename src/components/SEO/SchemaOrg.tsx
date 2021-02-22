import React from 'react'
import { Helmet } from 'react-helmet'

interface SchemaOrgProps {
  author?: string
  url: string
  title: string
  defaultTitle: string
  datePublished?: string
  description?: string
  image?: string
  isBlogPost?: boolean
}
export default React.memo(
  ({ author, title, url, defaultTitle, datePublished, description, image, isBlogPost }: SchemaOrgProps) => {
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url,
        name: title,
        alternateName: defaultTitle
      }
    ]

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': url,
                  name: title,
                  image
                }
              }
            ]
          },
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: image
            },
            description,
            author: {
              '@type': 'Person',
              url: url,
              image: image,
              name: author
            },
            publisher: {
              '@type': 'Person',
              url: url,
              image: image,
              name: author
            },
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': url
            },
            datePublished
          }
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type='application/ld+json'>{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
