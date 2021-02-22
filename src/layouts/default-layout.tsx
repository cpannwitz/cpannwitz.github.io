import React from 'react'
import ContentWrap from '../components/ContentWrap/ContentWrap'
import Footer from '../components/Footer/Footer'

import Navbar from '../components/Navbar/Navbar'
import ThemeProvider from '../components/Theme/ThemeProvider'

interface DefaultLayoutProps {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <ThemeProvider>
      <Navbar />
      <ContentWrap>{children}</ContentWrap>
      <Footer />
    </ThemeProvider>
  )
}

export default DefaultLayout
