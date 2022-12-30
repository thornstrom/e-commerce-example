import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="bg-light">
    <Header title={title} login={false} />
    {children}
    <Footer />
  </div>
)

export default Layout
