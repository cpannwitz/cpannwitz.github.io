import React from 'react'
import styled from 'styled-components'

interface BoxProps extends StyledBoxProps {
  children?: React.ReactNode
}

const Box = ({ children, ...props }: BoxProps) => {
  if (props.vertical && props.horizontal) throw new Error('Either horizontal OR vertical allowed!')
  return <StyledBox {...props}>{children}</StyledBox>
}

export default Box

interface StyledBoxProps {
  vertical?: boolean
  verticalRhythm?: boolean
  horizontal?: boolean
  horizontalRhythm?: boolean
  m?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  p?: string
  pt?: string
  pr?: string
  pb?: string
  pl?: string
  allChildren?: string
}
const StyledBox = styled.div<StyledBoxProps>`
  ${p =>
    p.horizontal
      ? ` display: flex; align-items: center; ${p.horizontalRhythm && '& > * {margin-right: 1rem;}'}`
      : p.vertical
      ? ` display: flex; flex-direction: column; ${p.verticalRhythm && '& > * {margin-bottom: 0.5rem;}'} `
      : ''}
  margin: ${p => p.m ?? ''};
  margin-top: ${p => p.mt ?? ''};
  margin-right: ${p => p.mr ?? ''};
  margin-bottom: ${p => p.mb ?? ''};
  margin-left: ${p => p.ml ?? ''};
  padding: ${p => p.p ?? ''};
  padding-top: ${p => p.pt ?? ''};
  padding-right: ${p => p.pr ?? ''};
  padding-bottom: ${p => p.pb ?? ''};
  padding-left: ${p => p.pl ?? ''};
  ${p => (p.allChildren ? `& > * {${p.allChildren}}` : '')}
`
