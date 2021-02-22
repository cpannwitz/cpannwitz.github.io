import React from 'react'
import styled from 'styled-components'
// @ts-ignore
import config from '../../../config'

interface ContentWrapProps {
  children?: React.ReactNode
}

const ContentWrap = ({ children }: ContentWrapProps) => {
  return <Container>{children}</Container>
}

export default ContentWrap

const Container = styled.main`
  width: calc(100% - 2rem);
  max-width: calc(${config.maxWidth}px - 2rem);
  margin: 0 auto;
  padding: 2rem 1rem;
`
