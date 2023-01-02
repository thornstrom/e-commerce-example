import Image from 'next/image'
import ShoppingCartImage from '../public/shopping-cart.svg'
import Head from 'next/head'
import Link from 'next/link'
import { FC, useState } from 'react'
import styles from '../styles/Header.module.css'
import { ProfileButton } from './Header/ProfileButton'
import { ProfileButton as ProfileButton2 } from './HeaderComponents/ProfileButton'
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap'

export const Header: FC<{ title: string; login: boolean }> = ({ title }) => {
  const [profile, setProfile] = useState(true)
  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Nav className="me-auto">
          <Link href="/" className="test">
            Home
          </Link>
          <Link href="/about" className="test">
            About
          </Link>
          <Link href="/products" className="test">
            Products
          </Link>
        </Nav>
        <Button
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          variant="outline-secondary"
          className="rounded-sm"
        >
          <Image src={ShoppingCartImage} alt="Shopping Cart Image" width={25} height={25} priority />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(25%, 25%)',
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </Navbar>
  )
}

export default Header
