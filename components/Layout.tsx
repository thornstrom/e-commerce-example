import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="bg-gray-400 flex-auto flex-col h-screen">
    <Header title={title} login={false} />
    {children}
    <div className="pt-6">
      <Footer />
    </div>
  </div>
)

export default Layout
