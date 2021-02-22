import React from 'react'
import styled from 'styled-components'

interface AvatarProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

const Avatar = ({ alt, src }: AvatarProps) => {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  )
}

export default Avatar

const Container = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: var(--shadow-default);
`
