import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  max-width: 436px;
  width: 100%;
  z-index: 5;
  background: linear-gradient(127.16deg, rgba(255, 255, 255, 0.168) -2.34%, rgba(255, 255, 255, 0.126) 102.72%);
  backdrop-filter: blur(34.1796px);
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
